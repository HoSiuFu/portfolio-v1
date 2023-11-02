import Banner from '@/components/pageElements/Banner'
import React from 'react'
import BannerBackground from 'public/images/fcc26c72d326c15deb2429107d2c3903.png'
import { MaintenanceIcon } from '@/components/icons'
import { getLatestProjects } from '@/actions/outstatic'
import PostCard from '@/components/pageElements/PostCard'

const Home = async () => {
    const latestWorks = await getLatestProjects()

    return (
        <>
            <Banner
                title="Welcome, I'm Danilo!"
                subtitle='Frontend Developer and much more!'
                text={`This is my portfolio to show you what I've done throughout the years.
                    In this portfolio I will display all my works in all different areas that interest me.`}
                backgroundProperties={{
                    backgroundImage: `url(${BannerBackground.src})`,
                    backgroundPositionX: '50%',
                }}
            />
            <div className='outter-latest'>
                <div className='layout'>
                    <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 latest'>
                        <h1 className='h1 latest-title'>Latest Work</h1>
                        <div className='posts'>
                            {latestWorks?.length !== 0 ? (
                                latestWorks.map((work) => (
                                    <PostCard
                                        title={work.title}
                                        postUrl={work.slug}
                                        cover={work.coverImage}
                                        description={work.description}
                                        key={work.slug}
                                    />
                                ))
                            ) : (
                                <div className='no-posts'>
                                    <MaintenanceIcon className='maintenance-icon' />
                                    <div className='text-frame'>
                                        <h2 className='h2 title'>
                                            Whoops! <br />
                                            Seems like there are no posts yet!
                                        </h2>
                                        <h3 className='h3 subtitle'>
                                            Don&#39;t worry this will be
                                            populated soon.
                                        </h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
