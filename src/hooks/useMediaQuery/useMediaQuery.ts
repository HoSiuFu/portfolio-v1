import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    const checkMedia = (event: MediaQueryListEvent) => {
        setMatches(event.matches)
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        setMatches(mediaQuery.matches)

        mediaQuery.addEventListener('change', checkMedia)
        return () => mediaQuery.removeEventListener('change', checkMedia)
    }, [query])

    return matches
}

export default useMediaQuery
