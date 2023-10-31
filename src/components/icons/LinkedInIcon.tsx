import React from 'react'
import IconProps from './type'

const LinkedInIcon = (props: IconProps) => {
    return (
        <svg
            className={props.className}
            style={props.styles}
            width='65'
            height='65'
            viewBox='0 0 65 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M55.3831 55.3844H45.7521V40.3014C45.7521 36.7047 45.6879 32.0746 40.743 32.0746C35.7269 32.0746 34.9594 35.9934 34.9594 40.0395V55.3834H25.3284V24.3666H34.5741V28.6054H34.7036C35.6289 27.0233 36.9659 25.7218 38.5724 24.8395C40.1788 23.9572 41.9944 23.5271 43.8259 23.5951C53.5873 23.5951 55.3871 30.0159 55.3871 38.3691L55.3831 55.3844ZM14.4615 20.1268C13.3561 20.127 12.2754 19.7994 11.3562 19.1854C10.437 18.5715 9.72056 17.6987 9.29736 16.6775C8.87416 15.6562 8.76325 14.5325 8.97871 13.4482C9.19416 12.364 9.7263 11.368 10.5078 10.5862C11.2893 9.80443 12.2851 9.27193 13.3692 9.05608C14.4533 8.84023 15.577 8.95071 16.5984 9.37356C17.6197 9.7964 18.4927 10.5126 19.107 11.4316C19.7213 12.3507 20.0493 13.4312 20.0495 14.5367C20.0496 15.2706 19.9051 15.9974 19.6244 16.6756C19.3436 17.3538 18.9321 17.97 18.4132 18.4891C17.8943 19.0082 17.2782 19.42 16.6002 19.701C15.9222 19.982 15.1954 20.1267 14.4615 20.1268ZM19.277 55.3844H9.63597V24.3666H19.277V55.3844ZM60.1845 0.00442856H4.79643C3.53928 -0.0097589 2.32786 0.475755 1.42848 1.35428C0.529106 2.23281 0.0153429 3.43247 0 4.68965V60.3094C0.0148178 61.5672 0.528279 62.7677 1.42763 63.6471C2.32697 64.5265 3.53865 65.013 4.79643 64.9996H60.1845C61.4448 65.0154 62.6599 64.5304 63.5628 63.6509C64.4657 62.7715 64.9826 61.5697 65 60.3094V4.68564C64.982 3.42596 64.4648 2.22494 63.5618 1.34643C62.6589 0.467927 61.4442 -0.0161997 60.1845 0.000413892'
                fill='#0A66C2'
            />
        </svg>
    )
}

export default LinkedInIcon
