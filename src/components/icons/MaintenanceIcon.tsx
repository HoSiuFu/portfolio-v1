import React from 'react'
import IconProps from './type'

const MaintenanceIcon = (props: IconProps) => {
    return (
        <svg
            className={props.className}
            style={props.styles}
            xmlns='http://www.w3.org/2000/svg'
            width='100'
            height='100'
            viewBox='0 0 100 100'
            fill='none'
        >
            <circle cx='50' cy='50' r='50' fill='#808080' />
            <g filter='url(#filter0_d_171_1416)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M35.137 20.9948C37.6986 23.5565 38.5132 27.215 37.5963 30.5252L53.8909 46.8198L70.1855 63.1144C73.4957 62.1975 77.1542 63.0121 79.7158 65.5737C82.2775 68.1354 83.0921 71.7939 82.1751 75.1041L76.7291 69.6581L69.7333 69.7333L69.6581 76.7292L75.1041 82.1752C71.7939 83.0921 68.1353 82.2775 65.5737 79.7159C63.0121 77.1542 62.1975 73.4957 63.1144 70.1855L46.8198 53.8909L30.5252 37.5963C27.215 38.5132 23.5565 37.6986 20.9948 35.137C18.4332 32.5753 17.6186 28.9168 18.5355 25.6066L23.9815 31.0526L30.9774 30.9774L31.0526 23.9815L25.6066 18.5355C28.9168 17.6186 32.5753 18.4332 35.137 20.9948Z'
                    fill='white'
                />
            </g>
            <g filter='url(#filter1_d_171_1416)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M76.2706 22.2691L79.8062 25.8046L75.9169 33.229L72.7351 32.8757L44.4508 61.1599C46.4035 63.1125 46.4035 66.2784 44.4508 68.231L33.8442 57.6244C35.7969 55.6718 38.9627 55.6718 40.9153 57.6244L69.1996 29.3401L68.846 26.1581L76.2706 22.2691ZM33.8442 60.4528L32.43 59.0386L21.1163 70.3523L22.5305 71.7665L33.8442 60.4528ZM40.2082 66.8168L35.2584 61.867L23.9447 73.1807L28.8945 78.1305L40.2082 66.8168ZM43.0366 69.6452L41.6224 68.231L30.3087 79.5447L31.7229 80.9589L43.0366 69.6452ZM19.7021 71.7665L30.3087 82.3731C28.3561 84.3257 25.1903 84.3258 23.2376 82.3731L19.7021 78.8376C17.7495 76.885 17.7495 73.7191 19.7021 71.7665Z'
                    fill='white'
                />
            </g>
            <defs>
                <filter
                    id='filter0_d_171_1416'
                    x='10.1716'
                    y='10.1717'
                    width='80.3674'
                    height='80.3674'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation='4' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_171_1416'
                    />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_171_1416'
                        result='shape'
                    />
                </filter>
                <filter
                    id='filter1_d_171_1416'
                    x='10.2375'
                    y='14.269'
                    width='77.5686'
                    height='77.5685'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation='4' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_171_1416'
                    />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_171_1416'
                        result='shape'
                    />
                </filter>
            </defs>
        </svg>
    )
}

export default MaintenanceIcon
