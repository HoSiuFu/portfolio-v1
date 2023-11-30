import React from 'react'
import '@/styles/global.scss'
import AccordionHeader from '.'

describe('<AccordionHeader />', () => {
    it('Renders', () => {
        cy.mount(<AccordionHeader id='test' title='test' subtitle='test' />)
    })
})
