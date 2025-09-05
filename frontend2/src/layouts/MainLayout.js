import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ✅ ADDED: Importing the Footer component we created

const MainLayout = () => {
    return (
        <div className="main-layout">

        <header>
                <Navbar /> {/* ✅ Already present: Navbar stays at the top */}
            </header>

            <main>
                <Outlet /> {/* ✅ Already present: This renders the current route’s page */}
            </main>

            {/* ⬇️ Replaced old <footer> with Footer component */}
            <Footer /> {/* ✅ ADDED: This shows the global footer across all pages */}
        </div>
    );
};

export default MainLayout;
