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

//.........................COMPONENTS.........................//
export const RichTextComp = z.object({
  __typename: z.literal("ComponentCustomRichText"),
  title: z.string().nullable(),
  text: z.any(),
})
export type RichTextComp = z.infer<typeof RichTextComp>;

export const SliderComp = z.object({
  __typename: z.literal("ComponentCustomSlider"),
  title: z.string().nullable(),
  images: ImagesArray,
})
export type SliderComp = z.infer<typeof SliderComp>;

export const VideoEmbedComp = z.object({
  __typename: z.literal("ComponentCustomVideoEmbed"),
  title: z.string().nullable(),
  embed: z.string(),
})
export type VideoEmbedComp = z.infer<typeof VideoEmbedComp>;

export const VideoComp = z.object({
  __typename: z.literal("ComponentCustomVideo"),
  title: z.string().nullable(),
  video: Image,
})
export type VideoComp = z.infer<typeof VideoComp>;

export const FileListItem = z.object({
  name: z.string(),
  file: z.object({
    data: z.object({
      attributes: z.object({
        url: z.string()
      })
    })
  }),
})
export type FileListItem = z.infer<typeof FileListItem>;

export const FileListComp = z.object({
  __typename: z.literal("ComponentCustomFilesList"),
  title: z.string().nullable(),
  list: FileListItem.array()
})
export type FileListComp = z.infer<typeof FileListComp>;

export const DynamicZoneT = z.union([RichTextComp, SliderComp, VideoEmbedComp, VideoComp, FileListComp])
export type DynamicZoneT = z.infer<typeof DynamicZoneT>;

//.........................MAIN PAGE.........................//
export const MainPage = z.object({
    name: z.string(),
    title: z.string(),
    subTitle: z.string().nullable(),
});
export type MainPage = z.infer<typeof MainPage>;

//.........................PAGE DESCRIPTION.........................//
export const PageDescriptions = z.object({
  library: z.any(),
  events: z.any(),
  news: z.any(),
  methodological: z.any(),
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
    date: z.object({
      day: z.number(),
      month: z.number(),
      year: z.number()
    }),
    description: z.string(),
    image: Image,
    additionalImages: ImagesArray,
    category: z.object({
      data: EventsCategory.nullable()
    }),
    text: z.any(),
    content: DynamicZoneT.array()
  }),
});
export type Event = z.infer<typeof Event>;

export const Events = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      title: z.string(),
      date: z.object({
        day: z.number(),
        month: z.number(),
        year: z.number()
      }),
      description: z.string(),
      image: Image,
      category: z.object({
        data: EventsCategory.nullable()
      }),
    })
  }).array(),
});
export type Events = z.infer<typeof Events>;

//.........................BOOKS.........................//
export const Book = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    category: z.object({
      data: z.object({
        attributes: z.object({
          slug: z.string(),
          title: z.string()
        })
      }).nullable()
    }),
    image: Image,
    text: z.any().nullable(),
    file: Image,
    content: DynamicZoneT.array()
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

//.........................METHODOLOGICAL.........................//
export const Methodological = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    image: Image,
    description: z.string().nullable(),
    additionalImages: ImagesArray,
    files: FileListComp.nullable(),
    content: DynamicZoneT.array()
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

//.........................NEWS.........................//
export const NewsSingle = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    image: Image,
    date: z.string(),
    text: z.any(),
    content: DynamicZoneT.array()
  }),
});
export type NewsSingle = z.infer<typeof NewsSingle>;

export const News = z.object({
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
      date: z.string(),
    }),
  }).array(),
});
export type News = z.infer<typeof News>;