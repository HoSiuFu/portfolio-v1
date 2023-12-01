import React, { useContext } from 'react'
import AccordionContentProps from './type'
import { AccordionItemContext } from '..'

const AccordionContent = (props: AccordionContentProps) => {
    const { active, hash, id } = useContext(AccordionItemContext)

    return (
        <div
            id={`${id}-content-${hash}`}
            className={`accordion-content ${active ? 'active' : ''}`}
        >
            {props.children}
        </div>
    )
}

export default AccordionContent
