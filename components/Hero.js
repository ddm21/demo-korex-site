export default function Hero() {
    return (
        <section className="animate-fade-in" style={{
            textAlign: 'center',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                opacity: 0.1,
                filter: 'blur(60px)',
                zIndex: -1
            }}></div>
            <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '20px', letterSpacing: '2px', fontSize: '14px' }}>AUDIT YOUR WORKFLOWS</p>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', marginBottom: '30px' }}>
                Stop doing <span className="text-gradient">robot work.</span>
            </h1>
            <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: 'var(--text-muted)', fontSize: '18px' }}>
                We build custom low-code automation systems that save you 20+ hours a week. Eliminate manual data entry, connect your apps, and scale without hiring more staff.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#audit-form" className="btn-primary">Get My Free Audit</a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '14px' }}>
                    <span>✓ Digital Architecture</span>
                    <span>•</span>
                    <span>✓ CRM Setup</span>
                    <span>•</span>
                    <span>✓ Workflow Design</span>
                </div>
            </div>
        </section>
    );
}
