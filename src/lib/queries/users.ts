import { SubscribedDescription, SuggestDescription } from "../types/entity-types";

type User = {
    id: number,
    username: string,
    email: string,
    confirmed: boolean,
    blocked: boolean,
    subscribed: boolean,
    suggest: {
      data: {
        id: number
        attributes: {
          publishedAt: string | null
        }
      } | null
    }
}

export const getUserInfo = async (token: string): Promise<User> => {
    const headers = { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    };
    const query = /* GraphGL */ `
      query Me {
        me {
          id
          username
          email
          confirmed
          blocked
          subscribed
          suggest {
            data {
              id
              attributes {
                publishedAt
              }
            }
          }
        }
      }
    `;
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
      headers,
      method: "POST",
      body: JSON.stringify({
        query,
      }),
      cache: "no-store"
    });
  
    if (!res.ok) {
      // Log the error to an error reporting service
      const err = await res.text();
      console.log(err);
      // Throw an error
      throw new Error("Failed to fetch data User");
    }
  
    const json = (await res.json()) as {
      data: {
        me: User
      };
    };
  
    return json.data.me;
};


export const getSubscribedDescription = async (): Promise<SubscribedDescription> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query GetSubscribedDescription {
      subscribedDescription {
        data {
          attributes {
            subscribed
            not_subscribed
          }
        }
      }
    }
  `;
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    next: {
      tags: ["strapi"],
      // Next.js issue: if fetch in the component, not on the page, the cache is always MISS with tags, but with Time-based Revalidation both works correctly
      revalidate: 60,
    },
  });

  if (!res.ok) {
    // Log the error to an error reporting service
    const err = await res.text();
    console.log(err);
    // Throw an error
    throw new Error("Failed to fetch data 'Subscribed Description'");
  }

  const json = (await res.json()) as {
    data: {
      subscribedDescription: {
        data: {
          attributes: SubscribedDescription
        };
      };
    };
  };

  const data = SubscribedDescription.parse(json.data.subscribedDescription.data.attributes);

  return data;
};

export const getSuggestDescription = async (): Promise<SuggestDescription> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query GetSuggestDescription {
      suggestDescription {
        data {
          attributes {
            description_long
            description_short
            suggestExist
          }
        }
      }
    }
  `;
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    next: {
      tags: ["strapi"],
      // Next.js issue: if fetch in the component, not on the page, the cache is always MISS with tags, but with Time-based Revalidation both works correctly
      revalidate: 60,
    },
  });

  if (!res.ok) {
    // Log the error to an error reporting service
    const err = await res.text();
    console.log(err);
    // Throw an error
    throw new Error("Failed to fetch data 'Suggest Description'");
  }

  const json = (await res.json()) as {
    data: {
      suggestDescription: {
        data: {
          attributes: SuggestDescription
        };
      };
    };
  };

  const data = SuggestDescription.parse(json.data.suggestDescription.data.attributes);

  return data;
};