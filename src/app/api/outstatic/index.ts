import { OutstaticSchema } from '@/components/pageElements/Posts/type'
import { TagObject } from '@/components/pageElements/Search/type'
import { notFound } from 'next/navigation'
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
                status: 'published',
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

export const getAllProjects = async () => {
    'use server'

    const db = await load().catch((error) => {
        console.log(error)
    })

    const posts = await db
        ?.find(
            {
                collection: 'projects',
                status: 'published',
            },
            ['coverImage', 'title', 'description', 'slug']
        )
        .sort({
            publishedAt: -1,
        })
        .toArray()

    return posts || []
}

export const getAllTags = async () => {
    'use server'

    const db = await load().catch((error) => {
        console.log(error)
    })

    const ungroupedTags: Array<OutstaticSchema> | undefined = await db
        ?.find(
            {
                collection: 'projects',
                status: 'published',
            },
            ['tags']
        )
        .sort({
            publishedAt: -1,
        })
        .toArray()

    const groupedTags: Array<TagObject> = []

    ungroupedTags?.forEach((projectTags) => {
        projectTags?.tags?.forEach((tag: TagObject) => {
            if (!groupedTags.find((element) => element.value === tag.value))
                groupedTags.push(tag)
        })
    })

    return groupedTags
}

export const getProjectBySlug = async (slug: string) => {
    const db = await load().catch((error) => {
        console.log(error)
    })

    const post: OutstaticSchema | undefined = await db
        ?.find(
            {
                collection: 'projects',
                status: 'published',
                slug: slug,
            },
            [
                'coverImage',
                'title',
                'description',
                'slug',
                'content',
                'tags',
                'iframes',
                'projectUrl',
            ]
        )
        .first()

    if (!post) notFound()

    return post
}
