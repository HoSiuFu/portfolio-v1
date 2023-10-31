import { Meta, StoryObj } from '@storybook/react'
import { StaticImageData } from 'next/image'

export default interface PostCardProps {
    cover?: string | StaticImageData
    title: string
    description?: string
    postUrl: string
}

export type PostCardMeta = Meta<PostCardProps>
export type PostCardStory = StoryObj<PostCardProps>
