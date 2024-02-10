import { notFound } from "next/navigation";
import type { Section} from "../types/entity-types";
import { AboutPage, Contacts, MainPage, PageDescriptions, SearchAll, Sections } from "../types/entity-types";

export const getMainPage = async (): Promise<MainPage> => {
  const headers = {
    "Content-Type": "application/json"
  };

  const query = /* GraphGL */ `
    query MainPage {
      mainPage {
        data {
          attributes {
            name
            title
            subTitle
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
    throw new Error("Failed to fetch data 'Main Page Info'");
  }
  
  const json = (await res.json()) as {
    data: {
      mainPage: {
        data: {
          attributes: MainPage
        };
      };
    };
  };
  
  const data = MainPage.parse(json.data.mainPage.data.attributes);
  
  return data;
};

export const getPageDescriptions = async (): Promise<PageDescriptions> => {
  const headers = {
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query PageDescription {
      pageDescription {
        data {
          attributes {
            library {
              __typename
              short
              full
            }
            events {
              __typename
              short
              full
            }
            news {
              __typename
              short
              full
            }
            methodological {
              __typename
              short
              full
            }
            projects {
              __typename
              short
              full
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
    throw new Error("Failed to fetch data 'Page Descriptions'");
  }
  
  const json = (await res.json()) as {
    data: {
      pageDescription: {
        data: {
          attributes: PageDescriptions
        };
      };
    };
  };
  
  const data = PageDescriptions.parse(json.data.pageDescription.data.attributes);
  
  return data;
};

export const getAboutPage = async (): Promise<AboutPage> => {
  const headers = {
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query AboutPage {
      about {
        data {
          attributes {
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
    throw new Error("Failed to fetch data 'About Page Info'");
  }
  
  const json = (await res.json()) as {
    data: {
      about: {
        data: {
          attributes: AboutPage
        };
      };
    };
  };
  
  const data = AboutPage.parse(json.data.about.data.attributes);
  
  return data;
};

export const getContacts = async (): Promise<Contacts> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query Contacts {
      contact {
        data {
          attributes {
            tel
            email
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
    throw new Error("Failed to fetch data 'Contacts'");
  }

  const json = (await res.json()) as {
    data: {
      contact: {
        data: {
          attributes: Contacts
        };
      };
    };
  };

  const data = Contacts.parse(json.data.contact.data.attributes);

  return data;
};

export const getSections = async ({
  page,
  per,
  sort = "order:asc",
  search = "",
  type,
}: {
  page: number;
  per: number;
  sort?: string;
  search?: string;
  type?: "books" | "methodological"
}): Promise<Sections> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query Sections {
      sections(
        sort: "${sort}", 
        pagination: {
          page: ${page},
          pageSize: ${per}
        },
        filters: {
          title: {
            containsi: "${search}"
          },
          ${type === "books"
            ? `
              books: {
                title: {
                  containsi: ""
                },
              }
            `
            : type === "methodological"
              ? `
                method_resources: {
                  title: {
                    containsi: ""
                  },
                }
              `
              : ""
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
            slug
            title
            description
            text
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
    throw new Error("Failed to fetch data 'Sections'");
  }

  const json = (await res.json()) as { data: { sections: Sections }; };

  if (
    json.data.sections.meta.pagination.total === 0 ||
    json.data.sections.data.length === 0
  ) {
    notFound();
  }
  
  const sections = Sections.parse(json.data.sections);
  
  return sections;
};

export const getSectionBySlug = async (slug: string): Promise<Section> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query SectionBySlug {
      sections(filters: {
        slug: {eq: "${slug}"}
      }) {
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
            text
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
    throw new Error("Failed to fetch data 'Section By Slug'");
  }

  const json = (await res.json()) as { data: { sections: Sections }; };

  if (
    json.data.sections.meta.pagination.total === 0 ||
    json.data.sections.data.length === 0
  ) {
    notFound();
  }
  
  const sections = Sections.parse(json.data.sections);
  
  return sections.data[0];
};

export const getSearchAll = async (search = ""): Promise<SearchAll> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query SearchAll {
      events(filters: {
        or: [
          {title: { containsi: "${search}" }},
          {description: { containsi: "${search}" }},
          {text: { containsi: "${search}" }},
          {category: {
            title: { containsi: "${search}" }
          }},
          {category: {
            description: { containsi: "${search}" }
          }}
        ]
      }) {
        data {
          id
          attributes {
            title
            description
            date {
              day month year
            }
            image {
              data {
                attributes {
                  url
                }
              }
            }
            category {
              data {
                attributes {
                  slug
                  title
                }
              }
            }
          }
        }
      }

      methodResources(filters: {
        or: [
          {title: { containsi: "${search}" }},
          {description: { containsi: "${search}" }},
          {files: {
            title: { containsi: "${search}" }
          }},
          {files: {
            list: {
              name: { containsi: "${search}" }
            }
          }},
          {section: {
            description: { containsi: "${search}" }
          }},
          {section: {
            text: { containsi: "${search}" }
          }}
        ]
      }) {
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
          }
        }
      }

      books(filters: {
        or: [
          {title: { containsi: "${search}" }},
          {text: { containsi: "${search}" }},
          {section: {
            title: { containsi: "${search}" }
          }},
          {section: {
            description: { containsi: "${search}" }
          }},
          {section: {
            text: { containsi: "${search}" }
          }}
        ]
      }) {
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

      projects(filters: {
        or: [
          {title: { containsi: "${search}" }},
          {description: { containsi: "${search}" }},
          {text: { containsi: "${search}" }},
        ]
      }) {
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

      news(filters: {
        or: [
          {title: { containsi: "${search}" }},
          {text: { containsi: "${search}" }},
        ]
      }) {
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
    cache: 'no-store',
    // next: {
      // tags: ["strapi"],
      // // Next.js issue: if fetch in the component, not on the page, the cache is always MISS with tags, but with Time-based Revalidation both works correctly
      // revalidate: 60,
    // },
  });

  if (!res.ok) {
    // Log the error to an error reporting service
    const err = await res.text();
    console.log(err);
    // Throw an error
    throw new Error("Failed to fetch data 'Search All'");
  }

  const json = (await res.json()) as { data: SearchAll };

  const data = SearchAll.parse(json.data);

  return data;
};

export const getLastContent = async (time: string): Promise<SearchAll> => {
  const headers = { 
    "Content-Type": "application/json"
  };
  const query = /* GraphGL */ `
    query SearchAll {
      events(filters: {
        createdAt: {
          gt: "${time}"
        }
      }) {
        data {
          id
          attributes {
            title
            description
            date {
              day month year
            }
            image {
              data {
                attributes {
                  url
                }
              }
            }
            category {
              data {
                attributes {
                  slug
                  title
                }
              }
            }
          }
        }
      }

      methodResources(filters: {
        createdAt: {
          gt: "${time}"
        }
      }) {
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
          }
        }
      }

      books(filters: {
        createdAt: {
          gt: "${time}"
        }
      }) {
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

      projects(filters: {
        createdAt: {
          gt: "${time}"
        }
      }) {
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

      news(filters: {
        createdAt: {
          gt: "${time}"
        }
      }) {
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
    cache: 'no-store',
  });

  if (!res.ok) {
    // Log the error to an error reporting service
    const err = await res.text();
    console.log(err);
    // Throw an error
    throw new Error("Failed to fetch data 'Last Content'");
  }

  const json = (await res.json()) as { data: SearchAll };

  const data = SearchAll.parse(json.data);

  return data;
};