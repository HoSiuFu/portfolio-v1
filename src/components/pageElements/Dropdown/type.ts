import { Meta, StoryObj } from '@storybook/react'

export interface Option {
    label: string
    value: string
}

export default interface DropdownProps {
    placeholder: string
    options: Array<Option>
    defaultValue?: string
    fullWidth?: boolean
}

export type DropdownMeta = Meta<DropdownProps>
export type DropdownStory = StoryObj<DropdownProps>
