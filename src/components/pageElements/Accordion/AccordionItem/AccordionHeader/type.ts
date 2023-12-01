import { Meta, StoryObj } from '@storybook/react'

export default interface AccordionHeaderProps {
    title: string
    subtitle?: string
}

export type AccordionHeaderMeta = Meta<AccordionHeaderProps>
export type AccordionHeaderStory = StoryObj<AccordionHeaderProps>
