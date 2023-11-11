import SearchBar from '.'
import { SearchBarStory, SearchBarMeta } from './type'

const meta: SearchBarMeta = {
    title: 'Atoms/Search/SearchBar',
    component: SearchBar,
    argTypes: {
        onChange: {
            description:
                'Defines the function that is executed when the user types on the input.',
        },
        onClearValue: {
            description:
                'Defines a function that clears the value kept in a parent state',
        },
        id: {
            description: 'Defines the id associated with the input.',
        },
        gridColumnDesktop: {
            description:
                'Defines the start and end column of the SearchBar element, for grid positioning purposes.' +
                'This one will applied to the desktop variants.',
        },
        gridColumnTablet: {
            description:
                'Defines the start and end column of the SearchBar element, for grid positioning purposes.' +
                'This one will applied to the tablet variants.',
        },
        gridColumnMobile: {
            description:
                'Defines the start and end column of the SearchBar element, for grid positioning purposes.' +
                'This one will applied to the mobile variants.',
        },
        fullWidth: {
            description:
                'Defines with the SearchBar is suppose to expand to the whole available space.',
        },
    },
    args: {
        onChange: () => {},
        onClearValue: () => {},
        id: 'search-bar',
        gridColumnDesktop: {
            start: 1,
            end: 13,
        },
        gridColumnTablet: {
            start: 1,
            end: 7,
        },
        gridColumnMobile: {
            start: 1,
            end: 5,
        },
    },
}

export default meta

export const Default: SearchBarStory = {}
