'use client'

import React, { useRef, useState } from 'react'
import SearchProps from './type'
import SearchBar from './SearchBar'
import { Button, IconButton, Tag } from '@/components/buttons'
import { CloseIcon } from '@/components/icons'

const Search = (props: SearchProps) => {
    const searchValue = useRef<string>('')
    const [interacted, setInteracted] = useState<boolean>(false)
    const [selectedTags, setSelectedTags] = useState<Array<string>>([])

    const onClose = () => {
        props.onClose(searchValue.current, selectedTags)
        setInteracted(false)
    }

    const onClickSearchInput = () => {
        setInteracted(true)
    }

    const onChangeSearch = (event?: React.ChangeEvent<HTMLInputElement>) => {
        if (event?.target) searchValue.current = event.target.value
    }

    const onClearSearch = () => {
        searchValue.current = ''
    }

    const onClickTag = (event?: React.MouseEvent<HTMLElement>) => {
        if (event?.currentTarget) {
            if (selectedTags.includes(event.currentTarget.id)) {
                setSelectedTags(
                    selectedTags.filter(
                        (value) => value !== event.currentTarget.id
                    )
                )
            } else {
                setSelectedTags([...selectedTags, event.currentTarget.id])
            }
        }
    }

    const onClearTags = (event?: React.MouseEvent<HTMLElement>) => {
        event?.preventDefault()
        setSelectedTags([])
        props.onClose(searchValue.current, [])
    }

    return (
        <div className={`search-tag-func ${interacted ? 'interacted' : ''}`}>
            <div className='layout upper-part'>
                {interacted && (
                    <div
                        id='close-button'
                        className='grid-desktop-start-12 grid-desktop-end-13 grid-tablet-start-6 grid-tablet-end-7 grid-mobile-start-4 grid-mobile-end-5'
                    >
                        <IconButton onClick={onClose}>
                            <CloseIcon className='close-icon' />
                        </IconButton>
                    </div>
                )}
                <SearchBar
                    id='search'
                    gridColumnDesktop={{ start: 1, end: 13 }}
                    gridColumnTablet={{ start: 1, end: 7 }}
                    gridColumnMobile={{ start: 1, end: 5 }}
                    onChange={onChangeSearch}
                    onClearValue={onClearSearch}
                    onClick={onClickSearchInput}
                />
                {selectedTags.length !== 0 && (
                    <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-start-5 clear-tags-section'>
                        <p className='p text-tags-applied'>
                            {selectedTags.length} Tags Applied
                        </p>
                        <Button
                            type='tertiary'
                            size='large'
                            onClick={onClearTags}
                        >
                            Clear Tags
                        </Button>
                    </div>
                )}
            </div>
            {interacted && (
                <div className='layout'>
                    <h2 className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 h2 select-tags-title'>
                        Select Tags
                    </h2>
                    <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 tags-div'>
                        {props.allTags.map((tag) => (
                            <Tag
                                isSelected={selectedTags.includes(tag.value)}
                                id={tag.value}
                                onClick={onClickTag}
                                key={tag.value}
                            >
                                {tag.label}
                            </Tag>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search
