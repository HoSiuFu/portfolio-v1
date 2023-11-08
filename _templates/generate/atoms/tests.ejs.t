---
to: _generated/<%= name %>/<%= name %>.cy.tsx
---

import React from 'react'
import '@/styles/global.scss'
import <%= name %> from '.'

describe('<<%= name %> />', () => {
    it('Renders', () => {
        cy.mount(<<%= name %> />)
    })
})
