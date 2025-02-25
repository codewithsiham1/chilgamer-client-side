
// import React, { useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Authprovider/Authprovider'; // আপনার AuthContext এর পাথ
// import image from "../../assets/istockphoto-842727160-612x612.jpg"; // আপনার ইমেজ এর পাথ
// import "./Navbar.css";

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logOut()
//             .then(() => {
//                 navigate('/');
//                 localStorage.removeItem('userEmail'); // লগআউট করার সময় লোকাল স্টোরেজ থেকে ইমেইল সরিয়ে দিন
//             })
//             .catch(error => console.error('Logout error:', error));
//     };

//     return (
//         <nav className="navbar">
//             <div className="logo">
//                 <img className="logo-img" src={image} alt="Logo" />
//                 <span className="logo-text">Chill Gamer</span>
//             </div>
//             <ul className="nav-links">
//                 <li><NavLink to="/">Home</NavLink></li>
//                 <li><NavLink to="/allreview">All Reviews</NavLink></li>
//                 {user && (
//                     <>
//                         <li><NavLink to="/addReview">Add Review</NavLink></li>
//                         <li><NavLink to="/myreview">My Reviews</NavLink></li>
//                         <li><NavLink to="/gamewatchlist">Game WatchList</NavLink></li>
//                     </>
//                 )}
//             </ul>
//             <div className="auth-links">
//                 {user ? (
//                     <div className="user-profile">
//                         <img src={user.photoURL || image} alt="User" className="user-avatar" title={user.displayName} />
//                         <button onClick={handleLogout} className="logout-btn">Log Out</button>
//                     </div>
//                 ) : (
//                     <>
//                         <NavLink to="/login">Login</NavLink>
//                         <NavLink to="/register">Register</NavLink>
//                     </>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import image from "../../assets/istockphoto-842727160-612x612.jpg";
import "./Navbar.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/');
                localStorage.removeItem('userEmail');
            })
            .catch(error => console.error('Logout error:', error));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={image} alt="Logo" />
                <span className="logo-text">Chill Gamer</span>
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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