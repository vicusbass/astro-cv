import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z.array(z.string()).optional()
});

const jobSchema = z.object({
  title: z.string(),
  company: z.string(),
  companyUrl: z.string().optional(),
  description: z.string().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
});


export type BlogSchema = z.infer<typeof blogSchema>;
export type JobSchema = z.infer<typeof jobSchema>;

const blogCollection = defineCollection({ 
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: blogSchema });
const jobCollection = defineCollection({ 
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/job" }),
    schema: jobSchema });

export const collections = {
  blog: blogCollection,
  job: jobCollection
};
