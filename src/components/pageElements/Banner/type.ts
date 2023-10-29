import { Meta, StoryObj } from '@storybook/react'

export interface BackgroundProperties {
    backgroundAttachment?: string
    backgroundBlendMode?: string
    backgroundImage?: string
    backgroundOrigin?: string
    backgroundPositionX?: string
    backgroundPositionY?: string
    backgroundRepeat?: string
    backgroundSize?: string
}

export default interface BannerProps {
    title?: string
    subtitle?: string
    text?: string
    backgroundProperties?: BackgroundProperties
}

export type BannerMeta = Meta<BannerProps>
export type BannerStory = StoryObj<BannerProps>
