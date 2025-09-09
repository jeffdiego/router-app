import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main className='container d-flex justify-content-center align-items-center'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
