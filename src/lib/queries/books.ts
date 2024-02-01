import { notFound } from "next/navigation";
import { Book, Books } from "../types/entity-types";

export const getBookByID = async ({
  id,
}: {
  id: string,
}): Promise<Book> => {
  const headers = { 
    Authorization: `bearer ${process.env.API_TOKEN}`,
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query BookByID {
      book(id: "${id}") {
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
            image {
              data {
                attributes {
                  url
                }
              }
            }
            text
            file {
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
    throw new Error(`Failed to fetch data 'Book id: ${id}'`);
  }

  const json = (await res.json()) as { 
    data: { 
      book: { 
        data: Book 
      } 
    }; 
  };

  if (json.data.book.data == null) notFound()
  
  const book = Book.parse(json.data.book.data);
  
  return book;
};

export const getBooks = async ({
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
}): Promise<Books> => {
  const headers = { 
    Authorization: `bearer ${process.env.API_TOKEN}`,
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query Books {
      books(
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
    throw new Error("Failed to fetch data 'Books'");
  }

  const json = (await res.json()) as { data: { books: Books }; };

  // await new Promise((resolve) => setTimeout(resolve, 2000))

  if (
    json.data.books.meta.pagination.total === 0 ||
    json.data.books.data.length === 0
  ) {
    notFound();
  }
  
  const books = Books.parse(json.data.books);
  
  return books;
};