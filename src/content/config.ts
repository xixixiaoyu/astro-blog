import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		draft: z.boolean().default(false),
	}),
})

export const collections = {
	blog,
}
