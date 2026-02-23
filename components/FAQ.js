'use client';
import { useState } from 'react';

export default function FAQ() {
    const faqs = [
        {
            q: 'Is my data secure?',
            a: 'Absolutely. We use industry-standard encryption and secure API connections. We never store your sensitive business data; we only build the logic to move it.'
        },
        {
            q: 'What if the system is down?',
            a: 'We build redundant systems with automated error handling. If a step fails, you get notified immediately, and the system can retry automatically.'
        },
        {
            q: 'Do I need technical skills?',
            a: 'None at all. We handle the entire architecture. You just enjoy the saved hours and streamlined processes.'
        }
    ];

    const [open, setOpen] = useState(null);

    return (
        <section>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '32px' }}>Common Questions</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {faqs.map((faq, i) => (
                    <div key={i} className="glass" style={{ overflow: 'hidden' }}>
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            style={{
                                width: '100%',
                                padding: '20px',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                textAlign: 'left',
                                fontSize: '18px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            {faq.q}
                            <span style={{ transition: 'var(--transition)', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
                        </button>
                        <div style={{
                            maxHeight: open === i ? '200px' : '0',
                            overflow: 'hidden',
                            transition: 'var(--transition)',
                            padding: open === i ? '0 20px 20px' : '0 20px',
                            color: 'var(--text-muted)'
                        }}>
                            {faq.a}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
