import React from 'react'
import PaginationElementProps from './type'

const PaginationElement = (props: PaginationElementProps) => {
    return (
        <button
            onClick={props.onClick}
            value={props.pageValue}
            className={`p pagination-item ${props.isActive ? 'active' : ''}`}
        >
            {props.children}
        </button>
    )
}

export default PaginationElement
