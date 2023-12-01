import { Meta, StoryObj } from '@storybook/react'

export interface AccordionItemContextTypes {
    id: string
    active: boolean
    hash: string
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

export default interface AccordionItemProps {
    id: string
    children: React.ReactNode
}

export type AccordionItemMeta = Meta<AccordionItemProps>
export type AccordionItemStory = StoryObj<AccordionItemProps>
