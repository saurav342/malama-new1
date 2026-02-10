
import React from 'react';

const Newsroom = () => {
    return (
        <div>
            <section className="page-header" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Newsroom
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>Latest updates from Malama Mobility.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Malama Expands to 5 New Cities', date: 'Feb 2026', desc: 'Announcing our expansion to Hyderabad, Chennai, Pune...' },
                        { title: '500+ Charging Stations Milestone', date: 'Jan 2026', desc: 'Malama Charge network crosses 500 fast-charging stations.' },
                        { title: 'Series C Funding Announcement', date: 'Dec 2025', desc: 'Malama raises $200M to accelerate EV adoption.' }
                    ].map((news, i) => (
                        <div key={i} className="card" style={{ cursor: 'pointer' }}>
                            <div style={{ height: '160px', background: 'var(--primary-100)', borderRadius: '1rem', marginBottom: '1rem' }}></div>
                            <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{news.date}</span>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0.5rem 0' }}>{news.title}</h3>
                            <p style={{ color: 'var(--gray-600)' }}>{news.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Newsroom;
