'use client'

import { Button } from '@/components/buttons'
import { ButtonSize } from '@/components/buttons/Button/type'
import { UseBreakpointReturn } from '@/hooks/useBreakpoints/type'
import useBreakpoints from '@/hooks/useBreakpoints/useBreakpoints'
import React from 'react'

interface Props {
    projectUrl: string
    icon?: React.ReactNode
}

const setButtonSize = (breakpoint: UseBreakpointReturn): ButtonSize => {
    if (breakpoint === 'mobile') return 'small'
    if (breakpoint === 'tablet') return 'medium'

    return 'large'
}

const ProjectUrlButton = (props: Props) => {
    const activeLayout = useBreakpoints()

    const onClick = () => {
        window.open(props.projectUrl, '_blank')
    }

    return (
        <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 button-position'>
            <Button
                onClick={onClick}
                size={setButtonSize(activeLayout)}
                type='primary'
            >
                Click Here to Check the Project
            </Button>
        </div>
    )
}

export default ProjectUrlButton
