import { Meta, StoryObj } from '@storybook/react'

export default interface NavLinkProps {
    href: string
    target?: React.HTMLAttributeAnchorTarget
    children: React.ReactNode
}

export type NavLinkMeta = Meta<NavLinkProps>
export type NavLinkStory = StoryObj<NavLinkProps>
