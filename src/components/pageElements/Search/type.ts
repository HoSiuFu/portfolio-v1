import { Meta, StoryObj } from '@storybook/react'

export interface Tag {
    value: string
    label: string
}

export default interface SearchProps {
    onClose: (searchString: string, selectedLabels: Array<string>) => void
    allTags: Array<Tag>
}

export type SearchMeta = Meta<SearchProps>
export type SearchStory = StoryObj<SearchProps>
