'use client'

import React, { useContext } from 'react'
import AccordionHeaderProps from './type'
import { AccordionItemContext } from '..'
import { ArrowIcon } from '@/components/icons'

const AccordionHeader = (props: AccordionHeaderProps) => {
    const accordionContext = useContext(AccordionItemContext)

    return (
        <button
            id={`${accordionContext.id}-header-${accordionContext.hash}`}
            onClick={accordionContext.onClick}
            className={`accordion-header ${
                accordionContext.active ? 'expanded' : ''
            }`}
        >
            <div className='accordion-header-info-section'>
                <h3 className='h3 title'>{props.title}</h3>
                {props.subtitle && (
                    <p className='p subtitle'>{props.subtitle}</p>
                )}
            </div>
            <ArrowIcon className={`arrow-icon`} />
        </button>
    )
}

export default AccordionHeader
