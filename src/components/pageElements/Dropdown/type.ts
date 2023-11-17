import { Meta, StoryObj } from '@storybook/react'

export type Option = {
    label: string
    value: string
}

export default interface DropdownProps {
    placeholder: string
    options: Array<Option>
    onSelect: (value: Option['value']) => void
    defaultValue?: Option
    fullWidth?: boolean
}

export type DropdownMeta = Meta<DropdownProps>
export type DropdownStory = StoryObj<DropdownProps>
