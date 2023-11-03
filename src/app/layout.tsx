import type { Metadata } from 'next'
import React from 'react'
import localFont from 'next/font/local'
import '@/styles/global.scss'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer'

const kanit = localFont({
    src: [
        {
            path: '../../public/fonts/Kanit-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Kanit-BlackItalic.ttf',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-ExtraBoldItalic.ttf',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-ExtraLightItalic.ttf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Kanit-ThinItalic.ttf',
            weight: '100',
            style: 'italic',
        },
    ],
})

export const metadata: Metadata = {
    title: "Danilo's Portfolio",
    description: "Welcome to Danilo's portfolio",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={kanit.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
