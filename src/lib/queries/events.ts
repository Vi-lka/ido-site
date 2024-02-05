import { notFound } from "next/navigation";
import { Event, Events, EventsCategories } from "../types/entity-types";

export const getEventByID = async ({
  id,
}: {
  id: string,
}): Promise<Event> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query EventByID {
      event(id: "${id}") {
        data {
          id
          attributes {
            title
            date {
              day month year
            }
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
            additionalImages {
              data {
                attributes {
                  url
                }
              }
            }
            text
            category {
              data {
                id
                attributes {
                  slug
                  title
                  description
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
            content {
              __typename
              ...on ComponentCustomRichText {
                title
                text
              }
              ...on ComponentCustomSlider {
                title
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ...on ComponentCustomVideo {
                title
                video {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ...on ComponentCustomVideoEmbed {
                title
                embed
              }
              ...on ComponentCustomFilesList {
                title
                list {
                  name
                  file {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
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
    throw new Error(`Failed to fetch data 'Event id: ${id}'`);
  }

  const json = (await res.json()) as { 
    data: { 
      event: { 
        data: Event 
      } 
    }; 
  };

  if (json.data.event.data == null) notFound()
  
  const event = Event.parse(json.data.event.data);
  
  return event;
};

export const getEvents = async ({
  page,
  per,
  sort = "order:asc",
  search = "",
  category = ""
}: {
  page: number;
  per: number;
  sort?: string;
  search?: string;
  category?: string;
}): Promise<Events> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query Events {
      events(
          sort: "${sort}", 
          pagination: {
            page: ${page},
            pageSize: ${per}
          },
          filters: {
            title: {
              containsi: "${search}"
            },
            ${category && `
              category: {
                slug: {
                  containsi: "${category}"
                }
              }
            `}
          }
      ) {
        meta {
          pagination {
            total
          }
        }
        data {
          id
          attributes {
            title
            date {
              day month year
            }
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
            category {
              data {
                id
                attributes {
                  slug
                  title
                  description
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
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
    throw new Error("Failed to fetch data 'Events'");
  }

  const json = (await res.json()) as { data: { events: Events }; };

  if (
    json.data.events.meta.pagination.total === 0 ||
    json.data.events.data.length === 0
  ) {
    notFound();
  }
  
  const events = Events.parse(json.data.events);
  
  return events;
};

export const getEventsCategories = async ({
  search = "",
}: {
  search?: string;
}): Promise<EventsCategories> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query EventsCategories {
      eventsCategories(
          filters: {
            title: {
              containsi: "${search}"
            },
          }
      ) {
        meta {
          pagination {
            total
          }
        }
        data {
          id
          attributes {
            slug
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
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
    throw new Error("Failed to fetch data 'Events Categories'");
  }

  const json = (await res.json()) as { data: { eventsCategories: EventsCategories }; };

  if (
    json.data.eventsCategories.meta.pagination.total === 0 ||
    json.data.eventsCategories.data.length === 0
  ) {
    notFound();
  }
  
  const eventsCategories = EventsCategories.parse(json.data.eventsCategories);
  
  return eventsCategories;
};