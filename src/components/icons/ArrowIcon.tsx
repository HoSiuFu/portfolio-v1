import React from 'react'
import IconProps from './type'

const ArrowIcon = (props: IconProps) => {
    return (
        <svg
            className={props.className}
            style={props.styles}
            xmlns='http://www.w3.org/2000/svg'
            width='75'
            height='75'
            viewBox='0 0 75 75'
            fill='none'
        >
            <path d='M5.15482 2.49077C3.77967 4.8726 4.59575 7.91824 6.97758 9.2934L55.8328 37.5L6.97758 65.7066C4.59575 67.0818 3.77967 70.1274 5.15482 72.5092C6.52998 74.8911 9.57562 75.7071 11.9575 74.332L68.0225 41.9628C69.6651 41.0145 70.563 39.2717 70.5111 37.5C70.563 35.7283 69.6651 33.9855 68.0225 33.0372L11.9575 0.668008C9.57562 -0.707146 6.52998 0.108932 5.15482 2.49077Z' />
        </svg>
    )
}

export default ArrowIcon
