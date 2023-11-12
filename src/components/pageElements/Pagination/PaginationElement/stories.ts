import PaginationElement from '.'
import { PaginationElementStory, PaginationElementMeta } from './type'

const meta: PaginationElementMeta = {
    title: 'Atoms/Page Elements/Pagination/PaginationElement',
    component: PaginationElement,
    argTypes: {
        children: {
            description: 'Defines the content inside of the PaginationElement',
        },
        pageValue: {
            description: 'Defines the numeric value of the page',
        },
        onClick: {
            description: 'Defines the function that is executed when ',
        },
        isActive: {
            description: 'Defines if the PaginationElement is active.',
        },
    },
    args: {
        children: 1,
        pageValue: 1,
        onClick: () => {},
    },
}

export default meta

export const Default: PaginationElementStory = {}

export const Active: PaginationElementStory = {
    args: {
        isActive: true,
    },
}
