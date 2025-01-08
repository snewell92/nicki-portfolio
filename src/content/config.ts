import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const showcase = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/showcase" }),
  schema: ({ image }) =>
    z.object({
      href: image(),
      order: z.number(),
      title: z.string(),
      story: z.string().optional(),
      width: z.number(),
      height: z.number(),
      rowspan: z.number(),
      colspan: z.number(),
    }),
});

export const collections = { showcase };
