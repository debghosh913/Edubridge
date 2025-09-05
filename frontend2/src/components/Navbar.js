import { FaHome, FaGlobe, FaUserFriends, FaBell } from "react-icons/fa";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Search from './Search';

const Navbar = () => {
    const { user, setUser, loading } = useContext(AuthContext);

    if (loading) {
        return <nav className="navbar"><p>Loading...</p></nav>;
    }

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="title">EDUBRIDGE</li>

                {!user && (
                    <div className="nav-right">
                        <li><Link to="/" className="nav-link">Register</Link></li>
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                    </div>
                )}

                {user && (
                    <>
                        <div className="nav-icons">
                            <li>
                                <Link to="/home" className="nav-link nav-icon-link">
                                    <FaHome className="nav-icon" size={22} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/feed" className="nav-link nav-icon-link">
                                    <FaGlobe className="nav-icon" size={22} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/friends" className="nav-link nav-icon-link">
                                    <FaUserFriends className="nav-icon" size={22} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/notification" className="nav-link nav-icon-link">
                                    <FaBell className="nav-icon" size={22} />
                                </Link>
                            </li>
                        </div>

                        <div className="nav-right">
                            <li><Search /></li>
                            <li>
                                <button
                                    onClick={() => setUser(null)}
                                    className="nav-link logout-btn"
                                >
                                    Logout
                                </button>
                            </li>
                        </div>
                    </>

                )}

            </ul>
        </nav>
    );
};

export default Navbar;