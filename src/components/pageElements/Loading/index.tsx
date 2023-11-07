'use client'

import React from 'react'
import Lottie from 'lottie-react'
import animationData from './Loading.json'
import LoadingProps from './type'

const Loading = (props: LoadingProps) => {
    return (
        <div className={`loading-${props.screenFit}`}>
            <Lottie
                autoplay
                animationData={animationData}
                loop
                height={400}
                width={400}
            />
        </div>
    )
}

export default Loading
