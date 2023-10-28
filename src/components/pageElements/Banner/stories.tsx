import Banner from '.'
import { BannerMeta, BannerStory } from './type'

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
        backgroundImage: {
            description:
                'Defines the image that is to be applied to the background of the banner.',
        },
    },
    args: {
        title: 'Title',
        subtitle: 'Subtitle',
        text: 'Text',
    },
}

export default meta

export const Default: BannerStory = {}
