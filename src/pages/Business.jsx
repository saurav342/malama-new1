
import React, { useEffect } from 'react';

const Business = () => {
    return (
        <div>
            <section className="page-header" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Malama For Business
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>Corporate mobility solutions for a sustainable future.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Employee Transportation</h3>
                        <p style={{ color: 'var(--gray-600)' }}>Safe and reliable commute for your workforce with real-time tracking.</p>
                    </div>
                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Client Travel</h3>
                        <p style={{ color: 'var(--gray-600)' }}>Premium experience for your visiting clients and executives.</p>
                    </div>
                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Event Mobility</h3>
                        <p style={{ color: 'var(--gray-600)' }}>Carbon-neutral transportation solutions for corporate events.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Business;
