import React from 'react'
import TagProps from './type'
import { TagIcon } from '@/components/icons'

const Tag = (props: TagProps) => {
    return (
        <button
            onClick={props.onClick}
            className={`p tag ${props.isSelected ? 'selected' : ''}`}
            disabled={props.disabled}
        >
            <TagIcon className='tag-icon' />
            {props.children}
        </button>
    )
}

export default Tag
