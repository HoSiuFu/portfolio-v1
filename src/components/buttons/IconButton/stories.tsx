import { GitHubIcon } from '@/components/icons'
import IconButton from '.'
import React from 'react'
import { IconButtonMeta, IconButtonStory } from './type'

const meta: IconButtonMeta = {
    title: 'Atoms/Buttons/IconButton',
    component: IconButton,
    argTypes: {
        children: {
            description:
                'Defines the icon that will be displayed inside the IconButton. \n' +
                'Although it is of ReactNode type, it should only be used for icons.',
        },
        onClick: {
            description:
                'Defines the function that is triggered when the IconButton is clicked. It receives a MouseEvent as an argument. \n' +
                'It should not be used in conjuction with the href or target property.',
        },
        href: {
            description:
                'Defines the path/url to travel to. \nShould not be used in conjuction with the onClick property.',
        },
        target: {
            description:
                'Specifies where the linked document should open.\nShould not be used in conjuction with the onClick property.',
        },
        disabled: {
            description:
                'Specifies if a IconButton is disabled. This only affects the button variant of the component.',
        },
    },
    args: {
        children: <GitHubIcon />,
    },
}

export default meta

export const Button: IconButtonStory = {
    args: {
        onClick: () => {},
    },
}

export const DisabledButton: IconButtonStory = {
    args: {
        disabled: true,
    },
}

export const Link: IconButtonStory = {
    args: {
        href: '#',
        target: '_blank',
    },
}
