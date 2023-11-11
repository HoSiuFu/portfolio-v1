import { Meta, StoryObj } from '@storybook/react'

export default interface SearchBarProps {
    tags?: Array<string>
    onClose: (e?: React.MouseEvent<HTMLElement>) => void
}

export type SearchBarMeta = Meta<SearchBarProps>
export type SearchBarStory = StoryObj<SearchBarProps>
