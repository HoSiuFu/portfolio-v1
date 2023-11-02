import { load } from 'outstatic/server'

export const getLatestProjects = async () => {
    'use server'

    const db = await load().catch((error) => {
        console.log(error)
    })
    const posts = await db
        ?.find(
            {
                collection: 'projects',
            },
            ['coverImage', 'title', 'description', 'slug']
        )
        .sort({
            publishedAt: -1,
        })
        .limit(4)
        .toArray()

    return posts || []
}
