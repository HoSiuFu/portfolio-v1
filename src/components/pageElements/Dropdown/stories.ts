import Dropdown from '.'
import { DropdownStory, DropdownMeta } from './type'

const meta: DropdownMeta = {
    title: 'Atoms/Page Elements/Dropdown',
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
        onSelect: {
            description:
                'Defines the function that is executed when an option is selected',
        },
    },
    args: {
        placeholder: 'Select an Option...',
        options: [
            { value: 'value1', label: 'Value 1' },
            { value: 'value2', label: 'Value 2' },
        ],
        onSelect: (value) => {
            console.log(value)
        },
    },
}

export default meta

export const Default: DropdownStory = {}
