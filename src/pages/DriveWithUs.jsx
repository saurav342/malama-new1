
import React, { useEffect } from 'react';

const PageHeader = ({ title, subtitle, icon }) => (
    <section className="page-header" style={{
        paddingTop: '160px',
        paddingBottom: '6rem',
        background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)',
        textAlign: 'center'
    }}>
        <div className="container">
            <span className="section-label animate-fade-in-up" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--primary-100)',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--primary-dark)',
                marginBottom: '1.5rem'
            }}>
                {icon}
                Join the Revolution
            </span>
            <h1 className="page-title animate-fade-in-up" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                color: 'var(--gray-900)',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
                animationDelay: '0.1s'
            }}>
                {title}
            </h1>
            <p className="page-subtitle animate-fade-in-up" style={{
                fontSize: '1.25rem',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto',
                animationDelay: '0.2s'
            }}>
                {subtitle}
            </p>
        </div>
    </section>
);

const Section = ({ title, subtitle, children, bg = 'var(--white)' }) => (
    <section className="section" style={{ background: bg }}>
        <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title scroll-animate" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--gray-900)' }}>
                    {title}
                </h2>
                {subtitle && <p className="scroll-animate" style={{ fontSize: '1.125rem', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
            </div>
            {children}
        </div>
    </section>
);

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
            {/* 1. Hero Section */}
            <PageHeader
                title="Drive With Malama"
                subtitle="Earn more, stress less. Join India's first electric-only fleet and become a partner in change."
                icon="⚡️"
            />

            {/* 2. Why Drive with Us? */}
            <Section title="Why Drive with Us?" subtitle="We take care of our partners like family.">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { t: 'Guaranteed Earnings', d: 'Weekly payouts with minimum guarantee. No hidden cuts.', i: '💰' },
                        { t: 'Zero Maintenance', d: 'We handle all vehicle service and insurance costs.', i: '🛠️' },
                        { t: 'No Car Needed', d: 'Don\'t own a car? Drive our premium electric fleet.', i: '🚗' },
                        { t: 'Health Benefits', d: 'Comprehensive insurance for you and your family.', i: '🏥' }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            padding: '2rem',
                            background: 'var(--white)',
                            borderRadius: '1.5rem',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--gray-100)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.i}</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.t}</h3>
                            <p style={{ color: 'var(--gray-600)' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Flexibility */}
            <Section title="Work on Your Terms" bg="var(--gray-50)">
                <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <div className="scroll-animate" style={{ flex: '1 1 400px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1626075673070-e48356d2524a?q=80&w=2692&auto=format&fit=crop"
                            alt="Happy Driver"
                            style={{ borderRadius: '2rem', boxShadow: 'var(--shadow-xl)', width: '100%' }}
                        />
                    </div>
                    <div className="scroll-animate" style={{ flex: '1 1 400px' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Be Your Own Boss</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
                            Whether you want to drive full-time or just on weekends, Malama gives you the freedom to choose your schedule.
                        </p>
                        <ul style={{ display: 'grid', gap: '1rem' }}>
                            {['Simple login/logout', 'Choose your preferred zones', 'Paid vacation days'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* 4. Requirements */}
            <Section title="What You Need" subtitle="Simple requirements to get started.">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                    {['Valid Driving License', 'Age 21+', 'Clean Driving Record', 'Background Check'].map((req, i) => (
                        <div key={i} className="scroll-animate" style={{
                            padding: '1.5rem 3rem',
                            background: 'var(--primary-50)',
                            color: 'var(--primary-dark)',
                            fontWeight: 600,
                            borderRadius: '1rem',
                            border: '1px solid var(--primary-100)'
                        }}>
                            {req}
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. Onboarding Process */}
            <Section title="How to Join" bg="var(--gray-50)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        { s: '1', t: 'Apply Online', d: 'Fill the form below in 2 mins.' },
                        { s: '2', t: 'Vetting', d: 'We verify your documents quickly.' },
                        { s: '3', t: 'Training', d: '1-day session on EV driving.' },
                        { s: '4', t: 'Start Earning', d: 'Get your car keys and go!' }
                    ].map((step, i) => (
                        <div key={i} className="scroll-animate" style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '50px', height: '50px',
                                background: 'var(--gray-900)', color: 'white',
                                borderRadius: '50%', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.25rem', fontWeight: 'bold', margin: '0 auto 1rem'
                            }}>
                                {step.s}
                            </div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{step.t}</h4>
                            <p style={{ color: 'var(--gray-600)' }}>{step.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 6. FAQ */}
            <Section title="Driver FAQs">
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
                    {[
                        { q: 'Do I need to pay for charging?', a: 'No, all charging costs are covered by Malama at our partner stations.' },
                        { q: 'How often do I get paid?', a: 'Payments are processed weekly every Tuesday directly to your bank account.' },
                        { q: 'Is there a minimum login hours?', a: 'Flexible drivers have no minimum. Full-time drivers have an 8-hour shift.' }
                    ].map((faq, i) => (
                        <div key={i} className="scroll-animate" style={{ padding: '1.5rem', background: 'var(--gray-50)', borderRadius: '1rem' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{faq.q}</h4>
                            <p style={{ color: 'var(--gray-600)' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 7. CTA */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
                <div className="container scroll-animate">
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Start Your Journey Today</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Join thousands of happy drivers earning more with Malama.
                    </p>
                    <button className="btn btn-white btn-lg" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                        Apply to Drive
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DriveWithUs;
