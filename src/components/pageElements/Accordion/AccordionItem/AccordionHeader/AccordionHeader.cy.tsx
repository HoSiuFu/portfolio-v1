import React from 'react'
import '@/styles/global.scss'
import AccordionHeader from '.'

describe('<AccordionHeader />', () => {
    it('Renders', () => {
        cy.mount(<AccordionHeader title='test' subtitle='test' />)
    })
})
