'use client'

import React from 'react'
import PostCardProps from './type'
import Image from 'next/image'
import { Button } from '@/components/buttons'
import DefaultPlaceholder from '@/../public/imagePlaceholder.svg'
import { UseBreakpointReturn } from '@/hooks/useBreakpoints/type'
import { ButtonSize } from '@/components/buttons/Button/type'
import useBreakpoints from '@/hooks/useBreakpoints/useBreakpoints'
import { useRouter } from 'next/navigation'

const setButtonSize = (breakpoint: UseBreakpointReturn): ButtonSize => {
    if (breakpoint === 'mobile') return 'small'
    if (breakpoint === 'tablet') return 'medium'

    return 'large'
}

const PostCard = (props: PostCardProps) => {
    const router = useRouter()

    const onClick = () => {
        router.push(props.postUrl)
    }

    return (
        <div className='post-card'>
            <Image
                className='cover'
                src={props.cover || DefaultPlaceholder}
                alt='Post Image'
            />
            <h3 className='h3 title'>{props.title}</h3>
            {props.description && (
                <p className='p description'>{props.description}</p>
            )}
            <div className='button-div'>
                <Button
                    onClick={onClick}
                    size={setButtonSize(useBreakpoints())}
                    type='secondary'
                >
                    View More
                </Button>
            </div>
        </div>
    )
}

export default PostCard
