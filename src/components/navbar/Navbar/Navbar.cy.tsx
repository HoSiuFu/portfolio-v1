import '@/styles/global.scss'
import React from 'react'
import Navbar from '.'
import Router from 'next/router'

describe('<Navbar />', () => {
    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        cy.stub(Router, 'useRouter').returns({ asPath: 'test', isReady: true })
    })

    it('renders', () => {
        cy.mount(<Navbar />)
    })
})
