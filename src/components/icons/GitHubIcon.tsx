import React from 'react'
import IconProps from './type'

const GitHubIcon = (props: IconProps) => {
    return (
        <svg
            className={props.className}
            style={props.styles}
            width='96'
            height='96'
            viewBox='0 0 96 96'
            fill='#24292F'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M48.0397 0C21.475 0 0 22 0 49.217C0 70.973 13.7598 89.389 32.8482 95.907C35.2348 96.397 36.1089 94.848 36.1089 93.545C36.1089 92.404 36.0303 88.493 36.0303 84.418C22.6668 87.352 19.884 78.551 19.884 78.551C17.7364 72.847 14.5543 71.381 14.5543 71.381C10.1804 68.366 14.8729 68.366 14.8729 68.366C19.7247 68.692 22.2705 73.418 22.2705 73.418C26.5647 80.914 33.4844 78.796 36.2682 77.492C36.6655 74.314 37.9389 72.114 39.291 70.892C28.6327 69.751 17.4187 65.514 17.4187 46.609C17.4187 41.231 19.3264 36.831 22.3492 33.409C21.8723 32.187 20.2016 27.134 22.8271 20.371C22.8271 20.371 26.8833 19.067 36.0293 25.423C39.945 24.3457 43.9832 23.7976 48.0397 23.793C52.096 23.793 56.2309 24.364 60.0492 25.423C69.1961 19.067 73.2524 20.371 73.2524 20.371C75.8779 27.134 74.2062 32.187 73.7293 33.409C76.8317 36.831 78.6607 41.231 78.6607 46.609C78.6607 65.514 67.4468 69.669 56.7088 70.892C58.4591 72.44 59.9695 75.373 59.9695 80.018C59.9695 86.618 59.8908 91.915 59.8908 93.544C59.8908 94.848 60.766 96.397 63.1516 95.908C82.24 89.388 95.9998 70.973 95.9998 49.217C96.0785 22 74.5248 0 48.0397 0Z'
            />
        </svg>
    )
}

export default GitHubIcon