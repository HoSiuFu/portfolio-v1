'use client'

import React, { useEffect, useState } from 'react'
import IframeContainerProps, { IframeOptionsProps } from './type'
import Dropdown from '../Dropdown'
import { switchObjectKeyNames } from '@/helpers/object.helper'
import { Option } from '../Dropdown/type'
import useBreakpoints from '@/hooks/useBreakpoints/useBreakpoints'

const IframeContainer = (props: IframeContainerProps) => {
    const [selectedIframeContent, setSelectedIframeContent] =
        useState<IframeOptionsProps>({ src: '', title: '' })
    const currentLayout = useBreakpoints()

    useEffect(() => {
        setSelectedIframeContent(props.iframeOptions[0])
    }, [props.iframeOptions])

    const onSelect = (value: string) => {
        const newIframeContent = props.iframeOptions.find(
            (object) => object.src === value
        )
        if (newIframeContent) setSelectedIframeContent(newIframeContent)
    }

    return (
        <div
            className={`grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 iframe-container ${
                props.fullWidth ? 'full-width' : ''
            }`}
        >
            <div className='title-and-dropdown'>
                {(props.iframeOptions.length === 1 ||
                    (props.iframeOptions.length > 1 &&
                        currentLayout !== 'mobile')) && (
                    <h3 className='h3 title'>{selectedIframeContent.title}</h3>
                )}
                {props.iframeOptions.length > 1 && (
                    <Dropdown
                        options={
                            props.iframeOptions.map((object) => ({
                                ...switchObjectKeyNames(object, {
                                    src: 'value',
                                    title: 'label',
                                }),
                            })) as Option[]
                        }
                        placeholder='Select Iframe...'
                        defaultValue={
                            switchObjectKeyNames(selectedIframeContent, {
                                src: 'value',
                                title: 'label',
                            }) as Option
                        }
                        onSelect={onSelect}
                    />
                )}
            </div>
            <iframe
                className='iframe'
                src={selectedIframeContent.src}
                title={selectedIframeContent.title}
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default IframeContainer
