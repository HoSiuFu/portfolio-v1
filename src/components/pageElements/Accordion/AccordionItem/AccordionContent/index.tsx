'use client'

import React, { useContext, useEffect, useRef } from 'react'
import AccordionContentProps from './type'
import { AccordionItemContext } from '..'

const AccordionContent = (props: AccordionContentProps) => {
    const { active, hash, id } = useContext(AccordionItemContext)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref && ref.current) {
            const onTransitionEnd = () => {
                if (ref.current) {
                    if (ref.current.style.maxHeight !== '0px' && active)
                        ref.current.style.maxHeight = 'none'

                    ref.current.removeEventListener(
                        'transitionend',
                        onTransitionEnd
                    )
                }
            }

            ref.current.addEventListener('transitionend', onTransitionEnd)

            if (!active) {
                ref.current.style.maxHeight = `${ref.current.scrollHeight}px`
                ref.current.style.maxHeight = `${ref.current.scrollHeight}px`
                ref.current.style.maxHeight = '0px'
            } else {
                console.log('here')
                ref.current.style.maxHeight = `${ref.current.scrollHeight}px`
            }
        }
    }, [active, hash, id])

    return (
        <div
            ref={ref}
            id={`${id}-content-${hash}`}
            className={`accordion-content-outer ${active ? 'expanded' : ''}`}
        >
            <div className='accordion-content-inner'>{props.children}</div>
        </div>
    )
}

export default AccordionContent
