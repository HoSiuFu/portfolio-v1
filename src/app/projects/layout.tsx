import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='projects'>
            <div className='layout'>
                <h1 className='h1 title grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                    Projects
                </h1>
                <h2 className='h2 subtitle grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                    Checkout my projects on various different areas
                </h2>
                {children}
            </div>
        </div>
    )
}
