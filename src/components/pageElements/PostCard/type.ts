import { Meta, StoryObj } from '@storybook/react'
import { StaticImageData } from 'next/image'

export type GridColumnProps = {
    start: number
    end: number
}

export default interface PostCardProps {
    cover?: string | StaticImageData
    title: string
    description?: string
    postUrl: string
    gridColumnDesktop: GridColumnProps
    gridColumnTablet: GridColumnProps
    gridColumnMobile: GridColumnProps
}

export type PostCardMeta = Meta<PostCardProps>
export type PostCardStory = StoryObj<PostCardProps>
