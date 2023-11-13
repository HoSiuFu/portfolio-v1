'use client'

import { Loading, Pagination, Posts, Search } from '@/components/pageElements'
import { OutstaticSchema } from '@/components/pageElements/Posts/type'
import { TagObject } from '@/components/pageElements/Search/type'
import React, { useEffect, useMemo, useState } from 'react'

type Props = {
    allProjects: Array<OutstaticSchema>
    tags: Array<TagObject>
}

const PAGE_SIZE = 12

const ClientSideProjects = (props: Props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [pagination, setPagination] = useState({
        neighboursCount: 2,
        currentPage: 1,
    })
    const [filteredProjects, setFilteredProjects] = useState<
        Array<OutstaticSchema>
    >([])

    const currentDisplayedPosts = useMemo(() => {
        const firstPageIndex = (pagination.currentPage - 1) * PAGE_SIZE
        const lastPageIndex = firstPageIndex + PAGE_SIZE
        const pageContent = filteredProjects.slice(
            firstPageIndex,
            lastPageIndex
        )
        setLoading(false)
        return pageContent
    }, [pagination.currentPage, filteredProjects])

    useEffect(() => {
        setLoading(true)
        setFilteredProjects(props.allProjects)
    }, [props.allProjects])

    const onClose = (searchTerm: string, tags: Array<string>) => {
        setLoading(true)
        console.log(searchTerm, tags)
        setLoading(false)
    }

    const onPageChange = (page: number) => {
        setLoading(true)
        setPagination({
            ...pagination,
            currentPage: page,
        })
        setLoading(false)
    }

    if (loading)
        return (
            <div className='loading-div grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                <Loading screenFit='full-width' />
            </div>
        )

    return (
        <>
            <div className='loading-div grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                <Search allTags={props.tags} onClose={onClose} />
            </div>
            <Posts posts={currentDisplayedPosts} />
            <Pagination
                currentPage={pagination.currentPage}
                neighboursCount={pagination.neighboursCount}
                pageSize={PAGE_SIZE}
                totalCount={props.allProjects.length}
                onPageChange={onPageChange}
            />
        </>
    )
}

export default ClientSideProjects
