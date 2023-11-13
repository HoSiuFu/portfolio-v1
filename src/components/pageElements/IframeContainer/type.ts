import { Meta, StoryObj } from '@storybook/react'

export default interface IframeContainerProps {
    src: string
    title: string
    fullWidth?: boolean
}

export type IframeContainerMeta = Meta<IframeContainerProps>
export type IframeContainerStory = StoryObj<IframeContainerProps>
