import React from 'react'
import '@/styles/global.scss'
import Search from '.'

describe('<Search />', () => {
    it('Renders', () => {
        cy.mount(<Search allTags={[]} onClose={() => {}} />)
    })
})
