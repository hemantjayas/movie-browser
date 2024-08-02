import React from 'react'
import "../styles/header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();


    return (
        <div className='header'>
            <h1 onClick={() => navigate("/")}>Movie Browser</h1>
            <div className='searchInput' ><input type="text" placeholder='Search Popular Movies' /></div>
            <div className='navigations'>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/favourites")}>Favourites</li>
            </div>
        </div>
    )
}

export default Header