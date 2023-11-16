'use client'

import React, { useEffect, useRef, useState } from 'react'
import DropdownProps from './type'
import { ArrowIcon } from '@/components/icons'
import useBreakpoints from '@/hooks/useBreakpoints/useBreakpoints'

const Dropdown = (props: DropdownProps) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const [activeOption, setActiveOption] = useState<string>('')
    const [optionsHeight, setOptionsHeight] = useState<number>(0)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const activeLayout = useBreakpoints()

    useEffect(() => {
        if (buttonRef.current) {
            setOptionsHeight(
                buttonRef.current.clientHeight * props.options.length
            )
        }
        console.log(buttonRef.current?.clientHeight)
    }, [props.options])

    useEffect(() => {
        if (props.defaultValue) setActiveOption(props.defaultValue)
    }, [props.defaultValue])

    const onClickDropdown = () => {
        setExpanded(!expanded)
    }

    const onClickOption = (event: React.MouseEvent<HTMLButtonElement>) => {
        setActiveOption(event.currentTarget.value)
        setExpanded(false)
    }

    return (
        <div className='dropdown-container'>
            <button
                ref={buttonRef}
                onClick={onClickDropdown}
                className='p dropdown-button'
            >
                {activeOption ? activeOption : props.placeholder}
                <ArrowIcon
                    className={`arrow-icon ${expanded ? 'rotate-upper' : ''}`}
                />
            </button>
            <div
                className={`dropdown-options ${expanded ? 'expanded' : ''}`}
                style={
                    activeLayout === 'desktop' && expanded
                        ? { height: `${optionsHeight}px` }
                        : {}
                }
            >
                {props.options.map((option) => (
                    <button
                        onClick={onClickOption}
                        className='dropdown-option'
                        value={option.label}
                        key={option.value}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Dropdown
