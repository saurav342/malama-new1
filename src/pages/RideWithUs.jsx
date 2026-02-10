
import React, { useEffect } from 'react';

const PageHeader = ({ title, subtitle, icon }) => (
    <section className="page-header" style={{
        paddingTop: '160px',
        paddingBottom: '6rem',
        background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                marginBottom: '1.5rem',
                boxShadow: '0 2px 10px rgba(22, 163, 74, 0.1)'
            }}>
                {icon}
                {title}
            </span>
            <h1 className="page-title animate-fade-in-up" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--gray-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
                animationDelay: '0.1s'
            }}>
                Ride in <span className="text-gradient">Pure Comfort</span>,<br />
                Zero Emissions.
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

const Section = ({ title, subtitle, children, bg = 'var(--white)', id }) => (
    <section id={id} className="section" style={{ background: bg }}>
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
            {/* 1. Hero Section */}
            <PageHeader
                title="Ride With Malama"
                subtitle="Experience India's first all-electric ride-hailing service. Premium cars, verified drivers, and zero carbon footprint."
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>}
            />

            {/* 2. Why Ride with Malama? (Benefits) */}
            <Section title="Why Choose Malama?" subtitle="Redefining urban mobility with standards that matter.">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        {
                            title: "No Surge Pricing",
                            desc: "Pay the same fair price, day or night. predictability you can trust.",
                            icon: "🏷️"
                        },
                        {
                            title: "No Cancellations",
                            desc: "Our drivers are happy and won't cancel on you. Reliable rides, always.",
                            icon: "✅"
                        },
                        {
                            title: "Silent & Pollution Free",
                            desc: "Enjoy a peaceful journey in our noise-free electric cabins.",
                            icon: "🌱"
                        }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            padding: '2.5rem',
                            borderRadius: '1.5rem',
                            background: 'var(--white)',
                            border: '1px solid var(--gray-100)',
                            boxShadow: 'var(--shadow-lg)',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--gray-900)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--gray-600)', lineHeight: '1.7' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Fleet Showcase */}
            <Section title="Our Premium Fleet" subtitle="Travel in style with our curated selection of electric vehicles." bg="var(--gray-50)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div className="scroll-animate">
                        <img
                            src="https://images.unsplash.com/photo-1593766698652-3e8dd84d010d?q=80&w=2070&auto=format&fit=crop"
                            alt="Premium SUV"
                            style={{ borderRadius: '1.5rem', boxShadow: 'var(--shadow-xl)', width: '100%' }}
                        />
                    </div>
                    <div className="scroll-animate">
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Malama Premium SUV</h3>
                            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>Spacious interiors, panoramic sunroofs, and extra legroom for a first-class experience.</p>
                            <ul style={{ display: 'grid', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span>🔌</span> 400km Range</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span>📶</span> Free Wi-Fi</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span>❄️</span> Climate Control</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Malama Commute Sedan</h3>
                            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>Perfect for daily office commutes. Quiet, efficient, and comfortable.</p>
                            <ul style={{ display: 'grid', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span>💼</span> Laptop Tray (Select)</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span>🔋</span> Phone Charging</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. Safety First */}
            <Section title="Your Safety, Our Priority" bg="var(--white)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Verified Drivers', desc: 'Rigorous background checks and in-person interviews.', icon: '👨‍✈️' },
                        { title: '24/7 Command Center', desc: 'Real-time trip monitoring and emergency support.', icon: '🚨' },
                        { title: 'In-app SOS', desc: 'Instant alert button shares location with safety team.', icon: '🆘' },
                        { title: 'Ride Sharing', desc: 'Share live trip status with loved ones instantly.', icon: '📍' }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'var(--primary-50)',
                            borderRadius: '1rem',
                            border: '1px solid var(--primary-100)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--gray-900)' }}>{item.title}</h4>
                            <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. How It Works */}
            <Section title="How It Works" subtitle="Book your green ride in 3 simple steps." bg="var(--gray-50)">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', position: 'relative' }}>
                    {[
                        { step: '01', title: 'Download & Register', desc: 'Get the Malama app and create your account in seconds.' },
                        { step: '02', title: 'Book Your Ride', desc: 'Enter destination and choose your preferred electric vehicle.' },
                        { step: '03', title: 'Ride Green', desc: 'Enjoy a silent, premium ride while saving the planet.' }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            flex: '1 1 300px',
                            maxWidth: '350px',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--primary)',
                                color: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                margin: '0 auto 1.5rem',
                                boxShadow: 'var(--shadow-lg)'
                            }}>
                                {item.step}
                            </div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>{item.title}</h4>
                            <p style={{ color: 'var(--gray-600)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 6. Testimonials */}
            <Section title="Loved by Thousands" subtitle="See what our riders are saying." bg="var(--white)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {[
                        { name: 'Priya S.', role: 'Daily Commuter', text: "Finally a cab service that doesn't smell of fuel! The cars are so clean and quiet. Totally worth it.", stars: 5 },
                        { name: 'Rahul M.', role: 'Business Traveler', text: "No cancellations is a game changer. I never miss a meeting now. Professional drivers.", stars: 5 },
                        { name: 'Ananya K.', role: 'Eco Enthusiast', text: "Love that I can track my carbon savings. Malama is the future of transport in India.", stars: 5 }
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            padding: '2rem',
                            background: 'var(--white)',
                            borderRadius: '1rem',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--gray-100)'
                        }}>
                            <div style={{ color: 'var(--yellow-400)', marginBottom: '1rem' }}>{'★'.repeat(item.stars)}</div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{item.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gray-200)' }}></div>
                                <div>
                                    <h5 style={{ fontWeight: 600, color: 'var(--gray-900)' }}>{item.name}</h5>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 7. CTA / App Download */}
            <section className="section" style={{ background: 'var(--primary-dark)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
                <div className="container scroll-animate">
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to Upgrade Your Ride?</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Download the Malama app today and get your first ride free. Join the green revolution.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <button className="btn btn-white btn-lg" style={{ minWidth: '200px' }}>
                             App Store
                        </button>
                        <button className="btn btn-white btn-lg" style={{ minWidth: '200px' }}>
                            ▶ Play Store
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RideWithUs;
