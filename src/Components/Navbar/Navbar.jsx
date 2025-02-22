import React from 'react';
import image from "../../assets/istockphoto-842727160-612x612.jpg"
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <img className='logo-img' src={image} alt="" />
                    <span className='logo-text'>Chil Gamer</span> 
                </div>
                <ul className='nav-links'>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/allreview">All Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/addreview">Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/myreview">My Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/gamewatchlist">Game WatchList</NavLink>
                    </li>
                </ul>
                <div className="logins">
                    <NavLink to="/login">Login</NavLink> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;