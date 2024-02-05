import { notFound } from "next/navigation";
import { NewsSingle, News } from "../types/entity-types";

export const getNewByID = async ({
  id,
}: {
  id: string,
}): Promise<NewsSingle> => {
  const headers = {
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query NewByID {
      new(id: "${id}") {
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
            date
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
    throw new Error(`Failed to fetch data 'News id: ${id}'`);
  }

  const json = (await res.json()) as { 
    data: { 
      new: { 
        data: NewsSingle 
      } 
    }; 
  };

  if (json.data.new.data == null) notFound()
  
  const news = NewsSingle.parse(json.data.new.data);
  
  return news;
};

export const getNews = async ({
  page,
  per,
  sort = "order:asc",
  search = "",
}: {
  page: number;
  per: number;
  sort?: string;
  search?: string;
}): Promise<News> => {
  const headers = {
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query News {
      news(
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
            date
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
    throw new Error("Failed to fetch data 'News'");
  }

  const json = (await res.json()) as { data: { news: News }; };

  // await new Promise((resolve) => setTimeout(resolve, 2000))

  if (
    json.data.news.meta.pagination.total === 0 ||
    json.data.news.data.length === 0
  ) {
    notFound();
  }

  const news = News.parse(json.data.news);

  return news;
};