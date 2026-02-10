
import React from 'react';
import { Link } from 'react-router-dom';
import MalamaLogo from './MalamaLogo';

const Footer = () => {
    return (
        <footer className="section" style={{ background: 'var(--gray-900)', color: 'var(--white)', paddingBottom: '2rem' }}>
            <div className="container">
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                            <MalamaLogo color="#16a34a" />
                            Malama
                        </Link>
                        <p style={{ color: 'var(--gray-400)', lineHeight: 1.7, fontSize: '0.875rem' }}>
                            India's first all-electric ride-hailing service. Sustainable mobility for a cleaner future.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                            {/* Social Icons placeholders */}
                            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(social => (
                                <a key={social} href="#" aria-label={social} style={{
                                    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: 'var(--gray-800)', color: 'var(--gray-400)', borderRadius: '0.5rem', transition: 'all 0.2s'
                                }}>
                                    <span style={{ fontSize: '0.75rem' }}>{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--gray-300)' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>About Us</Link></li>
                            <li><Link to="/drive-with-us" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Careers</Link></li>
                            <li><Link to="/newsroom" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Press</Link></li>
                            <li><Link to="/newsroom" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--gray-300)' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/ride-with-us" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Ride</Link></li>
                            <li><Link to="/ride-with-us" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Malama Plus</Link></li>
                            <li><Link to="/charge" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Malama Charge</Link></li>
                            <li><Link to="/business" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Corporate</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--gray-300)' }}>Support</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Help Center</a></li>
                            <li><a href="#" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Safety</a></li>
                            <li><a href="#" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Contact Us</a></li>
                            <li><a href="#" style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--gray-800)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--gray-400)', fontSize: '0.875rem' }}>
                    <p>&copy; 2026 Malama Mobility. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
