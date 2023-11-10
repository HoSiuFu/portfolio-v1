import { GridColumnProps } from '@/components/pageElements/PostCard/type'
import { UseBreakpointReturn } from '@/hooks/useBreakpoints/type'

export const returnStartandEndPosition = (
    currentItem: number,
    viewType: UseBreakpointReturn,
    windowWidth?: number
): GridColumnProps => {
    switch (viewType) {
        case 'mobile':
            return {
                start: 1,
                end: 5,
            }
        case 'tablet':
            if (windowWidth && windowWidth <= 725) {
                if ((currentItem + 1) % 2 == 0) return { start: 4, end: 7 }
                return { start: 1, end: 4 }
            }

            if ((currentItem + 1) % 3 == 0) return { start: 5, end: 7 }
            if ((currentItem + 1) % 2 == 0) return { start: 3, end: 5 }
            return { start: 1, end: 3 }
        case 'desktop':
            if ((currentItem + 1) % 4 == 0) return { start: 10, end: 13 }
            if ((currentItem + 1) % 3 == 0) return { start: 7, end: 10 }
            if ((currentItem + 1) % 2 == 0) return { start: 4, end: 7 }
            return { start: 1, end: 4 }
        default:
            return {
                start: 0,
                end: 0,
            }
    }
}
