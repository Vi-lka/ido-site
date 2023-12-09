import { notFound } from "next/navigation";
import { Event, Events } from "../types/entity-types";

export const getEventByID = async ({
  id,
}: {
  id: string,
}): Promise<Event> => {
  const headers = { "Content-Type": "application/json" };
  const query = /* GraphGL */ `
    query EventByID {
      event(id: "${id}") {
        data {
          id
          attributes {
            title
            image {
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
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  description
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
}: {
  page: number;
  per: number;
  sort?: string;
  search?: string;
}): Promise<Events> => {
  const headers = { "Content-Type": "application/json" };
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