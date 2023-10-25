import { StoryObj, Meta } from '@storybook/react'

export default interface IconButtonProps {
    children: React.ReactNode
    href?: string
    target?: React.HTMLAttributeAnchorTarget
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void
}

export type IconButtonMeta = Meta<IconButtonProps>
export type IconButtonStory = StoryObj<IconButtonProps>
