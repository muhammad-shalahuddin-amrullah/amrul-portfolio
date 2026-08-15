import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const databaseCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/database" }),
  schema: z.object({
    items: z.array(z.any()) // Mengizinkan list/array di dalam file MD
  }),
});

export const collections = {
  'database': databaseCollection,
};