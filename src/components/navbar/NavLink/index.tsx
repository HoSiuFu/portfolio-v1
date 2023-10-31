import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavLinkProps from './type'
import { useRouter } from 'next/router'

const NavLink = (props: NavLinkProps) => {
    const { asPath, isReady } = useRouter()
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        if (isReady) {
            const linkPathname = new URL(props.href as string, location.href)
                .pathname

            const activePathname = new URL(asPath, location.href).pathname

            setIsActive(linkPathname === activePathname)
        }
    }, [isReady, asPath, props.href])

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
