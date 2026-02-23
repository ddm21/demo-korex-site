'use client';
import { useState } from 'react';

export default function AuditForm() {
    const [status, setStatus] = useState('idle');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/webhook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    }

    return (
        <section id="audit-form">
            <div className="glass animate-fade-in" style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '50px',
                position: 'relative'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'var(--accent)22',
                        color: 'var(--accent)',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        marginBottom: '15px'
                    }}>
                        ⚡ Limited spots available
                    </div>
                    <h2 style={{ fontSize: '28px' }}>Get Your Free Automation Audit</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Fill out the form below and we will get back to you in 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600' }}>Full Name</label>
                        <input
                            name="name"
                            required
                            placeholder="e.g. John Doe"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--card-border)',
                                padding: '12px',
                                borderRadius: '8px',
                                color: 'white'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600' }}>Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="john@company.com"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--card-border)',
                                padding: '12px',
                                borderRadius: '8px',
                                color: 'white'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600' }}>Company / Needs (Optional)</label>
                        <textarea
                            name="needs"
                            rows="3"
                            placeholder="Tell us about your biggest bottleneck..."
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--card-border)',
                                padding: '12px',
                                borderRadius: '8px',
                                color: 'white',
                                resize: 'none'
                            }}
                        />
                    </div>

                    <button
                        disabled={status === 'submitting'}
                        className="btn-primary"
                        style={{ width: '100%', padding: '15px' }}
                    >
                        {status === 'submitting' ? 'Processing...' : 'Get My Free Audit'}
                    </button>

                    {status === 'success' && <p style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '14px' }}>Success! We'll be in touch soon.</p>}
                    {status === 'error' && <p style={{ color: '#ff4d4d', textAlign: 'center', fontSize: '14px' }}>Oops! Something went wrong. Please try again.</p>}
                </form>
            </div>
        </section>
    );
}
