/* eslint-disable no-console */
import React from 'react'
import '@/styles/global.scss'
import Button from '.'
import { CloseIcon } from '@/components/icons'

describe('<Button />', () => {
    it('Renders', () => {
        cy.mount(
            <Button
                onClick={() => {
                    console.log('test')
                }}
                size='large'
                type='primary'
            >
                Label
            </Button>
        )
    })

    it('Displays passed Icons', () => {
        cy.mount(
            <Button
                onClick={() => {
                    console.log('test')
                }}
                size='large'
                type='primary'
                leftIcon={<CloseIcon />}
                rightIcon={<CloseIcon />}
            >
                Label
            </Button>
        )

        const spans = cy.get('span.icon')
        spans.should('have.length', 2)
    })
})
