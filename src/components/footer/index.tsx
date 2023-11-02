import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='layout'>
                <Link
                    className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 h3 copyright'
                    href='/'
                >
                    © 2023 Danilo Andrade. All rights reserved.
                </Link>
            </div>
        </footer>
    )
}

export default Footer
