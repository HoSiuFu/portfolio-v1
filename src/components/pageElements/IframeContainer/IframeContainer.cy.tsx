import React from 'react'
import '@/styles/global.scss'
import IframeContainer from '.'

describe('<IframeContainer />', () => {
    it('Renders', () => {
        cy.mount(
            <IframeContainer
                iframeOptions={[
                    {
                        src: '/',
                        title: 'test',
                    },
                ]}
            />
        )
    })
})
