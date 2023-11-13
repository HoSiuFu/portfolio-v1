import IframeContainer from '.'
import { IframeContainerStory, IframeContainerMeta } from './type'

const meta: IframeContainerMeta = {
    title: 'Atoms/Page Elements/IframeContainer',
    component: IframeContainer,
    argTypes: {
        src: {
            description: 'Defines the source of the iframe',
        },
        title: {
            description: 'Defines the title of the iframe',
        },
        fullWidth: {
            description:
                'Defines if iframe should be full width or not it uses, align-self:strech and width:100% to achieve this',
        },
    },
    args: {
        src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtWISqbVVkIsSxS5jaQnk3s%2FPortofolio-V1%3Ftype%3Ddesign%26node-id%3D7%253A2%26mode%3Ddesign%26t%3DkwELVhdq6ryzbBQQ-1',
        title: 'Figma - Portofolio V1',
    },
}

export default meta

export const Default: IframeContainerStory = {}
