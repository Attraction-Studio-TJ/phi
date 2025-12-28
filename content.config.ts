import { defineCollection, defineContentConfig } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection(
      asSitemapCollection({
        source: 'blog/**/*.{md,yml}',
        type: 'page',
        schema: z.object({
          title: z.string(),
          date: z.date(),
          description: z.string(),
          tags: z.array(z.string()).optional(),
          author: z.string(),
          author_avatar: z.string(),
          author_description: z.string(),
          thumbnail: z.string(),
        }),
      })
    ),
  },
})
