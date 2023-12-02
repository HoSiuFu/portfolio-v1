'use client'

import React, { useContext, useEffect, useState } from 'react'
import AccordionContentProps from './type'
import { AccordionItemContext } from '..'

const AccordionContent = (props: AccordionContentProps) => {
    const { active, hash, id } = useContext(AccordionItemContext)
    const [contentHeight, setContentHeight] = useState<string>('0')

    useEffect(() => {
        const handleWindowResize = () => {
            const content = document.getElementById(`${id}-content-${hash}`)

            if (content) {
                setContentHeight(`${content.scrollHeight}px`)
            }
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    return (
        <div
            id={`${id}-content-${hash}`}
            className={`accordion-content ${active ? 'active' : ''}`}
            style={{ maxHeight: active ? contentHeight : '0' }}
        >
            {props.children}
        </div>
    )
}

export default AccordionContent
