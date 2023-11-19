import { Meta, StoryObj } from '@storybook/react'

export interface TagObject {
    value: string
    label: string
}

export default interface SearchProps {
    onClose: (searchString: string, selectedLabels: Array<string>) => void
    allTags: Array<TagObject>
}

export type SearchMeta = Meta<SearchProps>
export type SearchStory = StoryObj<SearchProps>
