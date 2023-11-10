import React from 'react'
import '@/styles/global.scss'
import PostCard from '.'

describe('<PostCard />', () => {
    it('Renders', () => {
        cy.mountNextRouter(
            <PostCard
                gridColumnDesktop={{
                    start: 1,
                    end: 3,
                }}
                gridColumnTablet={{
                    start: 1,
                    end: 2,
                }}
                gridColumnMobile={{
                    start: 1,
                    end: 4,
                }}
                title='title'
                postUrl='#'
            />
        )
    })
})
