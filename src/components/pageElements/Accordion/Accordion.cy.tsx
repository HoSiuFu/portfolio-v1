import React from 'react'
import '@/styles/global.scss'
import Accordion from '.'

describe('<Accordion />', () => {
    it('Renders', () => {
        cy.mount(<Accordion>Test</Accordion>)
    })
})
