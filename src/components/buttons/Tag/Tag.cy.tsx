import React from 'react'
import '@/styles/global.scss'
import Tag from '.'

describe('<Tag />', () => {
    it('Renders', () => {
        cy.mount(
            <Tag
                onClick={() => {
                    console.log('here')
                }}
            >
                Test
            </Tag>
        )
    })
})
