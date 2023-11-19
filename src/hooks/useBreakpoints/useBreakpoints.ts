import useMediaQuery from '../useMediaQuery/useMediaQuery'
import { UseBreakpointReturn } from './type'

const useBreakpoints = (): UseBreakpointReturn => {
    let activeBreakpoint: UseBreakpointReturn = 'desktop'

    if (useMediaQuery('(max-width: 26.25rem)')) activeBreakpoint = 'mobile'
    if (useMediaQuery('(min-width: 26.25rem) and (max-width: 60rem)'))
        activeBreakpoint = 'tablet'
    if (useMediaQuery('(min-width: 60rem)')) activeBreakpoint = 'desktop'

    return activeBreakpoint
}

export default useBreakpoints
