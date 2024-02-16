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

export const DescriptionComp = z.object({
  __typename: z.literal("ComponentCustomDescription"),
  short: z.string().nullable(),
  full: z.any(),
})
export type DescriptionComp = z.infer<typeof DescriptionComp>;


//.........................MAIN PAGE.........................//
export const MainPage = z.object({
    name: z.string(),
    title: z.string(),
    subTitle: z.string().nullable(),
});
export type MainPage = z.infer<typeof MainPage>;

//.........................ABOUT PAGE.........................//
export const AboutPage = z.object({
  content: DynamicZoneT.array()
});
export type AboutPage = z.infer<typeof AboutPage>;

//.........................PAGE DESCRIPTION.........................//
export const PageDescriptions = z.object({
  library: DescriptionComp.nullable(),
  events: DescriptionComp.nullable(),
  news: DescriptionComp.nullable(),
  methodological: DescriptionComp.nullable(),
  projects: DescriptionComp.nullable(),
});
export type PageDescriptions = z.infer<typeof PageDescriptions>;


//.........................CONTACTS.........................//
export const Contacts = z.object({
  tel: z.string().nullable(),
  email: z.string().nullable(),
});
export type Contacts = z.infer<typeof Contacts>;

//.........................Sections.........................//
export const Section = z.object({
  id: z.string(),
  attributes: z.object({
    slug: z.string(),
    title: z.string(),
    image: Image,
    description: z.string().nullable(),
    text: z.any()
  }),
});
export type Section = z.infer<typeof Section>;

export const Sections = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: Section.array(),
});
export type Sections = z.infer<typeof Sections>;

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
    section: z.object({
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
      section: z.object({
        data: z.object({
          attributes: z.object({
            slug: z.string(),
            title: z.string()
          })
        }).nullable()
      }),
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
    section: z.object({
      data: z.object({
        attributes: z.object({
          slug: z.string(),
          title: z.string()
        })
      }).nullable()
    }),
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
      section: z.object({
        data: z.object({
          attributes: z.object({
            slug: z.string(),
            title: z.string()
          })
        }).nullable()
      }),
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

//.........................PROJECTS.........................//
export const ProjectSingle = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    description: z.string(),
    image: Image,
    additionalImages: ImagesArray,
    text: z.any(),
    content: DynamicZoneT.array()
  }),
});
export type ProjectSingle = z.infer<typeof ProjectSingle>;

export const Projects = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    }),
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      title: z.string(),
      description: z.string().nullable(),
      image: Image,
    })
  }).array(),
});
export type Projects = z.infer<typeof Projects>;

export const SearchAll = z.object({
  events: z.object({
    data: z.object({
      id: z.string(),
      attributes: z.object({
        title: z.string(),
        description: z.string(),
        image: Image,
        date: z.object({
          day: z.number(),
          month: z.number(),
          year: z.number()
        }),
        category: z.object({
          data: z.object({
            attributes: z.object({
              slug: z.string(),
              title: z.string()
            })
          }).nullable()
        }),
      })
    }).array()
  }),
  methodResources: z.object({
    data: z.object({
      id: z.string(),
      attributes: z.object({
        title: z.string(),
        description: z.string().nullable(),
        image: Image,
        section: z.object({
          data: z.object({
            attributes: z.object({
              slug: z.string(),
              title: z.string()
            })
          }).nullable()
        }),
      })
    }).array()
  }),
  books: z.object({
    data: z.object({
      id: z.string(),
      attributes: z.object({
        title: z.string(),
        image: Image,
        section: z.object({
          data: z.object({
            attributes: z.object({
              slug: z.string(),
              title: z.string()
            })
          }).nullable()
        }),
      })
    }).array()
  }),
  projects: z.object({
    data: z.object({
      id: z.string(),
      attributes: z.object({
        title: z.string(),
        description: z.string().nullable(),
        image: Image,
      })
    }).array()
  }),
  news: z.object({
    data: z.object({
      id: z.string(),
      attributes: z.object({
        title: z.string(),
        image: Image,
        date: z.string(),
      })
    }).array()
  }),
});
export type SearchAll = z.infer<typeof SearchAll>;

export const SubscribedDescription = z.object({
  subscribed: z.any(),
  not_subscribed: z.any(),
})
export type SubscribedDescription = z.infer<typeof SubscribedDescription> 

export const SuggestDescription = z.object({
  description_long: z.any(),
  description_short: z.string().nullable(),
  suggestExist: z.any(),
})
export type SuggestDescription = z.infer<typeof SuggestDescription>

export const FeedbackDescription = z.object({
  description_long: z.any(),
  description_short: z.string().nullable(),
  feedbackExist: z.any(),
})
export type FeedbackDescription = z.infer<typeof FeedbackDescription> 

export const User = z.object({
  id: z.string().or(z.number()),
  username: z.string(),
  email: z.string(),
  confirmed: z.boolean(),
  blocked: z.boolean(),
  subscribed: z.string(),
  suggest: z.object({
    data: z.object({
      id: z.number(),
      attributes: z.object({
        publishedAt: z.string().nullable()
      })
    }).nullable()
  }),
  feedback: z.object({
    data: z.object({
      id: z.number(),
      attributes: z.object({
        publishedAt: z.string().nullable()
      })
    }).nullable()
  })
})
export type User = z.infer<typeof User>


export const Policy = z.object({
  file: z.object({
    data: z.object({
      attributes: z.object({
        url: z.string()
      })
    }).nullable()
  }),
})
export type Policy = z.infer<typeof Policy> 