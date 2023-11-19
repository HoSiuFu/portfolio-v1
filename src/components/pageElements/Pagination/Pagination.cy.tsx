import React from 'react'
import '@/styles/global.scss'
import Pagination from '.'

describe('<Pagination />', () => {
    it('Renders', () => {
        cy.mount(
            <Pagination
                currentPage={1}
                neighboursCount={2}
                pageSize={1}
                totalCount={10}
                onPageChange={() => {}}
            />
        )
    })
})
