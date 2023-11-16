import { Meta, StoryObj } from '@storybook/react'

export type IframeOptionsProps = {
    src: string
    title: string
}

interface ArrayIframeOptions extends Array<IframeOptionsProps> {
    0: IframeOptionsProps
}

export default interface IframeContainerProps {
    iframeOptions: ArrayIframeOptions
    fullWidth?: boolean
}

export type IframeContainerMeta = Meta<IframeContainerProps>
export type IframeContainerStory = StoryObj<IframeContainerProps>
