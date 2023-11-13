import { useLayoutEffect, useState } from 'react'

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState([0, 0])

    useLayoutEffect(() => {
        const updateInnerWidth = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateInnerWidth)
        return () => window.removeEventListener('resize', updateInnerWidth)
    }, [])

    return windowSize
}

export default useWindowResize
