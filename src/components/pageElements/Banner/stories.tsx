import Banner from '.'
import { BannerMeta, BannerStory } from './type'
import BackgroundImage from '../../../../public/images/front.png'
import React from 'react'

const meta: BannerMeta = {
    title: 'Atoms/Page Elements/Banner',
    component: Banner,
    argTypes: {
        title: {
            description: 'Defines the main title of the banner.',
        },
        subtitle: {
            description: 'Defines the subtitle of the banner.',
        },
        text: {
            description: 'Defines the text of the banner',
        },
        backgroundProperties: {
            description:
                'Defines the properties to be applied to the background of the banner through styles.' +
                'It is ment to be a way to be able to pass different images for the background, ' +
                'and other properties such as size and position, etc..',
        },
    },
    args: {
        title: <>Title</>,
        subtitle: <>Subtitle</>,
        text: <>Text</>,
    },
}

export default meta

export const NoBackground: BannerStory = {}

export const WithBackgroundImage: BannerStory = {
    args: {
        backgroundProperties: {
            backgroundImage: `url(${BackgroundImage.src})`,
        },
    },
}

export const WithImageAndPropertiesSent: BannerStory = {
    args: {
        backgroundProperties: {
            backgroundImage: `url(${BackgroundImage.src})`,
            backgroundSize: '150%, 150%, cover',
            backgroundPositionY: '30%',
        },
    },
}
