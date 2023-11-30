import React from 'react'
import '@/styles/global.scss'
import AccordionContent from '.'

describe('<AccordionContent />', () => {
    it('Renders', () => {
        cy.mount(<AccordionContent id='test'>test</AccordionContent>)
    })
})
