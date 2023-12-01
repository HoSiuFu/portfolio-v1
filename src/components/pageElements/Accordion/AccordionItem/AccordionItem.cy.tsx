import React from 'react'
import '@/styles/global.scss'
import AccordionItem from '.'

describe('<AccordionItem />', () => {
    it('Renders', () => {
        cy.mount(<AccordionItem id='test'>test</AccordionItem>)
    })
})
