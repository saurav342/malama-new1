
import React, { useEffect } from 'react';

const PageHeader = ({ title, subtitle, icon }) => (
    <section className="page-header" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)', textAlign: 'center' }}>
        <div className="container">
            <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--primary-100)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>
                {icon}
                {title}
            </span>
            <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
                {title}
            </h1>
            <p className="page-subtitle" style={{ fontSize: '1.25rem', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                {subtitle}
            </p>
        </div>
    </section>
);

const RideWithUs = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <PageHeader
                title="Ride With Us"
                subtitle="Experience India's first all-electric ride-hailing service with zero emissions and premium comfort."
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>}
            />

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div className="scroll-animate">
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=500&fit=crop" alt="Malama Ride" style={{ borderRadius: '1.5rem', width: '100%' }} />
                    </div>
                    <div className="scroll-animate">
                        <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>Premium Electric Rides</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
                            Every ride is a step towards a cleaner planet. Enjoy noise-free, pollution-free rides in our premium fleet.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {['No surge pricing ever', 'Zero cancellations by drivers', 'Scheduled rides assurance'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--gray-700)' }}>
                                    <span style={{ color: 'var(--primary)' }}>✔</span> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/#book" className="btn btn-primary btn-lg">Book Now</a>
                    </div>
                </div>
            </section>

            <div style={{ padding: '4rem 0', background: 'var(--gray-50)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Safe & Secure</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { t: 'Verified Drivers', d: 'Background checked and trained' },
                            { t: 'Live Tracking', d: 'Share trip status in real-time' },
                            { t: 'Emergency SOS', d: '24/7 safety command center' }
                        ].map((item, i) => (
                            <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.t}</h3>
                                <p style={{ color: 'var(--gray-600)' }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RideWithUs;
