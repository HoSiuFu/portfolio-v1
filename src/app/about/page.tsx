import Banner from '@/components/pageElements/Banner'
import React from 'react'

const About = () => {
    return (
        <>
            <Banner
                title={<>About</>}
                subtitle={
                    <>
                        I&apos;m a software developer specialized in Frontend
                        Development, from Portugal.
                    </>
                }
                text={
                    <>
                        I&apos;ve also got some experience on UI/UX Design and
                        3D Modeling on both CAD systems and Blender.
                    </>
                }
                backgroundProperties={{
                    backgroundImage:
                        'url("images/67a445c9342d050c4241ef27494d72b8.png")',
                    backgroundPositionY: '60%',
                    backgroundPositionX: '50%',
                }}
            />
            <div className='outter-about'>
                <div className='layout'>
                    <div className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 about'>
                        <div className='section'>
                            <h1 className='h1 title'>Education and Courses</h1>
                            <ul className='aligned-list'>
                                <li>
                                    <h2 className='h2 subtitle'>
                                        Bachelor&apos;s Degree in Computer
                                        Science from University of Évora, Évora,
                                        Portugal
                                    </h2>
                                    <div className='upper-item-content'>
                                        <h3 className='h3 date'>
                                            From 2017 to 2020
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <h2 className='h2 subtitle'>
                                        Udemy Course: React Front to Back
                                    </h2>
                                    <div className='upper-item-content'>
                                        <h3 className='h3 date'>August 2020</h3>
                                        <a
                                            className='p link'
                                            href='https://www.udemy.com/certificate/UC-c4220489-4db7-4c14-b81e-9fe9f7561a69/'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            Click me to see the Credential
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='section'>
                            <h1 className='h1 title'>My Work Experience</h1>
                            <ul className='aligned-list'>
                                <li>
                                    <h2 className='h2 subtitle'>
                                        Software Engineer at Decsis - Sistemas
                                        de Informação, S.A., Évora, Portugal
                                    </h2>
                                    <div className='upper-item-content spaced'>
                                        <h3 className='h3 date'>
                                            From 06/07/2020 to 26/05/2023
                                        </h3>
                                        <ul className='aligned-list'>
                                            <h2 className='h2 subtitle'>
                                                UI/UX Designer
                                            </h2>
                                            <li className='p text'>
                                                Brought the utilization of Figma
                                                into the design process and
                                                updated the design process;
                                            </li>
                                            <li className='p text'>
                                                Created and aided in the design
                                                of mock-ups and components in
                                                Figma to be implemented for 4+
                                                projects;
                                            </li>
                                            <li className='p text'>
                                                Introduced the utilization of a
                                                tool (Overlay) to export
                                                mock-ups and components into
                                                React and SCSS;
                                            </li>
                                        </ul>
                                        <ul className='aligned-list'>
                                            <h2 className='h2 subtitle'>
                                                Frontend Developer (Main
                                                Activity)
                                            </h2>
                                            <li className='p text'>
                                                Innovated the way that React was
                                                used in the company and
                                                introduced SCSS as a replacement
                                                for CSS;
                                            </li>
                                            <li className='p text'>
                                                Maintained, developed features,
                                                and implemented UX/UI defined in
                                                Figma for 4+ projects using
                                                React;
                                            </li>
                                            <li className='p text'>
                                                Created email templates used in
                                                Django and Django CMS;
                                            </li>
                                            <li className='p text'>
                                                Created a website using Django
                                                CMS and 2+ websites using Odoo.
                                            </li>
                                            <li className='p text'>
                                                Created customized scripts,
                                                styling, and XML views that are
                                                displayed in back office and on
                                                the client side for 3+ projects
                                                made with Odoo;
                                            </li>
                                            <li className='p text'>
                                                Mentored in the development of
                                                3+ projects using React and
                                                React Native;
                                            </li>
                                            <li className='p text'>
                                                Created base configurations of
                                                Webpack, ESLint, and Dockerfiles
                                                for 2+ projects;
                                            </li>
                                        </ul>
                                        <ul className='aligned-list'>
                                            <h2 className='h2 subtitle'>
                                                Backend Developer
                                            </h2>
                                            <li className='p text'>
                                                Developed an auxiliary API with
                                                Node.js for a project;
                                            </li>
                                            <li className='p text'>
                                                Maintained and developed Backend
                                                features (endpoints, data
                                                models, permissions, and
                                                accesses) for 2 projects using
                                                Django and 3+ projects using
                                                Odoo;
                                            </li>
                                            <li className='p text'>
                                                Extended base functionalities
                                                and features of Odoo in 2+
                                                projects;
                                            </li>
                                        </ul>
                                        <ul className='aligned-list'>
                                            <h2 className='h2 subtitle'>
                                                Operations
                                            </h2>
                                            <li className='p text'>
                                                Deployed 20+ Docker containers
                                                in Rancher;
                                            </li>
                                            <li className='p text'>
                                                Created and maintained GitLab
                                                CI/CD pipelines for 7+ projects,
                                                using technologies like React,
                                                Odoo, and more;
                                            </li>
                                            <li className='p text'>
                                                Created a project that can
                                                version control Odoo, meaning
                                                that any version of Odoo can be
                                                targeted for usage, not only the
                                                latest version;
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='section'>
                            <h1 className='h1 title'>Random Facts About Me</h1>
                            <div className='subsection'>
                                <h2 className='h2 subtitle'>
                                    A man of many interests
                                </h2>
                                <p className='p text'>
                                    I&apos;m interested in lots of different
                                    aspects of life, like Woodworking, Software
                                    Development, 3D Design, specifically 3D
                                    Modeling, UI/UX Design, Frontend
                                    Development, and Game Development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
