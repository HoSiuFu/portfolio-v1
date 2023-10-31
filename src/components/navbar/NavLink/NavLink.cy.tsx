import React from 'react'
import '@/styles/global.scss'
import NavLink from '.'
import Router from 'next/router'

describe('<NavLink />', () => {
    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        cy.stub(Router, 'useRouter').returns({ asPath: 'test', isReady: true })
    })

    it('Renders', () => {
        cy.mount(<NavLink href='#'>Link</NavLink>)
    })
})
