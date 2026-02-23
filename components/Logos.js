export default function Logos() {
    const logos = ['AcmeCorp', 'GlobeSystems', 'SoylentData', 'InitechLabs', 'UmbrellaInc'];
    return (
        <section style={{ padding: '40px 20px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px' }}>Trusted by innovative companies</p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '50px',
                flexWrap: 'wrap',
                opacity: 0.5,
                filter: 'grayscale(100%) brightness(200%)'
            }}>
                {logos.map(logo => (
                    <div key={logo} style={{ fontSize: '18px', fontWeight: '700' }}>{logo}</div>
                ))}
            </div>
        </section>
    );
}
