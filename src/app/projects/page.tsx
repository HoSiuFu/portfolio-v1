import { MaintenanceIcon } from '@/components/icons'
import React from 'react'

const Projects = () => {
    return (
        <div className='no-projects grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
            <MaintenanceIcon className='maintenance-icon' />
            <div className='text-frame'>
                <h2 className='h2 title'>
                    Whoops! <br />
                    Seems like there are no posts yet!
                </h2>
                <h3 className='h3 subtitle'>
                    Don&apos;t worry this will be populated soon.
                </h3>
            </div>
        </div>
    )
}

export default Projects
