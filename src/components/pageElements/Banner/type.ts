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
    title?: React.ReactNode
    subtitle?: React.ReactNode
    text?: React.ReactNode
    backgroundProperties?: BackgroundProperties
}

export type BannerMeta = Meta<BannerProps>
export type BannerStory = StoryObj<BannerProps>
