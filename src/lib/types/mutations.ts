import { z } from "zod";

export const SuggestFormT = z.object({
    type: z.string({
      required_error: "Это поле является обязательным",
    }),
    title: z.string({
      required_error: "Это поле является обязательным",
    }).min(1, {
      message: "Длина должна составлять 1 или более символов",
    }).max(255, {
      message: "Длина должна составлять не более 255 символов"
    }),
    date: z.date().nullable().optional(),
    text: z.string({
      required_error: "Это поле является обязательным",
    }).min(1, {
      message: "Длина должна составлять 1 или более символов",
    }),
  })
  .superRefine(({ type, date }, refinementContext) => {
    if ((type === 'events' || type === 'news') && (date === undefined || date === null)) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Это поле является обязательным",
        path: ['date'],
      });
    }
});

export type SuggestFormT = z.infer<typeof SuggestFormT>;