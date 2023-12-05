'use client'

import React, { createContext, useContext, useMemo } from 'react'
import AccordionItemProps, { AccordionItemContextTypes } from './type'
import { AccordionContext } from '..'

export const AccordionItemContext = createContext<AccordionItemContextTypes>({
    id: '',
    active: false,
    hash: '',
    onClick: () => {},
})

const AccordionItem = (props: AccordionItemProps) => {
    const { expanded, setExpanded } = useContext(AccordionContext)

    const hash = useMemo(() => {
        return Math.random().toString(20).substring(2, 11)
    }, [])

    const value = useMemo<AccordionItemContextTypes>(() => {
        return {
            id: props.id,
            hash: Math.random().toString(30).substring(2, 11),
            active: expanded === props.id,
            onClick: () => {
                if (setExpanded) {
                    setExpanded(expanded === props.id ? '' : props.id)
                }
            },
        }
    }, [expanded, props.id, setExpanded])

    return (
        <AccordionItemContext.Provider value={value}>
            <div
                className={`accordion-item ${value.active ? 'expanded' : ''}`}
                id={`${props.id}-${hash}`}
            >
                {props.children}
            </div>
        </AccordionItemContext.Provider>
    )
}

export default AccordionItem
