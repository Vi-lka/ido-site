import { MainPage } from "../types/entity-types";

export const getMainPage = async (): Promise<MainPage> => {
    const headers = { "Content-Type": "application/json" };
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