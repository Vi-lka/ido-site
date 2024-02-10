import axios from "axios";
import { SubscribedDescription } from "../types/entity-types";

type Err = {
    error: {
      status: number,
      name: string,
      message: string,
    }
}

type User = {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    subscribed: boolean
}

export const getUserInfo = async (token: string): Promise<User> => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me`, 
            config
        );
        return data as User
    } catch (err) {
        console.log(err)
        if (axios.isAxiosError(err) && err.response) {
          const errorMessage = (err.response.data as Err).error.message
          console.log("AxiosError: ", errorMessage)
          throw new Error(errorMessage)
        } else {
          const errorMessage = (err as Error).message
          console.log("Error: ", errorMessage)
          throw new Error(errorMessage)
        }
    }
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
