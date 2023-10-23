/* eslint-disable no-console */
import React from 'react'
import IconButton from '.'
import '@/styles/global.scss'
import { GitHubIcon } from '@/components/icons'

describe('<IconButton />', () => {
    it('Renders', () => {
        cy.mount(
            <IconButton>
                <GitHubIcon />
            </IconButton>
        )
    })

    it('It is an anchor element', () => {
        cy.mount(
            <IconButton url='https://github.com' target='_blank'>
                <GitHubIcon />
            </IconButton>
        )
        cy.get('a.icon-button').should('exist')
    })

    it('It is a button element', () => {
        cy.mount(
            <IconButton
                onClick={() => {
                    console.log('Test')
                }}
            >
                <GitHubIcon />
            </IconButton>
        )
        cy.get('button.icon-button').should('exist')
    })

    it('Fallbacks onto anchor element if "url" is given as an prop along with the all the others props', () => {
        cy.mount(
            <IconButton
                url='https://github.com'
                target='_blank'
                onClick={() => {
                    console.log('Test')
                }}
            >
                <GitHubIcon />
            </IconButton>
        )

        const element = cy.get('a.icon-button')

        element.should('exist')
        element.should('have.attr', 'href', 'https://github.com')
        element.should('have.attr', 'target', '_blank')
    })

    it('Is clickable', () => {
        cy.mount(
            <IconButton
                onClick={() => {
                    console.log('test')
                }}
            >
                <GitHubIcon />
            </IconButton>
        )

        const element = cy.get('button.icon-button')
        element.click()
    })
})
