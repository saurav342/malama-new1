
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MalamaLogo from './MalamaLogo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="navbar" style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--gray-200)',
            boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>
                    <MalamaLogo />
                    Malama
                </NavLink>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/ride-with-us', label: 'Ride With Us' },
                        { path: '/drive-with-us', label: 'Drive With Us' },
                        { path: '/business', label: 'Business' },
                        { path: '/invest', label: 'Invest With Us' },
                        // { path: '/charge', label: 'Malama Charge' },
                        // { path: '/newsroom', label: 'Newsroom' }
                    ].map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            style={({ isActive }) => ({
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: isActive ? 'var(--white)' : 'var(--gray-600)',
                                background: isActive ? 'var(--primary)' : 'transparent',
                                padding: isActive ? '0.5rem 1rem' : '0',
                                borderRadius: isActive ? '999px' : '0',
                                transition: 'all 0.2s ease',
                                position: 'relative'
                            })}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <a href="#book" className="btn btn-primary" style={{ display: isOpen ? 'none' : 'flex' }}>Ride with us</a>
                    <button
                        className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '0.5rem' }}
                    >
                        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--gray-700)', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--gray-700)', transition: 'all 0.3s ease', opacity: isOpen ? 0 : 1 }}></span>
                        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--gray-700)', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
                    </button>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .navbar-menu { display: none !important; }
          .navbar-menu.active { display: flex !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
