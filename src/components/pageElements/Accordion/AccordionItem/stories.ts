import AccordionItem from '.'
import { AccordionItemStory, AccordionItemMeta } from './type'

const meta: AccordionItemMeta = {
    title: 'Atoms/AccordionItem',
    component: AccordionItem,
    argTypes: {
        id: {
            description: 'Describes the identifier of the accordion item',
        },
        children: {
            description: 'Describes the content of the accordion item',
        },
    },
    args: {
        id: 'storybook',
        children: '',
    },
}

export default meta

export const Default: AccordionItemStory = {}
