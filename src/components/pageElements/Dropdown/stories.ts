import Dropdown from '.'
import { DropdownStory, DropdownMeta } from './type'

const meta: DropdownMeta = {
    title: 'Atoms/Dropdown',
    component: Dropdown,
    argTypes: {
        placeholder: {
            description:
                'Defines the content that is initially shown on the dropdown, before a value is assigned',
        },
        options: {
            description:
                'Defines the content the available options of the dropdown, it is an array of Objects<label:string, value:string>',
        },
        defaultValue: {
            description:
                'Defines the default value that is associated to the dropdown',
        },
        fullWidth: {
            description:
                'Defines if the dropdown is supposed to expand to the whole division',
        },
    },
    args: {
        placeholder: 'Select an Option...',
        options: [
            { value: 'value1', label: 'Value 1' },
            { value: 'value2', label: 'Value 2' },
        ],
    },
}

export default meta

export const Default: DropdownStory = {}
