import Tag from '.'
import { TagStory, TagMeta } from './type'

const meta: TagMeta = {
    title: 'Atoms/Buttons/Tag',
    component: Tag,
    argTypes: {
        id: {
            description: 'Defines the id of the button',
        },
        children: {
            description: 'Defines the content inside of the tag',
        },
        isSelected: {
            description:
                'Defines if the label is selected, changes the component visually',
        },
        disabled: {
            description: 'Defines if the tag is disabled',
        },
        onClick: {
            description:
                'Defines the function that is executed when the user clicks on a button',
        },
    },
    args: {
        id: 'label',
        children: 'Label',
        onClick: () => {},
    },
}

export default meta

export const Default: TagStory = {}

export const Disabled: TagStory = {
    args: {
        disabled: true,
    },
}

export const Selected: TagStory = {
    args: {
        isSelected: true,
    },
}
