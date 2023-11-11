import { Meta, StoryObj } from '@storybook/react'

export default interface TagProps {
    children: React.ReactNode
    onClick: (e?: React.MouseEvent<HTMLElement>) => void
    isSelected?: boolean
    disabled?: boolean
    id: string
}

export type TagMeta = Meta<TagProps>
export type TagStory = StoryObj<TagProps>
