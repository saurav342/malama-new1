
import React from 'react';

const Charge = () => {
    return (
        <div>
            <section className="page-header" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Malama Charge
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>India's largest EV charging network.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Fast, Reliable Charging</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {['250+ Charging Stations', 'Fast DC Charging (30 min)', 'Open for all EVs', '24/7 Security'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--primary)' }}>⚡</span> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary">Locate Station</button>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=500&fit=crop" alt="Malama Charge" style={{ borderRadius: '1.5rem', width: '100%' }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Charge;
