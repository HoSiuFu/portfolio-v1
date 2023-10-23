import React from 'react'
import ButtonProps from './type'

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={`btn btn-${props.size} btn-${props.type}`}
        >
            {props.leftIcon && (
                <span className={`icon-${props.size} icon-${props.type}`}>
                    {props.leftIcon}
                </span>
            )}
            {props.children}
            {props.rightIcon && (
                <span className={`icon-${props.size} icon-${props.type}`}>
                    {props.rightIcon}
                </span>
            )}
        </button>
    )
}

export default Button
