import React from 'react'
import IconButtonProps from './type'

const IconButton = (props: IconButtonProps) => {
    return props.href ? (
        <a className='icon-button' href={props.href} target={props.target}>
            {props.children}
        </a>
    ) : (
        <button className='icon-button' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default IconButton
