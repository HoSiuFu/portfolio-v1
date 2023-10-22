import { GitHubIcon } from '../../icons/index'
import IconButton from '.'
import React from 'react'
import { IconButtonMeta, IconButtonStory } from './type'

const meta: IconButtonMeta = {
    title: 'Buttons/IconButton',
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
                'It should not be used in conjuction with the url or target property.',
        },
        url: {
            description:
                'Defines the path/url to travel to. \nShould not be used in conjuction with the onClick property.',
        },
        target: {
            description:
                'Specifies where the linked document should open.\nShould not be used in conjuction with the onClick property.',
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

export const Link: IconButtonStory = {
    args: {
        url: '',
        target: '_blank',
    },
}
