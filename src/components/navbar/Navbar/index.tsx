import React from 'react'
import { IconButton } from '@/components/buttons'
import NavbarProps from './type'

const Navbar = (props: NavbarProps) => {
    return (
        <header className='nav-header'>
            <div className='layout'>
                <div className='grid-desktop-start-1 grid-desktop-end-12 grid-tablet-start-1 grid-tablet-end-6 grid-mobile-start-1 grid-mobile-end-4'>
                    <IconButton href='/'>{props.brandIcon}</IconButton>
                </div>
            </div>
        </header>
    )
}

export default Navbar
