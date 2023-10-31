import type { Metadata } from 'next'
import React from 'react'
import { Kanit } from 'next/font/google'
import '@/styles/global.scss'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer'

const kanit = Kanit({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
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
