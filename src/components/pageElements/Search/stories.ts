import Search from '.'
import { SearchStory, SearchMeta } from './type'

const meta: SearchMeta = {
    title: 'Atoms/Search',
    component: Search,
    argTypes: {
        onClose: {
            description:
                'Describes the function executed when the user closes the search functionality',
        },
        allTags: {
            description: 'Array of strings that represent the labels',
        },
    },
    args: {
        onClose: (search, selectedLabels) => {
            console.log(search, selectedLabels)
        },
        allTags: [{ value: 'blender', label: 'Blender' }],
    },
}

export default meta

export const Default: SearchStory = {}
