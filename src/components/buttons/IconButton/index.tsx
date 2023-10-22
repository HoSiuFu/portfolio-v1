import React from 'react'
import IconButtonProps from './type'

const IconButton = (props: IconButtonProps) => {
    return props.url ? (
        <a className='icon-button' href={props.url} target={props.target}>
            {props.children}
        </a>
    ) : (
        <button className='icon-button' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default IconButton
