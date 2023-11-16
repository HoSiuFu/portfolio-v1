'use client'

import React, { useEffect, useState } from 'react'
import DropdownProps, { Option } from './type'
import { ArrowIcon } from '@/components/icons'
import useBreakpoints from '@/hooks/useBreakpoints/useBreakpoints'

const Dropdown = (props: DropdownProps) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const [activeOption, setActiveOption] = useState<Option>()
    const activeLayout = useBreakpoints()

    useEffect(() => {
        if (props.defaultValue) setActiveOption(props.defaultValue)
    }, [props.defaultValue])

    const onClickDropdown = () => {
        setExpanded(!expanded)

        if (expanded && activeLayout !== 'desktop')
            document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'inherit'
    }

    const onClickOption = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newActiveOption = props.options.find(
            (option) => option.value === event.currentTarget.value
        )
        console.log(event.currentTarget.value)
        if (newActiveOption) {
            setActiveOption(newActiveOption)
            props.onSelect(event.currentTarget.value)
        }

        setExpanded(false)
        document.body.style.overflow = 'inherit'
    }

    return (
        <div className='dropdown-container'>
            <button
                onClick={onClickDropdown}
                className={`p dropdown-button ${expanded ? 'expanded' : ''}`}
            >
                {activeOption && activeOption.label
                    ? activeOption.label
                    : props.placeholder}
                <ArrowIcon
                    className={`arrow-icon ${expanded ? 'rotate-upper' : ''}`}
                />
            </button>
            <div className={`dropdown-options ${expanded ? 'expanded' : ''}`}>
                {activeLayout === 'desktop' ? (
                    props.options.map((option) => (
                        <button
                            onClick={onClickOption}
                            className='dropdown-option'
                            value={option.value}
                            key={option.value}
                        >
                            {option.label}
                        </button>
                    ))
                ) : (
                    <div className='modal-outer-container'>
                        <div className='modal-content'>
                            <h3 className='h3 title'>Select an option</h3>
                            {props.options.map((option) => (
                                <button
                                    onClick={onClickOption}
                                    className='dropdown-option'
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown
