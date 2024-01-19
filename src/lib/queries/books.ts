import { notFound } from "next/navigation";
import { Book, Books, BooksCategories } from "../types/entity-types";

export const getBookByID = async ({
  id,
}: {
  id: string,
}): Promise<Book> => {
  const headers = { "Content-Type": "application/json" };
  const query = /* GraphGL */ `
    query BookByID {
      book(id: "${id}") {
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
  category = ""
}: {
  page: number;
  per: number;
  sort?: string;
  search?: string;
  category?: string;
}): Promise<Books> => {
  const headers = { "Content-Type": "application/json" };
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
            category: {
              slug: {
                containsi: "${category}"
              }
            }
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

export const getBooksCategories = async ({
  search = "",
}: {
  search?: string;
}): Promise<BooksCategories> => {
  const headers = { "Content-Type": "application/json" };
  const query = /* GraphGL */ `
    query BooksCategories {
      booksCategories(
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
    throw new Error("Failed to fetch data 'Books Categories'");
  }

  const json = (await res.json()) as { data: { booksCategories: BooksCategories }; };

  if (
    json.data.booksCategories.meta.pagination.total === 0 ||
    json.data.booksCategories.data.length === 0
  ) {
    notFound();
  }
  
  const booksCategories = BooksCategories.parse(json.data.booksCategories);
  
  return booksCategories;
};