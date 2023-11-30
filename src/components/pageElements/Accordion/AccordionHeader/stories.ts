import AccordionHeader from '.'
import { AccordionHeaderStory, AccordionHeaderMeta } from './type'

const meta: AccordionHeaderMeta = {
    title: 'Atoms/Page Elements/Accordion/AccordionHeader',
    component: AccordionHeader,
    argTypes: {
        id: {
            description:
                'Defines the identifier of the accordion header, it should be unique.',
        },
        title: {
            description: 'Defines the title of the accordion header',
        },
        subtitle: {
            description: 'Defines the subtitle of the accordion header',
        },
    },
    args: {
        id: 'id',
        title: 'title',
        subtitle: 'subtitle',
    },
}

export default meta

export const Default: AccordionHeaderStory = {}
