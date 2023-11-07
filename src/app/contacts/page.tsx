import React from 'react'

const Contacts = () => {
    return (
        <div className='contacts-layout'>
            <div className='layout'>
                <h1 className='h1 title grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5'>
                    Contacts
                </h1>
                <ul className='grid-desktop-start-1 grid-desktop-end-13 grid-tablet-start-1 grid-tablet-end-7 grid-mobile-start-1 grid-mobile-end-5 aligned-list'>
                    <li>
                        Email:{' '}
                        <a
                            className='p link'
                            href='mailto:danilo.mandrade@protonmail.com'
                        >
                            danilo.mandrade@protonmail.com
                        </a>
                    </li>
                    <li>
                        LinkedIn:{' '}
                        <a
                            className='p link'
                            href='https://www.linkedin.com/in/danilo-m-andrade'
                            target='_blank'
                            rel='noreferrer'
                        >
                            https://www.linkedin.com/in/danilo-m-andrade
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts
