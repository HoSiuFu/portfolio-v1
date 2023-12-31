import { Meta, StoryObj } from '@storybook/react'
import { GridColumnProps } from '../../PostCard/type'

export default interface SearchBarProps {
    onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void
    onClearValue: () => void
    id: string
    gridColumnDesktop: GridColumnProps
    gridColumnTablet: GridColumnProps
    gridColumnMobile: GridColumnProps
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void
    fullWidth?: boolean
}

export type SearchBarMeta = Meta<SearchBarProps>
export type SearchBarStory = StoryObj<SearchBarProps>
