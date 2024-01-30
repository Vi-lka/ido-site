import { notFound } from "next/navigation";
import { Methodological, Methodologicals } from "../types/entity-types";

export const getMethodologicalByID = async ({
  id,
}: {
  id: string,
}): Promise<Methodological> => {
  const headers = { "Content-Type": "application/json" };
  const query = /* GraphGL */ `
    query MethodologicalByID {
      methodResource(id: "${id}") {
        data {
          id
          attributes {
            title
            section {
              data {
                attributes {
                  slug
                  title
                }
              }
            }
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
            files {
              __typename
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
            additionalImages {
              data {
                attributes {
                  url
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
    throw new Error(`Failed to fetch data 'Methodological id: ${id}'`);
  }

  const json = (await res.json()) as { 
    data: { 
      methodResource: { 
        data: Methodological 
      } 
    }; 
  };

  if (json.data.methodResource.data == null) notFound()
  
  const methodological = Methodological.parse(json.data.methodResource.data);
  
  return methodological;
};

export const getMethodological = async ({
  page,
  per,
  sort = "order:asc",
  search = "",
  section
}: {
  page: number;
  per: number;
  sort?: string;
  search?: string;
  section?: string;
}): Promise<Methodologicals> => {
  const headers = { "Content-Type": "application/json" };
  const query = /* GraphGL */ `
    query Methodological {
      methodResources(
          sort: "${sort}", 
          pagination: {
            page: ${page},
            pageSize: ${per}
          },
          filters: {
            title: {
              containsi: "${search}"
            },
            ${section ? `
            section: {
              slug: {
                containsi: "${section}"
              }
            }
          ` : ""}
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
            description
            section {
              data {
                attributes {
                  slug
                  title
                }
              }
            }
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
    throw new Error("Failed to fetch data 'Methodologicals'");
  }

  const json = (await res.json()) as { data: { methodResources: Methodologicals }; };

  if (
    json.data.methodResources.meta.pagination.total === 0 ||
    json.data.methodResources.data.length === 0
  ) {
    notFound();
  }
  
  const methodologicals = Methodologicals.parse(json.data.methodResources);
  
  return methodologicals;
};