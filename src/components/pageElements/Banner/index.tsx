import React from 'react'
import BannerProps from './type'

const Banner = (props: BannerProps) => {
    console.log(props.backgroundProperties)
    return (
        <div className='banner' style={props.backgroundProperties}>
            <div className='layout'>
                <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 banner-layout'>
                    {props.title && <h1 className='h1 title'>{props.title}</h1>}
                    {props.subtitle && (
                        <h2 className='h2 subtitle'>{props.subtitle}</h2>
                    )}
                    {props.text && <p className='p text'>{props.text}</p>}
                </div>
            </div>
        </div>
    )
}

export default Banner
