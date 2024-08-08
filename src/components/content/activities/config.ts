import { defineCollection, z} from "astro:content"

const activitiesCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            image: z.string(),
            title: z.string(),
        }),
});


export const collections = {
    activities: activitiesCollection,
};