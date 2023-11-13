import React from 'react'
import '@/styles/global.scss'
import IframeContainer from '.'

describe('<IframeContainer />', () => {
    it('Renders', () => {
        cy.mount(
            <IframeContainer
                src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtWISqbVVkIsSxS5jaQnk3s%2FPortofolio-V1%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dw1NK5QTpQgKqMxWp'
                title='test'
            />
        )
    })
})
