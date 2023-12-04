'use client'

import React, { useContext, useEffect } from 'react'
import AccordionContentProps from './type'
import { AccordionItemContext } from '..'

const AccordionContent = (props: AccordionContentProps) => {
    const { active, hash, id } = useContext(AccordionItemContext)

    useEffect(() => {
        const content = document.getElementById(
            `${id}-content-${hash}`
        ) as HTMLDivElement

        if (content) {
            const onTransitionEnd = () => {
                if (content.style.maxHeight !== '0px')
                    content.style.maxHeight = 'none'

                content.removeEventListener('transitionend', onTransitionEnd)
            }

            content.addEventListener('transitionend', onTransitionEnd)

            if (!active && content.style.maxHeight !== '0px') {
                content.style.maxHeight = `${content.scrollHeight}px`
                content.style.maxHeight = `${content.scrollHeight}px`
                content.style.maxHeight = '0px'
            } else {
                content.style.maxHeight = `${content.scrollHeight}px`
            }
        }
    }, [active, hash, id])

    return (
        <div
            id={`${id}-content-${hash}`}
            className={`accordion-content-outer ${active ? 'expanded' : ''}`}
        >
            <div className='accordion-content-inner'>{props.children}</div>
        </div>
    )
}

export default AccordionContent
