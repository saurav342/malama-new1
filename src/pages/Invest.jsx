
import React, { useEffect } from 'react';

const PageHeader = ({ title, subtitle }) => (
    <section className="page-header" style={{
        paddingTop: '160px',
        paddingBottom: '8rem',
        background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-800) 100%)',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
    }}>
        <div className="container">
            <span className="section-label animate-fade-in-up" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--primary-light)',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255,255,255,0.2)'
            }}>
                Investor Relations
            </span>
            <h1 className="page-title animate-fade-in-up" style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                lineHeight: 1.1,
                animationDelay: '0.1s'
            }}>
                Shape the Future of <br /><span className="text-gradient">Green Mobility</span>
            </h1>
            <p className="page-subtitle animate-fade-in-up" style={{
                fontSize: '1.25rem',
                color: 'var(--gray-300)',
                maxWidth: '700px',
                margin: '0 auto',
                animationDelay: '0.2s',
                lineHeight: 1.6
            }}>
                Join Malama's mission to decarbonize urban transport in India.
                Be part of a high-growth, sustainable, and profitable ecosystem.
            </p>
        </div>
    </section>
);

const Section = ({ title, bg = 'var(--white)', children, dark = false }) => (
    <section className="section" style={{ background: bg, color: dark ? 'white' : 'var(--gray-900)' }}>
        <div className="container">
            {title && <h2 className="section-title scroll-animate" style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '3rem',
                textAlign: 'center',
                color: dark ? 'white' : 'var(--gray-900)'
            }}>{title}</h2>}
            {children}
        </div>
    </section>
);

const Invest = () => {
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
                title="Invest With Us"
                subtitle="Powering the electric revolution in India."
            />

            {/* 2. Market Opportunity */}
            <Section title="The $100B Opportunity">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {[
                        { val: '30%', text: 'CAGR Growth in Indian EV Market by 2030' },
                        { val: '90M', text: 'Daily Commuters in Top 10 Indian Cities' },
                        { val: '$200B+', text: 'Projected Ride-Hailing Market Size by 2030' }
                    ].map((stat, i) => (
                        <div key={i} className="scroll-animate" style={{
                            textAlign: 'center',
                            padding: '3rem',
                            background: 'var(--gray-50)',
                            borderRadius: '2rem'
                        }}>
                            <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>{stat.val}</div>
                            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--gray-700)' }}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Unique Value Proposition */}
            <Section title="Why Malama Wins" bg="var(--gray-50)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { t: 'Asset-Light Model', d: 'We partner with fleet operators, keeping our capex low and scalability high.' },
                        { t: 'Tech-First Approach', d: 'Proprietary AI for route optimization, battery management, and demand prediction.' },
                        { t: 'Full-Stack Ecosystem', d: 'Integrated charging, maintenance, and vehicle financing solutions.' },
                        { t: 'Brand Loyalty', d: 'High retention due to our premium service and eco-conscious branding.' }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            background: 'white',
                            padding: '2.5rem',
                            borderRadius: '1.5rem',
                            boxShadow: 'var(--shadow-md)',
                            borderTop: '5px solid var(--primary)'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{item.t}</h3>
                            <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 4. Growth Strategy */}
            <Section title="Roadmap to Leadership">
                <div className="scroll-animate" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
                    {/* Vertical Line */}
                    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', background: 'var(--primary-100)', transform: 'translateX(-50%)', borderRadius: '4px' }}></div>

                    {[
                        { year: '2024', phase: 'Launch Phase', detail: 'Live in Bangalore & Mumbai. 500+ Fleet Size.' },
                        { year: '2025', phase: 'Expansion', detail: 'Expansion to top 10 Metros. 5,000+ Fleet Size.' },
                        { year: '2026', phase: 'Ecosystem', detail: 'Launch of Malama Charging Network. 20,000+ Fleet.' },
                        { year: '2027+', phase: 'Market Leader', detail: 'Pan-India presence. IPO readiness.' }
                    ].map((milestone, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                            marginBottom: '3rem',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '45%',
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow-lg)',
                                border: '1px solid var(--gray-100)',
                                position: 'relative',
                                ...(i % 2 === 0 ? { marginRight: '5%' } : { marginLeft: '5%' })
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    [i % 2 === 0 ? 'right' : 'left']: '-5%',
                                    transform: `translate(${i % 2 === 0 ? '50%' : '-50%'}, -50%)`,
                                    width: '20px',
                                    height: '20px',
                                    background: 'var(--primary)',
                                    borderRadius: '50%',
                                    border: '4px solid white',
                                    zIndex: 2
                                }}></div>
                                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.25rem' }}>{milestone.year}</span>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0' }}>{milestone.phase}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>{milestone.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. Investor Benefits (ROI) */}
            <Section title="Why Invest Now?" bg="var(--gray-900)" dark>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div className="scroll-animate" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-light)' }}>Early Mover Advantage</h3>
                        <p style={{ opacity: 0.8, lineHeight: '1.7' }}>
                            Get in at the ground floor of the EV revolution. As policies shift towards green mobility, early backers stand to gain the most.
                        </p>
                    </div>
                    <div className="scroll-animate" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-light)' }}>Sustainable Portfolio</h3>
                        <p style={{ opacity: 0.8, lineHeight: '1.7' }}>
                            Add a high-impact, ESG-compliant asset to your portfolio. Malama checks all the boxes for responsible investing.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 6. CTA / Contact */}
            <Section title="Let's Talk Business">
                <div className="scroll-animate" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)', marginBottom: '3rem' }}>
                        Interested in our Series A round? Request our pitch deck or schedule a meeting with our founders.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="mailto:invest@malamamobility.com" className="btn btn-primary btn-lg" style={{ minWidth: '200px' }}>Request Pitch Deck</a>
                        <button className="btn btn-secondary btn-lg" style={{ minWidth: '200px' }}>Schedule Meeting</button>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Invest;
