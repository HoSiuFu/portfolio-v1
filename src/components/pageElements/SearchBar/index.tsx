import React, { useRef, useState } from 'react'
// import SearchBarProps from './type'
import { CloseIcon, SearchIcon } from '@/components/icons'
import { IconButton } from '@/components/buttons'

const SearchBar = (/*props: SearchBarProps*/) => {
    const input = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState<string>('')
    const [showCloseIcon, setShowCloseIcon] = useState<boolean>(false)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { value } = event.target

        setInputValue(value)

        if (value.length === 0) setShowCloseIcon(false)
        else setShowCloseIcon(true)
    }

    const onClickClearSearch = () => {
        setInputValue('')
        setShowCloseIcon(false)
        input?.current?.focus()
    }

    return (
        <div className='search-tags-outer-container'>
            <div className='layout fixed'>
                <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 search-bar'>
                    <div className='right-side'>
                        <label
                            className='search-icon-label'
                            htmlFor='search-input'
                        >
                            <SearchIcon className='search-icon' />
                        </label>
                        <input
                            ref={input}
                            id='search-input'
                            className='p search-input'
                            onChange={onChange}
                            value={inputValue}
                            placeholder='Type here to search terms...'
                        />
                    </div>
                    {showCloseIcon && (
                        <div className='icon-absolute'>
                            <IconButton onClick={onClickClearSearch}>
                                <CloseIcon className='close-icon' />
                            </IconButton>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchBar
