import { Meta, StoryObj } from '@storybook/react'

export interface AccordionContextTypes {
    expanded: string
    setExpanded: React.Dispatch<React.SetStateAction<string>> | null
}

export default interface AccordionProps {
    children: NonNullable<React.ReactNode>
    id?: string
    defaultOpened?: string
}

export type AccordionMeta = Meta<AccordionProps>
export type AccordionStory = StoryObj<AccordionProps>
