import React from 'react'
import IframeContainerProps from './type'

const IframeContainer = (props: IframeContainerProps) => {
    return (
        <iframe
            className={`grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 iframe-container ${
                props.fullWidth ? 'full-width' : ''
            }`}
            src={props.src}
            title={props.title}
            allowFullScreen
        ></iframe>
    )
}

export default IframeContainer
