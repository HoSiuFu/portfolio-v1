import { Meta, StoryObj } from '@storybook/react'

export type ButtonType = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'large' | 'medium' | 'small'

export default interface ButtonProps {
    type: ButtonType
    size: ButtonSize
    children: React.ReactNode
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export type ButtonMeta = Meta<ButtonProps>
export type ButtonStory = StoryObj<ButtonProps>
