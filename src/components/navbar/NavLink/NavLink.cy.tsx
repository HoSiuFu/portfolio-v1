import React from 'react'
import '@/styles/global.scss'
import NavLink from '.'

describe('<NavLink />', () => {
    it('Renders', () => {
        cy.mount(<NavLink href='#'>Link</NavLink>)
    })
})
