import Accordion from '.'
import AccordionItem from './AccordionItem'
import React from 'react'
import { AccordionStory, AccordionMeta } from './type'
import AccordionHeader from './AccordionItem/AccordionHeader'
import AccordionContent from './AccordionItem/AccordionContent'

const meta: AccordionMeta = {
    title: 'Atoms/Page Elements/Accordion',
    component: Accordion,
    argTypes: {
        children: {
            description: 'Describes the content of the Accordion',
        },
        defaultOpened: {
            description:
                'Describes the default accordion folder that is to be opened on render',
        },
        id: {
            description: 'Describes the identification of the accordion',
        },
    },
    args: {},
}

export default meta

export const Default: AccordionStory = {
    args: {
        children: (
            <>
                <AccordionItem id='test'>
                    <AccordionHeader title='Test1' />
                    <AccordionContent>
                        <p className='p'>This is a test.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id='test-2'>
                    <AccordionHeader title='Test2' subtitle='lorem ipsum' />
                    <AccordionContent>
                        <p className='p'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sed dui lacus. Fusce quis sollicitudin
                            enim, fermentum dapibus sem. Suspendisse leo nunc,
                            feugiat nec elit id, venenatis pellentesque purus.
                            Morbi molestie aliquet rutrum. Cras accumsan sem sed
                            risus facilisis semper. Maecenas ullamcorper vitae
                            tellus malesuada aliquet. Donec pellentesque
                            malesuada venenatis. Proin nec vestibulum arcu.
                            Donec efficitur urna ligula, sed interdum metus
                            aliquet quis. In facilisis erat a nibh feugiat
                            eleifend. Aenean sapien elit, pretium quis tortor
                            et, laoreet auctor nunc.
                            <br />
                            Aenean id condimentum nisl. Donec non porta eros.
                            Aliquam sit amet varius purus. Etiam suscipit nisi
                            tempus risus sagittis porta. Nunc condimentum massa
                            vel orci lacinia tempor. Curabitur non est urna.
                            Donec convallis tempus orci at eleifend. Vestibulum
                            ornare orci in ex pharetra, congue placerat urna
                            aliquam. Donec facilisis lorem velit, nec pharetra
                            velit vulputate eget. Sed sit amet efficitur dolor.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id='test-3'>
                    <AccordionHeader title='Test3' subtitle='lorem ipsum' />
                    <AccordionContent>
                        <p className='p'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sed dui lacus. Fusce quis sollicitudin
                            enim, fermentum dapibus sem. Suspendisse leo nunc,
                            feugiat nec elit id, venenatis pellentesque purus.
                            Morbi molestie aliquet rutrum. Cras accumsan sem sed
                            risus facilisis semper. Maecenas ullamcorper vitae
                            tellus malesuada aliquet. Donec pellentesque
                            malesuada venenatis. Proin nec vestibulum arcu.
                            Donec efficitur urna ligula, sed interdum metus
                            aliquet quis. In facilisis erat a nibh feugiat
                            eleifend. Aenean sapien elit, pretium quis tortor
                            et, laoreet auctor nunc.
                            <br />
                            Aenean id condimentum nisl. Donec non porta eros.
                            Aliquam sit amet varius purus. Etiam suscipit nisi
                            tempus risus sagittis porta. Nunc condimentum massa
                            vel orci lacinia tempor. Curabitur non est urna.
                            Donec convallis tempus orci at eleifend. Vestibulum
                            ornare orci in ex pharetra, congue placerat urna
                            aliquam. Donec facilisis lorem velit, nec pharetra
                            velit vulputate eget. Sed sit amet efficitur dolor.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </>
        ),
    },
}
