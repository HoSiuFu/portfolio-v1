import AccordionContent from '.'
import AccordionItem from '..'
import Accordion from '../..'
import { AccordionContentStory, AccordionContentMeta } from './type'
import React from 'react'

const meta: AccordionContentMeta = {
    title: 'Atoms/AccordionContent',
    component: AccordionContent,
    argTypes: {
        children: {
            description:
                'Describes the content of the AccordionContent element',
        },
    },
    args: {},
}

export default meta

export const Default: AccordionContentStory = {
    args: {
        children: '',
    },
    decorators: [
        (Story, context) => {
            return (
                <Accordion id='story'>
                    <AccordionItem id='story'>
                        <Story {...context} />
                    </AccordionItem>
                </Accordion>
            )
        },
    ],
}

export const Expanded: AccordionContentStory = {
    args: {
        children: 'Test123',
    },
    decorators: [
        (Story, context) => {
            return (
                <Accordion id='accordion-story' defaultOpened='story'>
                    <AccordionItem id='story'>
                        <Story {...context} />
                    </AccordionItem>
                </Accordion>
            )
        },
    ],
}
