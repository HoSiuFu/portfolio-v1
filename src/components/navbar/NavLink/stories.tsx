import NavLink from '.'
import { NavLinkMeta } from './type'

const meta: NavLinkMeta = {
    title: 'Navbar/NavLink',
    component: NavLink,
    argTypes: {
        href: {
            description: 'Defines the path/url to travel to.',
        },
        target: {
            description: 'Defines where the linked document should be opened.',
        },
        children: {
            description: 'Defines the content inside the NavLink component',
        },
    },
    args: {
        target: '_self',
        children: 'Link',
    },
}

export default meta

export const Default = {
    args: {
        href: 'https://github.com/HoSiuFu',
    },
}

export const Active = {
    args: {
        href: 'http://localhost:6006/?path=/story/navbar-navlink--active',
    },
}
