import Pagination from '.'
import { PaginationStory, PaginationMeta } from './type'

const meta: PaginationMeta = {
    title: 'Atoms/Page Elements/Pagination',
    component: Pagination,
    argTypes: {
        currentPage: {
            description: 'Defines the current page',
        },
        neighboursCount: {
            description:
                'Defines how many PageElements might appear adjecent on both sides to the current page.',
        },
        pageSize: {
            description:
                'Defines the size of the page, it means the maximum number of elements per page',
        },
        totalCount: {
            description: 'Defines the total numbers of the list of items',
        },
        onPageChange: {
            description:
                'Defines the function that is executed when a PageElement or navigation element is interacted with.',
        },
    },
    args: {
        pageSize: 10,
        onPageChange: (page) => {
            console.log(page)
        },
    },
}

export default meta

export const Default: PaginationStory = {
    args: {
        currentPage: 1,
        totalCount: 70,
        neighboursCount: 2,
    },
}

export const LastPageSelected: PaginationStory = {
    args: {
        currentPage: 7,
        totalCount: 70,
        neighboursCount: 2,
    },
}

export const MiddlePageSelected: PaginationStory = {
    args: {
        currentPage: 4,
        totalCount: 70,
        neighboursCount: 2,
    },
}

export const HiddenPagesLeft: PaginationStory = {
    args: {
        currentPage: 1,
        totalCount: 100,
        neighboursCount: 2,
    },
}

export const HiddenPagesRigth: PaginationStory = {
    args: {
        currentPage: 10,
        totalCount: 100,
        neighboursCount: 2,
    },
}

export const HiddenPagesBoth: PaginationStory = {
    args: {
        currentPage: 5,
        totalCount: 100,
        neighboursCount: 2,
    },
}
