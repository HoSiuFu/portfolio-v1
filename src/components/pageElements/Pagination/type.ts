import { Meta, StoryObj } from '@storybook/react'

export default interface PaginationProps {
    totalCount: number
    neighboursCount: number
    currentPage: number
    pageSize: number
    onPageChange: (newPage: number) => void
}

export type PaginationMeta = Meta<PaginationProps>
export type PaginationStory = StoryObj<PaginationProps>
