import React from 'react'
import '@/styles/global.scss'
import PostCard from '.'

describe('<PostCard />', () => {
    it('Renders', () => {
        cy.mountNextRouter(<PostCard title='title' postUrl='#' />)
    })
})
