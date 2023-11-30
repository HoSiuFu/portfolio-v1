import { Meta, StoryObj } from '@storybook/react'

export default interface AccordionContentProps {
    id: string
    children: React.ReactNode
}

export type AccordionContentMeta = Meta<AccordionContentProps>
export type AccordionContentStory = StoryObj<AccordionContentProps>
