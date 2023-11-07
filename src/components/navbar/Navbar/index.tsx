'use client'

import React, { useEffect, useState } from 'react'
import { IconButton } from '@/components/buttons'
import {
    BrandIcon,
    CloseIcon,
    GitHubIcon,
    HamburgerIcon,
    LinkedInIcon,
} from '@/components/icons'
import NavLink from '../NavLink'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const [displaySideMenu, setDisplaySideMenu] = useState<boolean>(false)
    const [currentPathname, setCurrentPathname] = useState<string>('')

    const resetSideMenu = () => {
        if (window.innerWidth >= 960) {
            setDisplaySideMenu(false)
        }
    }

    useEffect(() => {
        if (currentPathname !== pathname) {
            setDisplaySideMenu(false)
            setCurrentPathname(pathname || '')
        }
    }, [pathname, currentPathname])

    useEffect(() => {
        window.addEventListener('resize', resetSideMenu)
        return () => {
            window.removeEventListener('resize', resetSideMenu)
        }
    }, [])

    const onClickHamb = () => {
        setDisplaySideMenu(!displaySideMenu)
    }

    return (
        <header className='nav-header'>
            <div className={`modal ${displaySideMenu ? 'modal-active' : ''}`} />
            <div className='layout'>
                <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 flex-layout'>
                    <IconButton href='/'>
                        <BrandIcon className='brand-icon' />
                    </IconButton>

                    <IconButton onClick={onClickHamb}>
                        <HamburgerIcon className='hamb' />
                    </IconButton>

                    <nav className={`nav ${displaySideMenu ? 'opened' : ''}`}>
                        <div className='upper-part'>
                            <IconButton onClick={onClickHamb}>
                                <CloseIcon className='hamb' />
                            </IconButton>
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
                        </div>
                        <div className='lower-part'>
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
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
