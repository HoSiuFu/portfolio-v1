import React from 'react'
import { IconButton } from '@/components/buttons'
import NavbarProps from './type'
import { BrandIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'
import NavLink from '../NavLink'

const Navbar = (props: NavbarProps) => {
    return (
        <header className='nav-header'>
            <div className='layout'>
                <div className='grid-desktop-start-1 grid-desktop-end-12 grid-tablet-start-1 grid-tablet-end-6 grid-mobile-start-1 grid-mobile-end-4 flex-layout'>
                    <IconButton href='/'>
                        <BrandIcon className='brand-icon' />
                    </IconButton>

                    <nav className='nav'>
                        <ul className='menu'>
                            <li>
                                <NavLink href='/' key='home'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href='/about' key='about'>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href='/projects' key='projects'>
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href='/contacts' key='contacts'>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                        <ul className='socials'>
                            <li>
                                <IconButton
                                    href='https://github.com/HoSiuFu'
                                    target='_blank'
                                >
                                    <GitHubIcon className='icon' />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton
                                    href='https://www.linkedin.com/in/danilo-m-andrade/'
                                    target='_blank'
                                >
                                    <LinkedInIcon className='icon' />
                                </IconButton>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
