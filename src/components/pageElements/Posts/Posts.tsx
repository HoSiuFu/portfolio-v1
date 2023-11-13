'use client'

import { PostCard } from '@/components/pageElements'
import { returnStartandEndPosition } from '@/helpers/postCardPlacement.helper'
import React, { useEffect, useState } from 'react'
import { OutstaticSchema } from './type'

const Posts = (props: { posts: Array<OutstaticSchema> }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient)
        return (
            <>
                {props.posts.map((work, index) => (
                    <PostCard
                        title={work.title}
                        postUrl={work.slug}
                        cover={work.coverImage}
                        description={work.description}
                        key={work.slug}
                        gridColumnDesktop={returnStartandEndPosition(
                            index,
                            'desktop'
                        )}
                        gridColumnTablet={returnStartandEndPosition(
                            index,
                            'tablet',
                            window.innerWidth
                        )}
                        gridColumnMobile={returnStartandEndPosition(
                            index,
                            'mobile'
                        )}
                    />
                ))}
            </>
        )
}

export default Posts
