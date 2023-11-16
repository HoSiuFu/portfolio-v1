import React from 'react'
import '@/styles/global.scss'
import Dropdown from '.'

describe('<Dropdown />', () => {
    it('Renders', () => {
        cy.mount(<Dropdown />)
    })
})
