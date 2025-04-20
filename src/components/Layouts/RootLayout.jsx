import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'

const RootLayout = () => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout
