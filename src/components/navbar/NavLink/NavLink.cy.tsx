import React from 'react'
import NavLink from '.'

describe('<NavLink />', () => {
    it('Renders', () => {
        cy.mount(<NavLink href='#'>Link</NavLink>)
    })
})
