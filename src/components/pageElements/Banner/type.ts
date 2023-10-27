import { Meta, StoryObj } from '@storybook/react'

export default interface BannerProps {
    title?: string
    subtitle?: string
    text?: string
    backgroundImage?: string
}

export type BannerMeta = Meta<BannerProps>
export type BannerStory = StoryObj<BannerProps>
