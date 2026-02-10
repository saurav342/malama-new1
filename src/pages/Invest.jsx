
import React from 'react';

const Invest = () => {
    return (
        <div>
            <section className="page-header" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--primary-50) 0%, var(--white) 100%)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Invest With Us
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>Powering the electric revolution in India.</p>
                </div>
            </section>
            <section className="section">
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
                        Malama is India's fastest growing EV ride-hailing company. We are open to strategic partnerships and investments.
                    </p>
                    <a href="mailto:invest@malamamobility.com" className="btn btn-primary btn-lg">Contact Investor Relations</a>
                </div>
            </section>
        </div>
    )
}

export default Invest;
