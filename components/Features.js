export default function Features() {
    const features = [
        {
            title: 'Centralized Data',
            desc: 'Connect all your tools and apps into a single source of truth.',
            icon: '📊'
        },
        {
            title: 'Logic & Routing',
            desc: 'Complex rules that handle your data and routes it where it needs to go.',
            icon: '🛠️'
        },
        {
            title: 'Infinite Scalability',
            desc: 'Systems that grow with you. Automate once, use forever.',
            icon: '🚀'
        }
    ];

    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Built on the Tools You Already Trust</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
                        We don't force you onto new software. We connect your existing stack to create a seamless operational brain.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {features.map(f => (
                            <div key={f.title} style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'var(--card-bg)', padding: '15px', borderRadius: '12px', height: 'fit-content', fontSize: '24px' }}>
                                    {f.icon}
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>{f.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ textAlign: 'center', zIndex: 1 }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Visual Workflow Architecture</p>
                        <div style={{
                            marginTop: '20px',
                            padding: '20px',
                            border: '1px dashed var(--card-border)',
                            borderRadius: '8px',
                            background: 'var(--background)'
                        }}>
                            <span style={{ color: 'var(--primary)' }}>[ Trigger ]</span> → <span style={{ color: 'var(--accent)' }}>[ Action ]</span> → <span style={{ color: 'var(--secondary)' }}>[ Result ]</span>
                        </div>
                    </div>
                    {/* Subtle background glow */}
                    <div style={{
                        position: 'absolute',
                        width: '200px',
                        height: '200px',
                        background: 'var(--secondary)',
                        opacity: 0.1,
                        filter: 'blur(100px)',
                        zIndex: 0
                    }}></div>
                </div>
            </div>
        </section>
    );
}
