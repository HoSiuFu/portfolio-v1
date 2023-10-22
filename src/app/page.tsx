import {
    CloseIcon,
    GitHubIcon,
    HamburgerIcon,
    LinkedInIcon,
} from '@/components/icons'
import React from 'react'

export default function Home() {
    return (
        <div>
            <GitHubIcon styles={{ width: '50px' }} />
            <CloseIcon />
            <HamburgerIcon />
            <LinkedInIcon />
        </div>
    )
}
