import React from 'react'
import '@/styles/global.scss'
import PaginationElement from '.'

describe('<PaginationElement />', () => {
    it('Renders', () => {
        cy.mount(
            <PaginationElement
                onClick={() => {
                    console.log('test')
                }}
                pageValue={1}
            >
                1
            </PaginationElement>
        )
    })
})
