import { Meta, StoryObj } from '@storybook/react'

export default interface PaginationElementProps {
    children: React.ReactNode
    pageValue: number
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
    isActive?: boolean
}

export type PaginationElementMeta = Meta<PaginationElementProps>
export type PaginationElementStory = StoryObj<PaginationElementProps>
