import IframeContainer from '.'
import { IframeContainerStory, IframeContainerMeta } from './type'

const meta: IframeContainerMeta = {
    title: 'Atoms/Page Elements/IframeContainer',
    component: IframeContainer,
    argTypes: {
        iframeOptions: {
            description:
                'Defines an Array of Objects{title, src} that is to be used to populate the iframe as well as the dropdown, it cannot be empty',
        },
        fullWidth: {
            description:
                'Defines if iframe should be full width or not it uses, align-self:strech and width:100% to achieve this',
        },
    },
    args: {
        iframeOptions: [
            {
                src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtWISqbVVkIsSxS5jaQnk3s%2FPortofolio-V1%3Ftype%3Ddesign%26node-id%3D7%253A2%26mode%3Ddesign%26t%3DkwELVhdq6ryzbBQQ-1',
                title: 'Portfolio v1 - Atoms',
            },
            {
                src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtWISqbVVkIsSxS5jaQnk3s%2FPortofolio-V1%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddev',
                title: 'Portfolio v1 - Typos & Colors',
            },
        ],
    },
}

export default meta

export const Default: IframeContainerStory = {}
