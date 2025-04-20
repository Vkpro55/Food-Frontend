import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div className='container user-section'>
            <Outlet />
        </div>
    )
}

export default UserLayout

