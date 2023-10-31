import React from 'react'
import '@/styles/global.scss'
import PostCard from '.'
import Router from 'next/router'

describe('<PostCard />', () => {
    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        cy.stub(Router, 'useRouter').returns({ push: cy.spy().as('push') })
    })

    it('Renders', () => {
        cy.mount(<PostCard title='title' postUrl='#' />)
    })
})
