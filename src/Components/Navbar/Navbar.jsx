// import React from 'react';
// import image from "../../assets/istockphoto-842727160-612x612.jpg"
// import { NavLink } from 'react-router-dom';
// import "./Navbar.css"

// const Navbar = () => {
//     return (
//         <div>
//             <div className='navbar'>
//                 <div className='logo'>
//                     <img className='logo-img' src={image} alt="" />
//                     <span className='logo-text'>Chil Gamer</span> 
//                 </div>
//                 <ul className='nav-links'>
//                     <li>
//                         <NavLink className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/">Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/allreview">All Reviews</NavLink>
//                     </li>
//                     <li>
//                         <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/addreview">Add Review</NavLink>
//                     </li>
//                     <li>
//                         <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/myreview">My Reviews</NavLink>
//                     </li>
//                     <li>
//                         <NavLink  className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/gamewatchlist">Game WatchList</NavLink>
//                     </li>
//                 </ul>
//                 <div className="logins">
//                     <NavLink to="/login">Login</NavLink> 
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import image from "../../assets/istockphoto-842727160-612x612.jpg";
// import { NavLink } from 'react-router-dom';
// import "./Navbar.css";

// const Navbar = () => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/users');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch user data');
//                 }
//                 const data = await response.json();
//                 if (data && data.length > 0) {
//                     setUserData(data[0]); // প্রথম ব্যবহারকারীর ডেটা সেট করছি
//                 }
//                 setLoading(false);
//             } catch (err) {
//                 setError(err);
//                 setLoading(false);
//             }
//         };

//         fetchUserData();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div>
//             <div className='navbar'>
//                 <div className='logo'>
//                     <img className='logo-img' src={image} alt="" />
//                     <span className='logo-text'>Chil Gamer</span>
//                 </div>
//                 <ul className='nav-links'>
//                     <li>
//                         <NavLink className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/">Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/allreview">All Reviews</NavLink>
//                     </li>
//                     <li>
//                         <NavLink className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/addreview">Add Review</NavLink>
//                     </li>
//                     <li>
//                         <NavLink className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/myreview">My Reviews</NavLink>
//                     </li>
//                     <li>
//                         <NavLink className={({ isActive }) => isActive ? "text-white bg-red-500 p-2 rounded" : "text-black p-2"} to="/gamewatchlist">Game WatchList</NavLink>
//                     </li>
//                 </ul>
//                 <div className="logins">
//                     {userData ? (
//                         <div className="flex items-center">
//                             <img
//                                 className="w-10 h-10 rounded-full mr-2"
//                                 src={userData.photo || image}
//                                 alt="User Avatar"
//                             />
//                             <span>{userData.name}</span>
//                         </div>
//                     ) : (
//                         <NavLink to="/login">Login</NavLink>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider'; // আপনার AuthContext এর পাথ
import image from "../../assets/istockphoto-842727160-612x612.jpg"; // আপনার ইমেজ এর পাথ
import "./Navbar.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/');
                localStorage.removeItem('userEmail'); // লগআউট করার সময় লোকাল স্টোরেজ থেকে ইমেইল সরিয়ে দিন
            })
            .catch(error => console.error('Logout error:', error));
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={image} alt="Logo" />
                <span className="logo-text">Chill Gamer</span>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/allreview">All Reviews</NavLink></li>
                {user && (
                    <>
                        <li><NavLink to="/addReview">Add Review</NavLink></li>
                        <li><NavLink to="/myreview">My Reviews</NavLink></li>
                        <li><NavLink to="/gamewatchlist">Game WatchList</NavLink></li>
                    </>
                )}
            </ul>
            <div className="auth-links">
                {user ? (
                    <div className="user-profile">
                        <img src={user.photoURL || image} alt="User" className="user-avatar" title={user.displayName} />
                        <button onClick={handleLogout} className="logout-btn">Log Out</button>
                    </div>
                ) : (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;