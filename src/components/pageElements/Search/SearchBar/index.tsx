import React, { useRef, useState } from 'react'
import SearchBarProps from './type'
import { CloseIcon, SearchIcon } from '@/components/icons'
import { IconButton } from '@/components/buttons'

const SearchBar = (props: SearchBarProps) => {
    const input = useRef<HTMLInputElement>(null)
    const [showCloseIcon, setShowCloseIcon] = useState<boolean>(false)

    const onChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
        event?.preventDefault()
        props.onChange(event)

        if (event?.target?.value.length === 0) setShowCloseIcon(false)
        else setShowCloseIcon(true)
    }

    const onClickClearSearch = () => {
        setShowCloseIcon(false)

        if (input && input.current) {
            input.current.value = ''
            input.current.focus()
        }

        props.onClearValue()
    }

    return (
        <div
            className={`grid-desktop-start-${
                props.gridColumnDesktop.start
            } grid-desktop-end-${
                props.gridColumnDesktop.end
            } grid-tablet-start-${
                props.gridColumnTablet.start
            } grid-tablet-end-${props.gridColumnTablet.end} grid-mobile-start-${
                props.gridColumnMobile.start
            } grid-mobile-end-${props.gridColumnMobile.end} search-bar ${
                props.fullWidth ? 'full-width' : ''
            }`}
        >
            <div className='right-side'>
                <label className='search-icon-label' htmlFor={props.id}>
                    <SearchIcon className='search-icon' />
                </label>
                <input
                    ref={input}
                    id={props.id}
                    className='p search-input'
                    onChange={onChange}
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
    )
}

export default SearchBar
