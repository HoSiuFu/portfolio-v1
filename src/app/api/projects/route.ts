import { OutstaticSchema } from '@/components/pageElements/Posts/type'
import { isArrayOfStrings } from '@/helpers/array.helper'
import { NextRequest } from 'next/server'
// import { load } from 'outstatic/server'
import { removeStopwords } from 'stopword'

const checkTags = (obj: OutstaticSchema, tags: Array<string>) => {
    if (obj.tags && tags.length !== 0)
        return obj.tags.some((tag) => tags.includes(tag.value))

    return true
}

const checkSearchTerms = (
    obj: OutstaticSchema,
    searchTerms: Array<string> | undefined
) => {
    if (searchTerms && searchTerms.length !== 0) {
        const checkTitle = searchTerms.some((term) =>
            obj.title.toLowerCase().includes(term)
        )
        const checkDescription = searchTerms.some((term) => {
            if (obj.description)
                return obj.description
                    .toLowerCase()
                    .includes(term.toLowerCase())

            return false
        })

        return checkTitle || checkDescription
    }

    return true
}

export const GET = async (request: NextRequest) => {
    const { searchParams } = request.nextUrl
    const searchString = searchParams.get('searchString')
    const tags = searchParams.getAll('tags[]')
    const posts = searchParams.get('projects')

    if (
        posts &&
        (!searchString || (searchString && typeof searchString === 'string')) &&
        (!tags || (tags && isArrayOfStrings(tags)))
    ) {
        let searchTerms = searchString?.replaceAll(/[., ]+/g, ',').split(',')

        if (searchTerms) {
            searchTerms = removeStopwords(searchTerms)
            searchTerms = searchTerms.filter((string) => string.length > 3)
        }

        try {
            const arrayPosts = JSON.parse(posts)

            return new Response(
                JSON.stringify(
                    arrayPosts.filter(
                        (post: OutstaticSchema) =>
                            checkTags(post, tags) &&
                            checkSearchTerms(post, searchTerms)
                    )
                ),
                { status: 200 }
            )
        } catch (error) {
            return new Response('Something went wrong.', {
                status: 500,
            })
        }

        // const db = await load().catch((error) => {
        //     console.log(error)
        // })

        // const posts = await db
        //     ?.find(
        //         {
        //             collection: 'projects',
        //             $where: (obj) => {
        //                 return (
        //                     checkTags(obj, tags) &&
        //                     checkSearchTerms(obj, searchTerms)
        //                 )
        //             },
        //         },
        //         ['coverImage', 'title', 'description', 'slug']
        //     )
        //     .sort({
        //         publishedAt: -1,
        //     })
        //     .toArray()

        // return new Response(JSON.stringify(posts), { status: 200 })
    } else {
        return new Response('Something is missing or types are mismatching.', {
            status: 401,
        })
    }
}
