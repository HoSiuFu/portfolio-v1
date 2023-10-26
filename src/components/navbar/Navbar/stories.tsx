import { BrandIcon, GitHubIcon } from '@/components/icons'
import Navbar from '.'
import React from 'react'
import { NavbarMeta, NavbarStory } from './type'

const meta: NavbarMeta = {
    title: 'Atoms/Navbar/Navbar',
    component: Navbar,
    argTypes: {
        brandIcon: {
            description: 'Defines the element that identifies the the website.',
        },
        navLinks: {
            description:
                'Defines the label and links of all the NavLinks indexed in the navbar, except for the social links.' +
                'It receives an array of tuples of (string, string).',
        },
        socialLinks: {
            description:
                'Defines the social icons and their links. ' +
                'It receives an array of tuples of (ReactNode, string), where ReactNode is the Icon and the string is the url.',
        },
    },
    args: {
        brandIcon: <BrandIcon />,
        navLinks: [['Home', '/']],
        socialLinks: [[<GitHubIcon key='github-icon' />, '#']],
    },
}

export default meta

export const Default: NavbarStory = {}
