import { notFound } from "next/navigation";
import { Methodologicals } from "../types/entity-types";

export const getMethodologicals = async ({
    page,
    per,
    sort = "order:asc",
    search = "",
  }: {
    page: number;
    per: number;
    sort?: string;
    search?: string;
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