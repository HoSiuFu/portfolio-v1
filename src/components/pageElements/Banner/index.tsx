import React from 'react'
import BannerProps from './type'

const Banner = (props: BannerProps) => {
    return (
        <div className='banner'>
            {props.title && <h1 className='h1 title'>{props.title}</h1>}
            {props.subtitle && (
                <h2 className='h2 subtitle'>{props.subtitle}</h2>
            )}
            {props.text && <p className='p text'>{props.text}</p>}
        </div>
    )
}

export default Banner
