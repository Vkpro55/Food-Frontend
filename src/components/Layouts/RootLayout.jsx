import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'

const RootLayout = () => {
    return (
        <div>
            <Navbar />

            <div>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default RootLayout
