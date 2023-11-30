import React, { useContext } from 'react'
import AccordionHeaderProps from './type'
import { AccordionContext } from '..'
import { ArrowIcon } from '@/components/icons'

const AccordionHeader = (props: AccordionHeaderProps) => {
    const accordionContext = useContext(AccordionContext)

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (accordionContext.setExpanded)
            accordionContext.setExpanded(event.currentTarget.id)
    }

    return (
        <button
            onClick={onClick}
            className={`accordion-header ${
                accordionContext.expanded === props.id ? 'expanded' : ''
            }`}
            id={props.id}
        >
            <div className='accordion-header-info-section'>
                <h3 className='h3 title'>{props.title}</h3>
                {props.subtitle && (
                    <p className='p subtitle'>{props.subtitle}</p>
                )}
            </div>
            <ArrowIcon className='arrow-icon' />
        </button>
    )
}

export default AccordionHeader
