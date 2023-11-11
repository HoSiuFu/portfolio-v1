import React from 'react'
import '@/styles/global.scss'
import SearchBar from '.'

describe('<SearchBar />', () => {
    it('Renders', () => {
        cy.mount(<SearchBar />)
    })
})
