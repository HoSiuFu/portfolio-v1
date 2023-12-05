'use client'

import React, { createContext, useEffect, useMemo, useState } from 'react'
import AccordionProps, { AccordionContextTypes } from './type'

export const AccordionContext = createContext<AccordionContextTypes>({
    expanded: '',
    setExpanded: null,
})

const Accordion = (props: AccordionProps) => {
    const [expanded, setExpanded] = useState('')

    useEffect(() => {
        if (props.defaultOpened) setExpanded(props.defaultOpened)
    }, [props.defaultOpened])

    const value = useMemo<AccordionContextTypes>(
        () => ({
            expanded,
            setExpanded,
        }),
        [expanded, setExpanded]
    )

    return (
        <AccordionContext.Provider value={value}>
            <div id={props.id} className='accordion-container'>
                {props.children}
            </div>
        </AccordionContext.Provider>
    )
}

export default Accordion
