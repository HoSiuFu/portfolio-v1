import React from 'react'
import '@/styles/global.scss'
import SearchBar from '.'

describe('<SearchBar />', () => {
    it('Renders', () => {
        cy.mount(
            <SearchBar
                id='input'
                onChange={() => console.log('test')}
                onClearValue={() => {
                    console.log('test')
                }}
                gridColumnDesktop={{
                    start: 1,
                    end: 13,
                }}
                gridColumnTablet={{
                    start: 1,
                    end: 7,
                }}
                gridColumnMobile={{
                    start: 1,
                    end: 5,
                }}
            />
        )
    })
})
