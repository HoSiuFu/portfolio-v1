import React from 'react'
import '@/styles/global.scss'
import Dropdown from '.'

describe('<Dropdown />', () => {
    it('Renders', () => {
        cy.mount(
            <Dropdown
                onSelect={(value) => {
                    console.log(value)
                }}
                options={[{ value: 'test', label: 'test' }]}
                placeholder='Select an option'
            />
        )
    })
})
