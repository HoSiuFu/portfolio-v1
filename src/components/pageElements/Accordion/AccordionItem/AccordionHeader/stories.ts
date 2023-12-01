import AccordionHeader from '.'
import { AccordionHeaderStory, AccordionHeaderMeta } from './type'

const meta: AccordionHeaderMeta = {
    title: 'Atoms/Page Elements/Accordion/AccordionHeader',
    component: AccordionHeader,
    argTypes: {
        title: {
            description: 'Defines the title of the accordion header',
        },
        subtitle: {
            description: 'Defines the subtitle of the accordion header',
        },
    },
    args: {
        title: 'title',
        subtitle: 'subtitle',
    },
}

export default meta

export const Default: AccordionHeaderStory = {}
