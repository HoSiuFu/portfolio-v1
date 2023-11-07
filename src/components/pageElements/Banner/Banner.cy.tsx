import React from 'react'
import '@/styles/global.scss'
import Banner from '.'

describe('<Banner />', () => {
    it('Renders', () => {
        cy.mount(<Banner />)
    })

    it('Title, subtitle and text should be present', () => {
        cy.mount(<Banner title='Title' subtitle='Subtitle' text='Text' />)

        cy.get('h1.title').should('exist')
        cy.get('h2.subtitle').should('exist')
        cy.get('p.text').should('exist')
    })

    it('Title should be the only present', () => {
        cy.mount(<Banner title='Title' />)

        cy.get('h1.title').should('exist')
        cy.get('h2.subtitle').should('not.exist')
        cy.get('p.text').should('not.exist')
    })

    it('Subtitle should be the only present', () => {
        cy.mount(<Banner subtitle='Subtitle' />)

        cy.get('h1.title').should('not.exist')
        cy.get('h2.subtitle').should('exist')
        cy.get('p.text').should('not.exist')
    })

    it('Text should be the only present', () => {
        cy.mount(<Banner text='Text' />)

        cy.get('h1.title').should('not.exist')
        cy.get('h2.subtitle').should('not.exist')
        cy.get('p.text').should('exist')
    })

    it('Background properties are applied', () => {
        cy.mount(
            <Banner
                backgroundProperties={{
                    backgroundSize: '150%',
                    backgroundPositionX: '25%',
                }}
            />
        )

        const banner = cy.get('div.banner')
        banner.should('exist')
        banner.should('have.css', 'background-size', '150%')
        banner.should('have.css', 'background-position-x', '25%')
    })
})
