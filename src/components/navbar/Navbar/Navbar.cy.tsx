import React from 'react'
import { IconButton } from '@/components/buttons'
import { GitHubIcon } from '@/components/icons'

const Navbar = () => {
    return (
        <header className='nav-header'>
            <div className='layout'>
                <IconButton href='/'>
                    <GitHubIcon className='main-icon' />
                </IconButton>
            </div>
        </header>
    )
}

export default Navbar
