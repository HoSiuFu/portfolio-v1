import { OutstaticSchema } from '@/components/pageElements/Posts/type'
import { TagObject } from '@/components/pageElements/Search/type'
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

export const getAllProjects = async () => {
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
