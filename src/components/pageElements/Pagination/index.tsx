import React from 'react'
import PaginationProps from './type'
import usePagination from '@/hooks/usePagination/usePagination'
import PaginationElement from './PaginationElement'
import { IconButton } from '@/components/buttons'
import { ArrowIcon } from '@/components/icons'

const Pagination = (props: PaginationProps) => {
    const pagination = usePagination(
        props.totalCount,
        props.currentPage,
        props.pageSize,
        props.neighboursCount
    )

    const onClickNext = () => {
        props.onPageChange(props.currentPage + 1)
    }

    const onClickPrevious = () => {
        props.onPageChange(props.currentPage - 1)
    }

    const onClickPageElement = (
        event?: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (
            event &&
            event.currentTarget &&
            parseInt(event.currentTarget.value) !== props.currentPage
        )
            props.onPageChange(parseInt(event.currentTarget.value))
    }

    if (props.currentPage < 1 || pagination.length < 2) return <></>

    return (
        <div className='pagination'>
            <IconButton
                disabled={props.currentPage === 1}
                onClick={onClickPrevious}
            >
                <ArrowIcon className='arrow left' />
            </IconButton>
            {pagination.map((page, index) =>
                page !== -1 ? (
                    <PaginationElement
                        isActive={page === props.currentPage}
                        onClick={onClickPageElement}
                        pageValue={page}
                        key={page}
                    >
                        {page}
                    </PaginationElement>
                ) : (
                    <p key={`dots-${page + index}`} className='p dots'>
                        ...
                    </p>
                )
            )}
            <IconButton
                disabled={
                    props.currentPage ===
                    Math.ceil(props.totalCount / props.pageSize)
                }
                onClick={onClickNext}
            >
                <ArrowIcon className='arrow' />
            </IconButton>
        </div>
    )
}

export default Pagination
