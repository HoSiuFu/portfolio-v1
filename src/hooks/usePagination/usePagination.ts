import { range } from '@/helpers/array.helper'
import { useMemo } from 'react'

// These are the perment elements First page, Current page, Last Page and 2 dots
const NUMBER_OF_PERMANENT_ITEMS = 5
const DOTS = -1

const usePagination = (
    totalCount: number,
    currentPage: number,
    pageSize = 12,
    neighboursCount = 2
): Array<number> => {
    const paginationRange = useMemo<Array<number>>(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize)

        const numberOfDisplayedPages =
            neighboursCount + NUMBER_OF_PERMANENT_ITEMS

        if (totalPageCount > numberOfDisplayedPages) {
            const leftmostNeighbourIndex = Math.max(
                currentPage - neighboursCount,
                1
            )
            const rightmostNeighbourIndex = Math.min(
                currentPage + neighboursCount,
                totalPageCount
            )

            const addDotsLeft = leftmostNeighbourIndex > 2
            const addDotsRight = rightmostNeighbourIndex < totalPageCount - 1

            if (!addDotsLeft && addDotsRight) {
                const leftRange = range(1, rightmostNeighbourIndex)

                return [...leftRange, DOTS, totalPageCount]
            }

            if (addDotsLeft && !addDotsRight) {
                const rightRange = range(leftmostNeighbourIndex, totalPageCount)

                console.log(rightRange, totalPageCount)

                return [1, DOTS, ...rightRange]
            }

            if (addDotsLeft && addDotsRight) {
                const middleRange = range(
                    leftmostNeighbourIndex,
                    rightmostNeighbourIndex
                )
                return [1, DOTS, ...middleRange, DOTS, totalPageCount]
            }
        }

        return range(1, totalPageCount)
    }, [totalCount, pageSize, neighboursCount, currentPage])

    return paginationRange
}

export default usePagination
