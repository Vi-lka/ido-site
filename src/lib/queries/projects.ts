import { notFound } from "next/navigation";
import { ProjectSingle, Projects } from "../types/entity-types";

export const getProjectByID = async ({
    id,
}: {
    id: string,
}): Promise<ProjectSingle> => {
    const headers = {
      "Content-Type": "application/json"
    };
    const query = /* GraphGL */ `
      query ProjectByID {
        project(id: "${id}") {
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
              additionalImages {
                data {
                  attributes {
                    url
                  }
                }
              }
              description
              text
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
      throw new Error(`Failed to fetch data 'Project id: ${id}'`);
    }
  
    const json = (await res.json()) as { 
      data: { 
        project: { 
          data: ProjectSingle 
        } 
      }; 
    };
  
    if (json.data.project.data == null) notFound()
    
    const project = ProjectSingle.parse(json.data.project.data);
    
    return project;
};
  
export const getProjects = async ({
    page,
    per,
    sort = "order:asc",
    search = "",
}: {
    page: number;
    per: number;
    sort?: string;
    search?: string;
}): Promise<Projects> => {
    const headers = {
      "Content-Type": "application/json"
    };
    const query = /* GraphGL */ `
      query Projects {
        projects(
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
              description
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
      throw new Error("Failed to fetch data 'Projects'");
    }
  
    const json = (await res.json()) as { data: { projects: Projects }; };
  
    // await new Promise((resolve) => setTimeout(resolve, 2000))
  
    if (
      json.data.projects.meta.pagination.total === 0 ||
      json.data.projects.data.length === 0
    ) {
      notFound();
    }
  
    const projects = Projects.parse(json.data.projects);
  
    return projects;
  };