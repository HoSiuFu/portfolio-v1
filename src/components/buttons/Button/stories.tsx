import React from 'react'
import { CloseIcon } from '../../icons/index'
import Button from '.'
import { ButtonStory, ButtonMeta } from './type'

const meta: ButtonMeta = {
    title: 'Atoms/Buttons/Button',
    component: Button,
    argTypes: {
        type: {
            description: 'Defines the type of the button.',
            options: ['primary', 'secondary', 'tertiary'],
            control: 'inline-radio',
        },
        size: {
            description: 'Defines the size of the button.',
            options: ['large', 'medium', 'small'],
            control: 'inline-radio',
        },
        children: {
            description: 'Defines the content inside of the button',
        },
        onClick: {
            description:
                'Defines the function that is triggered when the button is clicked.',
        },
        disabled: {
            description: 'Defines if the button is active or not.',
            control: 'boolean',
        },
        leftIcon: {
            description:
                'Defines the Icon that is to be set at the left of the content. \n' +
                'Although it recieves a ReactNode only icons should be set here',
        },
        rightIcon: {
            description:
                'Defines the Icon that is to be set at the left of the content. \n' +
                'Although it recieves a ReactNode only icons should be set here',
        },
    },
    args: {
        size: 'large',
        onClick: () => {
            console.log('teste')
        },
        children: 'Label',
        disabled: false,
    },
}

export default meta

export const Default: ButtonStory = {
    args: {
        type: 'primary',
    },
}

export const Disabled: ButtonStory = {
    args: {
        type: 'primary',
        disabled: true,
    },
}

export const LeftIcon: ButtonStory = {
    args: {
        type: 'primary',
        leftIcon: <CloseIcon />,
    },
}

export const RightIcon: ButtonStory = {
    args: {
        type: 'primary',
        rightIcon: <CloseIcon />,
    },
}

export const BothIcons: ButtonStory = {
    args: {
        type: 'primary',
        leftIcon: <CloseIcon />,
        rightIcon: <CloseIcon />,
    },
}
