
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeTab, setActiveTab] = useState('one-way');
    const [bookingStatus, setBookingStatus] = useState('idle'); // idle, searching, found, reset

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleBookingSearch = (e) => {
        e.preventDefault();
        setBookingStatus('searching');
        setTimeout(() => {
            setBookingStatus('found');
            setTimeout(() => setBookingStatus('idle'), 2000);
        }, 1500);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero" id="book" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)', overflow: 'hidden', position: 'relative' }}>
                <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '560px' }}>
                        <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'white', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--gray-600)', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                            <span className="hero-badge-dot" style={{ width: '8px', height: '8px', background: 'var(--green-500)', borderRadius: '50%' }}></span>
                            100% Electric Fleet
                        </div>

                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                            Simple, affordable.<br />
                            <span className="highlight" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Peace of mind,</span> guaranteed.
                        </h1>

                        <p className="hero-description" style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem', lineHeight: 1.7 }}>
                            India's first all-electric ride-hailing service. Zero emissions, trained drivers,
                            and seamless rides at your fingertips.
                        </p>

                        {/* Booking Form */}
                        <div className="booking-form" style={{ background: 'white', borderRadius: '1.5rem', padding: '1.5rem', boxShadow: 'var(--shadow-xl)', marginBottom: '2rem' }}>
                            <div className="booking-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                {['One Way', 'Round Trip', 'Rentals'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                                        className={`booking-tab ${activeTab === tab.toLowerCase().replace(' ', '-') ? 'active' : ''}`}
                                        style={{
                                            padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 500, borderRadius: '999px',
                                            transition: 'all 0.2s',
                                            background: activeTab === tab.toLowerCase().replace(' ', '-') ? 'var(--primary)' : 'transparent',
                                            color: activeTab === tab.toLowerCase().replace(' ', '-') ? 'white' : 'var(--gray-500)'
                                        }}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="booking-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div className="input-group" style={{ position: 'relative' }}>
                                    <span className="input-icon" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" /></svg>
                                    </span>
                                    <input type="text" placeholder="Enter pickup location" style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', border: '2px solid var(--gray-200)', borderRadius: '1rem', fontSize: '1rem', background: 'var(--gray-50)', outline: 'none' }} />
                                </div>

                                <div className="input-group" style={{ position: 'relative' }}>
                                    <span className="input-icon" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </span>
                                    <input type="text" placeholder="Enter destination" style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', border: '2px solid var(--gray-200)', borderRadius: '1rem', fontSize: '1rem', background: 'var(--gray-50)', outline: 'none' }} />
                                </div>

                                <button onClick={handleBookingSearch} className="btn btn-primary btn-lg booking-submit" style={{ width: '100%', marginTop: '1rem' }}>
                                    {bookingStatus === 'idle' && (
                                        <>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                            Search Rides
                                        </>
                                    )}
                                    {bookingStatus === 'searching' && 'Searching...'}
                                    {bookingStatus === 'found' && 'Rides Found!'}
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="stats-bar" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            {[
                                { label: 'Distance Covered', value: '1.5M+ km', icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /> },
                                { label: 'Saved by Users', value: '₹50 Million', icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> },
                                { label: '5-Star Reviews', value: '45k+', icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /> }
                            ].map((stat, i) => (
                                <div key={i} className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="stat-icon" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-100)', borderRadius: '0.75rem', color: 'var(--primary)' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{stat.icon}</svg>
                                    </div>
                                    <div>
                                        <div className="stat-value" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gray-900)' }}>{stat.value}</div>
                                        <div className="stat-label" style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-image" style={{ position: 'relative' }}>
                        <div className="hero-cars" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop" alt="Malama Electric Car Fleet" style={{ width: '100%', maxWidth: '600px', borderRadius: '1.5rem', boxShadow: 'var(--shadow-2xl)' }} />
                            <div className="floating-badge eco" style={{ position: 'absolute', top: '20%', right: '-20px', background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color: 'white', padding: '0.75rem 1rem', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 500, animation: 'float 3s ease-in-out infinite' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 17.5L12 12l5.5-5.5M12 2v10l-5.5 5.5" /></svg>
                                Zero Emission
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 100% Electric Rides Section */}
            <section className="section" style={{ background: 'var(--gray-50)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div className="scroll-animate">
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=500&fit=crop" alt="Professional Driver" style={{ borderRadius: '1.5rem', width: '100%' }} />
                    </div>
                    <div className="scroll-animate">
                        <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--primary-100)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 5.99-4.67 7.25l1.67 2.88A9.996 9.996 0 0 0 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C6.05 2.55 2.05 6.82 2.05 12c0 4.73 3.26 8.68 7.67 9.75l1.67-2.88C8.92 17.99 7 15.21 7 12c0-4.08 3.05-7.44 7-7.93V2.05H11z" /></svg>
                            100% Electric Rides
                        </span>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '1rem', lineHeight: 1.2 }}>Experience the Future of Urban Mobility</h2>
                        <p className="section-description" style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem', lineHeight: 1.7 }}>
                            Every ride with Malama is powered by clean energy. Our fleet of premium electric vehicles ensures you travel in comfort while reducing your carbon footprint.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {[
                                'Zero tailpipe emissions on every ride',
                                'Professionally trained and verified drivers',
                                'Premium, well-maintained electric vehicles',
                                'AC & music system in all rides'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--gray-700)' }}>
                                    <span style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--green-500)', color: 'white', borderRadius: '50%', flexShrink: 0 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="#book" className="btn btn-primary btn-lg">Book a Ride</a>
                    </div>
                </div>
            </section>

            {/* Malama Plus Membership */}
            <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <div className="scroll-animate">
                        <span className="section-label" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
                            Premium Membership
                        </span>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>Malama Plus</h2>
                        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
                            Unlock exclusive benefits with Malama Plus membership. Priority booking, special discounts, and premium perks.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            {[
                                { title: '10% Off Every Ride', desc: 'Save on every trip', icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> },
                                { title: 'Priority Booking', desc: 'Skip the queue', icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
                                { title: 'Favorite Drivers', desc: 'Book preferred drivers', icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> },
                                { title: 'Ride Credits', desc: 'Earn bonus credits', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></> }
                            ].map((feature, i) => (
                                <div key={i} style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                                    <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', color: 'var(--primary)', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{feature.icon}</svg>
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{feature.title}</h4>
                                    <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="scroll-animate">
                        <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=500&fit=crop" alt="Malama Plus" style={{ borderRadius: '1.5rem', width: '100%' }} />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section" id="about">
                <div className="container">
                    <div className="scroll-animate" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--primary-100)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>What People Say</span>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--gray-900)' }}>Trusted by Thousands</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>Real stories from real riders who chose Malama for their daily commute.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { name: 'Rahul Sharma', city: 'Delhi NCR', text: "The cleanest and most comfortable ride experience I've ever had. The drivers are professional, cars are always spotless, and I love knowing I'm reducing my carbon footprint!" },
                            { name: 'Priya Mehta', city: 'Bangalore', text: "Been using Malama for my daily office commute for 6 months now. The predictable pricing and quality service make it my go-to choice. Highly recommended!" },
                            { name: 'Amit Patel', city: 'Mumbai', text: "As someone who cares about the environment, Malama is perfect. Electric vehicles, great service, and competitive pricing. What more could you ask for?" }
                        ].map((t, i) => (
                            <div key={i} className="scroll-animate" style={{ background: 'var(--gray-50)', padding: '2rem', borderRadius: '1.5rem', position: 'relative' }}>
                                <span style={{ fontSize: '3rem', color: 'var(--primary)', opacity: 0.3, fontFamily: 'Georgia, serif', lineHeight: 1, position: 'absolute', top: '1rem', left: '1.5rem' }}>"</span>
                                <p style={{ fontSize: '1rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>{t.text}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '1.125rem' }}>{t.name[0]}</div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--gray-900)' }}>{t.name}</h4>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{t.city}</p>
                                        <div style={{ display: 'flex', gap: '2px', color: 'var(--yellow-400)', marginTop: '0.25rem' }}>{'★'.repeat(5)}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Download */}
            <section className="section" style={{ background: 'var(--gray-50)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div className="scroll-animate">
                        <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--primary-100)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>App to Enter</span>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '1rem' }}>Your Ride is Just a Tap Away</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
                            Download the Malama app and experience the convenience of booking eco-friendly rides anytime, anywhere.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#" className="btn icon-btn" style={{ background: 'var(--gray-900)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <small style={{ display: 'block', fontSize: '0.75rem', opacity: 0.8 }}>Download on the</small>
                                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>App Store</span>
                                </div>
                            </a>
                            <a href="#" className="btn icon-btn" style={{ background: 'var(--gray-900)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <small style={{ display: 'block', fontSize: '0.75rem', opacity: 0.8 }}>GET IT ON</small>
                                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="scroll-animate" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop" alt="Malama App Mockup" style={{ borderRadius: '2rem', maxWidth: '300px', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.2))' }} />
                    </div>
                </div>
            </section>

            {/* Corporate/Business Teaser */}
            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div className="scroll-animate">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop" alt="Corporate Solutions" style={{ borderRadius: '1.5rem', width: '100%' }} />
                    </div>
                    <div className="scroll-animate">
                        <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--primary-100)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>Corporate Solutions</span>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '1rem' }}>Malama For Business</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
                            Transform your corporate transportation with Malama's business solutions. Efficient, sustainable, and cost-effective fleet management.
                        </p>
                        <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {['Dedicated corporate fleet management', 'Centralized billing & invoicing', 'Employee commute programs', 'ESG compliance & sustainability reports'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-700)' }}>
                                    <span style={{ color: 'var(--primary)' }}>✔</span> {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/business" className="btn btn-primary btn-lg">Contact Sales</Link>
                    </div>
                </div>
            </section>

            {/* Discover CTA */}
            <section className="discover-cta" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '4rem 0' }}>
                <div className="container">
                    <h2 className="scroll-animate" style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>Discover the Safe Everyday Commute</h2>
                    <p className="scroll-animate" style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Download Malama today and experience eco-friendly, reliable, and comfortable rides.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" style={{ background: 'var(--gray-50)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-animate" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--gray-900)' }}>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { q: "How do I book a ride with Malama?", a: "Download the Malama app from the App Store or Google Play Store. Sign up with your phone number, enter your pickup and drop location, and book your ride." },
                            { q: "Are all Malama vehicles electric?", a: "Yes! Malama operates 100% electric vehicle fleet. All our cars are premium EVs with zero tailpipe emissions." },
                            { q: "What cities is Malama available in?", a: "Malama is currently operational in Delhi NCR, Bangalore, Mumbai, and Hyderabad. We're rapidly expanding to more cities across India." },
                            { q: "How is pricing calculated?", a: "Malama offers transparent, upfront pricing with no surge. The fare is calculated based on distance and time, and you see the final fare before booking." }
                        ].map((faq, i) => (
                            <details key={i} className="scroll-animate" style={{ background: 'white', borderRadius: '1rem', padding: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                                <summary style={{ padding: '1rem', fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {faq.q}
                                    <span style={{ color: 'var(--primary)' }}>+</span>
                                </summary>
                                <p style={{ padding: '0 1rem 1rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
