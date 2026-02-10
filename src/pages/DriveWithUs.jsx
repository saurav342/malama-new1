
import React, { useEffect } from 'react';

const DriveWithUs = () => {
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
            <section className="page-header" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--primary-100)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Join Our Team
                    </span>
                    <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
                        Drive With Us
                    </h1>
                    <p className="page-subtitle" style={{ fontSize: '1.25rem', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                        Become a Malama driver partner and earn while contributing to a cleaner environment.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div className="scroll-animate">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Benefits for Driver Partners</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                'Guaranteed weekly earnings',
                                'Zero vehicle maintenance cost',
                                'No asset ownership required (we provide the car)',
                                'Health insurance & benefits',
                                'Flexible working hours'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', color: 'var(--gray-700)' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>Apply Now</button>
                    </div>
                    <div className="scroll-animate">
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=500&fit=crop" alt="Malama Driver" style={{ borderRadius: '1.5rem', width: '100%', boxShadow: 'var(--shadow-xl)' }} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DriveWithUs;
