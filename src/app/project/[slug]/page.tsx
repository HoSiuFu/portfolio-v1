import { getProjectBySlug } from '@/app/api/outstatic'
import { TagIcon } from '@/components/icons'
import { Banner, IframeContainer } from '@/components/pageElements'
import { turnStringToJSONObject } from '@/helpers/string.helper'
import { getDocumentSlugs } from 'outstatic/server'
import React from 'react'
import Markdown from 'react-markdown'

interface Params {
    params: {
        slug: string
    }
}

export const generateStaticParams = async () => {
    const posts = getDocumentSlugs('projects')
    return posts.map((slug) => ({ slug }))
}

const Project = async (params: Params) => {
    const post = await getProjectBySlug(params.params.slug)

    return (
        <>
            <Banner
                title={<>{post.title}</>}
                text={<>{post.description}</>}
                backgroundProperties={{
                    backgroundImage: `url(${post.coverImage})`,
                    backgroundPositionY: '50%',
                    backgroundPositionX: '50%',
                }}
            />
            <div className='project-layout'>
                <div className='layout'>
                    <h1 className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 h1 title'>
                        {post.title}
                    </h1>
                    <Markdown
                        className={
                            'grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 markdown'
                        }
                    >
                        {post.content}
                    </Markdown>
                    {post.iframes && turnStringToJSONObject(post.iframes) && (
                        <IframeContainer
                            iframeOptions={turnStringToJSONObject(post.iframes)}
                            fullWidth
                        />
                    )}
                    {post.tags && (
                        <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 post-tags'>
                            <p className='p tags'>Post Tags:</p>
                            {post.tags.map((tag) => (
                                <div key={tag.value} className='p tag'>
                                    <TagIcon className='tag-icon' />
                                    {tag.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Project
