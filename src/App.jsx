
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import RideWithUs from './pages/RideWithUs';
import DriveWithUs from './pages/DriveWithUs';
import Business from './pages/Business';
import Invest from './pages/Invest';
import Charge from './pages/Charge';
import Newsroom from './pages/Newsroom';

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main style={{ minHeight: '100vh', paddingTop: '72px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ride-with-us" element={<RideWithUs />} />
                    <Route path="/drive-with-us" element={<DriveWithUs />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/invest" element={<Invest />} />
                    <Route path="/charge" element={<Charge />} />
                    <Route path="/newsroom" element={<Newsroom />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
