import React from 'react'
import IconProps from './type'

const HamburgerIcon = (props: IconProps) => {
    return (
        <svg
            className={props.className}
            style={props.styles}
            width='75'
            height='75'
            viewBox='0 0 75 75'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M0 4.50037C0 2.01509 2.01472 0.000366211 4.5 0.000366211H70.5C72.9853 0.000366211 75 2.01509 75 4.50037V10.5004C75 12.9856 72.9853 15.0004 70.5 15.0004H4.5C2.01472 15.0004 0 12.9856 0 10.5004V4.50037Z' />
            <path d='M0 34.5004C0 32.0151 2.01472 30.0004 4.5 30.0004H70.5C72.9853 30.0004 75 32.0151 75 34.5004V40.5004C75 42.9856 72.9853 45.0004 70.5 45.0004H4.5C2.01472 45.0004 0 42.9856 0 40.5004V34.5004Z' />
            <path d='M4.5 60.0004C2.01472 60.0004 0 62.0151 0 64.5004V70.5004C0 72.9856 2.01472 75.0004 4.5 75.0004H70.5C72.9853 75.0004 75 72.9856 75 70.5004V64.5004C75 62.0151 72.9853 60.0004 70.5 60.0004H4.5Z' />
        </svg>
    )
}

export default HamburgerIcon
