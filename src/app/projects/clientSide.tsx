'use client'

import { Loading, Pagination, Posts, Search } from '@/components/pageElements'
import { OutstaticSchema } from '@/components/pageElements/Posts/type'
import { TagObject } from '@/components/pageElements/Search/type'
import axios from 'axios'
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

    const onClose = (searchString: string, tags: Array<string>) => {
        setLoading(true)
        if (searchString.length !== 0 || tags.length !== 0)
            axios
                .get('api/projects', {
                    params: {
                        searchString,
                        tags,
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setFilteredProjects(response.data)
                    }

                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)

                    setLoading(false)
                })
        else {
            setFilteredProjects(props.allProjects)
            setLoading(false)
        }
    }

    const onPageChange = (page: number) => {
        setLoading(true)
        setPagination({
            ...pagination,
            currentPage: page,
        })
        setLoading(false)
    }

    return (
        <>
            <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                <Search allTags={props.tags} onClose={onClose} />
            </div>
            {loading ? (
                <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                    <Loading screenFit='full-width' />
                </div>
            ) : (
                <Posts posts={currentDisplayedPosts} />
            )}
            <div className='pagination-div grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                <Pagination
                    currentPage={pagination.currentPage}
                    neighboursCount={pagination.neighboursCount}
                    pageSize={PAGE_SIZE}
                    totalCount={filteredProjects.length}
                    onPageChange={onPageChange}
                />
            </div>
        </>
    )
}

export default ClientSideProjects
