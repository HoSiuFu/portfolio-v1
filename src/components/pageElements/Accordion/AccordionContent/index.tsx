import React, { useContext } from 'react'
import AccordionContentProps from './type'
import { AccordionContext } from '..'

const AccordionContent = (props: AccordionContentProps) => {
    const { expanded } = useContext(AccordionContext)

    return (
        <div id={props.id} className={`accordion-content ${expanded}`}>
            {props.children}
        </div>
    )
}

export default AccordionContent
