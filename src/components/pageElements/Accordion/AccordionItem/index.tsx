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
        return Math.random().toString(11).substring(2, 11)
    }, [])

    const value = useMemo<AccordionItemContextTypes>(() => {
        return {
            id: props.id,
            hash,
            active: expanded === props.id,
            onClick: () => {
                if (setExpanded) setExpanded(props.id)
            },
        }
    }, [expanded, hash, props.id, setExpanded])

    return (
        <AccordionItemContext.Provider value={value}>
            <div className='accordion-item' id={`${props.id}-${hash}`}>
                {props.children}
            </div>
        </AccordionItemContext.Provider>
    )
}

export default AccordionItem
