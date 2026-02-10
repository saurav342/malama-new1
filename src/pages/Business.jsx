
import React, { useEffect } from 'react';

const PageHeader = ({ title, subtitle }) => (
    <section className="page-header" style={{
        paddingTop: '160px',
        paddingBottom: '8rem',
        background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
    }}>
        <div className="container">
            <span className="section-label animate-fade-in-up" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--gray-900)',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                For Enterprise
            </span>
            <h1 className="page-title animate-fade-in-up" style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 700,
                color: 'var(--gray-900)',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
                animationDelay: '0.1s'
            }}>
                Start Your Green<br /><span style={{ color: 'var(--primary)' }}>Corporate Journey</span>
            </h1>
            <p className="page-subtitle animate-fade-in-up" style={{
                fontSize: '1.25rem',
                color: 'var(--gray-600)',
                maxWidth: '650px',
                margin: '0 auto',
                animationDelay: '0.2s',
                lineHeight: 1.6
            }}>
                Make employee travel sustainable, efficient, and cost-effective with Malama's all-electric corporate fleet solutions.
            </p>
        </div>
    </section>
);

const Section = ({ title, bg = 'var(--white)', children }) => (
    <section className="section" style={{ background: bg }}>
        <div className="container">
            {title && <h2 className="section-title scroll-animate" style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '3rem',
                textAlign: 'center',
                color: 'var(--gray-900)'
            }}>{title}</h2>}
            {children}
        </div>
    </section>
);

const Business = () => {
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
            {/* 1. Hero Section */}
            <PageHeader
                title="Malama Business"
                subtitle="Corporate mobility solutions for a sustainable future."
            />

            {/* 2. Corporate Solutions */}
            <Section title="Comprehensive Mobility Solutions">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                    {[
                        {
                            t: 'Employee Commute',
                            d: 'Scheduled pick-up and drop-off for your teams. Ensure they arrive fresh and on time, every day.',
                            icon: '🚌'
                        },
                        {
                            t: 'Client & Exec Travel',
                            d: 'VIP services for your most important guests. Premium vehicles with top-rated chauffeurs.',
                            icon: '👔'
                        },
                        {
                            t: 'Event Mobility',
                            d: 'Large scale transport logistics for corporate events, conferences, and off-sites.',
                            icon: '🎉'
                        }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            padding: '3rem',
                            borderRadius: '2rem',
                            background: 'var(--gray-50)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--white)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--gray-50)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1rem' }}>{item.t}</h3>
                            <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Cost Management & Control */}
            <Section title="Total Control & Visibility" bg="var(--gray-900)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div className="scroll-animate" style={{ color: 'white' }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                            A Dashboard Built for Admins
                        </h3>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem' }}>
                            Gain real-time insights into your company's travel spending and patterns.
                        </p>
                        <ul style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                'Define travel policies and limits',
                                'Single monthly invoice with GST details',
                                'Department-wise cost allocation',
                                'Live ride tracking dashboard'
                            ].map((feat, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{
                                        width: '24px', height: '24px',
                                        background: 'var(--primary)',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.8rem'
                                    }}>✓</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="scroll-animate" style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        {/* Abstract representation of dashboard */}
                        <div style={{ height: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ height: '40px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}></div>
                            <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
                                <div style={{ flex: 2, background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }}></div>
                                <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }}></div>
                            </div>
                            <div style={{ height: '80px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}></div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. Sustainability */}
            <Section title="Meet Your ESG Goals">
                <div style={{
                    background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
                    borderRadius: '2rem',
                    padding: '4rem',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem'
                }} className="scroll-animate">
                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Data-Backed Impact</h3>
                        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                            We provide certified detailed reports on carbon emissions saved for every kilometer traveled, perfectly aligned with your company's sustainability reporting needs.
                        </p>
                    </div>
                    <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', fontWeight: 800 }}>Zero</div>
                        <div style={{ fontSize: '1.5rem' }}>Tailpipe Emissions</div>
                    </div>
                </div>
            </Section>

            {/* 5. Key Differentiators */}
            <Section title="The Malama Advantage" bg="var(--gray-50)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        { t: 'Priority Booking', d: 'Your employees get first preference during peak hours.' },
                        { t: 'Dedicated Support', d: '24/7 account manager for quick resolutions.' },
                        { t: 'Silent Rides', d: 'Productive environment for calls and work on the go.' },
                        { t: 'Brand Alignment', d: 'Showcase your commitment to a greener future.' }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{ textAlign: 'center' }}>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>{item.t}</h4>
                            <p style={{ color: 'var(--gray-600)' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 6. Contact / CTA */}
            <Section title="Partner With Us">
                <div className="scroll-animate" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: 'var(--white)',
                    padding: '3rem',
                    borderRadius: '2rem',
                    boxShadow: 'var(--shadow-xl)',
                    border: '1px solid var(--gray-100)'
                }}>
                    <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--gray-700)' }}>Company Name</label>
                                <input type="text" placeholder="Enter company name" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-300)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--gray-700)' }}>Full Name</label>
                                <input type="text" placeholder="Your name" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-300)' }} />
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--gray-700)' }}>Work Email</label>
                                <input type="email" placeholder="name@company.com" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-300)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--gray-700)' }}>Phone Number</label>
                                <input type="tel" placeholder="+91 98765 43210" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-300)' }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--gray-700)' }}>Requirement Details</label>
                            <textarea rows="4" placeholder="Tell us about your transport needs..." style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-300)' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', fontSize: '1.1rem' }}>
                            Request Callback
                        </button>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Business;
