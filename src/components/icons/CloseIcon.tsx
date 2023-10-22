import React from 'react'
import IconProps from './type'

const CloseIcon = (props: IconProps) => {
    return (
        <svg
            className={props.className}
            style={props.styles}
            width='76'
            height='75'
            viewBox='0 0 76 75'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1.56849 63.4861C-0.213266 65.3054 -0.0820655 68.1321 1.86153 69.7998L6.5538 73.826C8.4974 75.4938 11.5174 75.371 13.2992 73.5518L37.8135 48.5221L62.3278 73.5518C64.1096 75.371 67.1296 75.4938 69.0732 73.826L73.7654 69.7998C75.709 68.1321 75.8402 65.3054 74.0585 63.4861L48.608 37.5007L74.0584 11.5153C75.8402 9.69611 75.709 6.86939 73.7654 5.20166L69.0731 1.17543C67.1295 -0.492298 64.1095 -0.369496 62.3277 1.44971L37.8135 26.4793L13.2992 1.44971C11.5175 -0.369496 8.49746 -0.492298 6.55386 1.17543L1.8616 5.20166C-0.0820044 6.86939 -0.213205 9.69611 1.56855 11.5153L27.019 37.5007L1.56849 63.4861Z'
                fill='#161823'
            />
        </svg>
    )
}

export default CloseIcon
