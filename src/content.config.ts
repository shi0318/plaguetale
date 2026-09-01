// Content collection — drop a .md file in src/content/guides/ to add a page.
// Frontmatter turns the sourcing system into fill-in-the-blanks: status + source keys + checked date.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { toDateString } from './utils/dates';

// Must match ConfidenceStatus in src/data/confidence.ts
const confidenceStatus = z.enum(['official', 'steam-feature', 'community', 'trailer', 'prequel', 'unconfirmed']);

// Must match SourceKey in src/data/sources.ts
const sourceKey = z.enum(['steam', 'focus', 'steamMedia', 'steamNews', 'steamCommunity', 'steamAchievements', 'ign']);

// YAML bare dates become Date objects; always normalize to YYYY-MM-DD strings.
const dateString = z.preprocess(
  (value) => toDateString(value as string | Date | null | undefined),
  z.string().min(1),
);

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    heading: z.string().optional(),
    description: z.string().min(50).max(170),
    category: z.enum(['guide', 'characters', 'collectibles', 'skills', 'walkthrough', 'romance', 'news']),
    // Primary keyword for internal annotation: one page owns one keyword, prevents cannibalization.
    // Not rendered on page or used as meta keywords tag (Google ignores that).
    // Optional for now: existing 39 pages not yet fully annotated, new pages should fill it.
    keyword: z.string().optional(),
    status: confidenceStatus,
    // References into the central SOURCES registry; rendered as the "Sources" table.
    sourceKeys: z.array(sourceKey).default([]),
    preRelease: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
    cover: z.string().min(1),
    updatedAt: dateString,
  }),
});

export const collections = { guides };
