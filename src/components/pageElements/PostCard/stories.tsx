import PostCard from '.'
import { PostCardMeta, PostCardStory } from './type'
import BackgroundImage from '../../../../public/images/front.png'

const meta: PostCardMeta = {
    title: 'Atoms/Page Elements/Post Card',
    component: PostCard,
    argTypes: {
        cover: {
            description:
                'Defines the image that is to appear as the cover of the Post Card.',
        },
        title: {
            description: 'Defines the title of the Post Card.',
        },
        description: {
            description: 'Defines the description of the Post Card.',
        },
        postUrl: {
            description:
                'Defines the path/url to navigate to when the button in the Post Card is clicked.',
        },
        gridColumnDesktop: {
            description:
                'Defines the start and end column of the Post Card element, for grid positioning purposes.' +
                'This one will applied to the desktop variants.',
        },
        gridColumnTablet: {
            description:
                'Defines the start and end column of the Post Card element, for grid positioning purposes.' +
                'This one will applied to the tablet variants.',
        },
        gridColumnMobile: {
            description:
                'Defines the start and end column of the Post Card element, for grid positioning purposes.' +
                'This one will applied to the mobile variants.',
        },
    },
    args: {
        title: 'Title',
        postUrl: '#',
        gridColumnDesktop: {
            start: 1,
            end: 3,
        },
        gridColumnTablet: {
            start: 1,
            end: 2,
        },
        gridColumnMobile: {
            start: 1,
            end: 5,
        },
    },
}

export default meta

export const Default: PostCardStory = {}

export const WithCover: PostCardStory = {
    args: {
        cover: BackgroundImage,
    },
}
