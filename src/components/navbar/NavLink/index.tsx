'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavLinkProps from './type'
import { usePathname } from 'next/navigation'

const NavLink = (props: NavLinkProps) => {
    const activePathname = usePathname()
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        if (activePathname) {
            const linkPathname = new URL(props.href as string, location.href)
                .pathname

            setIsActive(linkPathname === activePathname)
        }
    }, [activePathname, props.href])

    return (
        <Link
            className={`h3 nav-link ${isActive ? 'active' : ''}`}
            href={props.href}
            target={props.target}
        >
            {props.children}
        </Link>
    )
}

export default NavLink
