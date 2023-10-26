import { Meta, StoryObj } from '@storybook/react'

export default interface NavbarProps {
    brandIcon: React.ReactNode
    navLinks: Array<[string, string]>
    socialLinks: Array<[React.ReactNode, string]>
}

export type NavbarMeta = Meta<NavbarProps>
export type NavbarStory = StoryObj<NavbarProps>
