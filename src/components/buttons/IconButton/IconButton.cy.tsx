/* eslint-disable no-console */
import React from 'react'
import IconButton from '.'
import '@/styles/global.scss'
import { GitHubIcon } from '@/components/icons'

describe('<IconButton />', () => {
    it('renders', () => {
        cy.mount(
            <IconButton>
                <GitHubIcon />
            </IconButton>
        )
    })
})
