import React from 'react'
import { Link } from 'react-router-dom'

const MainLayout = ({ children }) => {
    return (
        <>
            <Link to="/profile/edit"> user edit profile</Link>
            {children}
            footer
        </>
    )
}

export default MainLayout