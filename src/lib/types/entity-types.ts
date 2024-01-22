import { z } from "zod";

//.........................IMAGES.........................//
export const Image = z.object({
    data: z
      .object({
        attributes: z.object({
          url: z.string(),
          alternativeText: z.string().optional().nullable(),
        }),
      })
      .nullable()
      .optional(),
});
export type Image = z.infer<typeof Image>;

export const ImagesArray = z.object({
  data: z
    .object({
      attributes: z.object({
        url: z.string(),
        alternativeText: z.string().optional().nullable(),
      }),
    })
    .array(),
});
export type ImagesArray = z.infer<typeof ImagesArray>;

//.........................MAIN PAGE.........................//
export const MainPage = z.object({
    name: z.string(),
    title: z.string(),
    subTitle: z.string().nullable(),
});
export type MainPage = z.infer<typeof MainPage>;

//.........................PAGE DESCRIPTION.........................//
export const PageDescriptions = z.object({
  library: z.any()
});
export type PageDescriptions = z.infer<typeof PageDescriptions>;


//.........................CONTACTS.........................//
export const Contacts = z.object({
  tel: z.string().nullable(),
  email: z.string().nullable(),
});
export type Contacts = z.infer<typeof Contacts>;

//.........................BOOKS CATEGORIES.........................//
export const BooksCategory = z.object({
  id: z.string(),
  attributes: z.object({
    slug: z.string(),
    title: z.string(),
    image: Image,
    description: z.string().nullable(),
  }),
});
export type BooksCategory = z.infer<typeof BooksCategory>;

export const BooksCategories = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: BooksCategory.array(),
});
export type BooksCategories = z.infer<typeof BooksCategories>;

//.........................EVENTS CATEGORIES.........................//
export const EventsCategory = z.object({
  id: z.string(),
  attributes: z.object({
    slug: z.string(),
    title: z.string(),
    image: Image,
    description: z.string().nullable(),
  }),
});
export type EventsCategory = z.infer<typeof EventsCategory>;

export const EventsCategories = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: EventsCategory.array(),
});
export type EventsCategories = z.infer<typeof EventsCategories>;

//.........................EVENTS.........................//
export const Event = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    image: Image,
    additionalImages: ImagesArray.optional(),
    category: z.object({
      data: EventsCategory.nullable()
    }).optional(),
    text: z.any(),
  }),
});
export type Event = z.infer<typeof Event>;

export const Events = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: Event.array(),
});
export type Events = z.infer<typeof Events>;

//.........................BOOKS.........................//
export const Book = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    image: Image,
    text: z.any().nullable(),
    file: Image,
  }),
});
export type Book = z.infer<typeof Book>;

export const Books = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      title: z.string(),
      image: Image,
    }),
  }).array(),
});
export type Books = z.infer<typeof Books>;

//.........................BOOKS.........................//
export const Methodological = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    image: Image,
    description: z.string().nullable(),
  }),
});
export type Methodological = z.infer<typeof Methodological>;

export const Methodologicals = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      title: z.string(),
      image: Image,
      description: z.string().nullable(),
    }),
  }).array(),
});
export type Methodologicals = z.infer<typeof Methodologicals>;