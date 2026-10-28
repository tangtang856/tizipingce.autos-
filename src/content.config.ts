import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('梯子评测网编辑团队'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.enum(['windows', 'android', 'ios', 'macos', 'general']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    difficulty: z.string().default('新手入门'),
    readingTime: z.string().default('5分钟'),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    relatedTerms: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, guides, glossary };
