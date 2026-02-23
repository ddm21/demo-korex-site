export default function Comparison() {
    const manualItems = [
        'Copy-pasting data between admin tools',
        'Adding things in your CRM is a manual expensive',
        'Full team is reading latest news once',
        'Team is stuck on more repetitive manual jobs'
    ];

    const korexItems = [
        'System is running in the background',
        'Leads are tracked in your systems automatically',
        'Save 40 hours a day, every single month',
        'Work for audit and high-level creative work'
    ];

    return (
        <section>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '36px' }}>Your Business Is Leaking Time</h2>
                <p style={{ color: 'var(--text-muted)' }}>Automation gives you the power to do things at scale, without increase in headcount and error manually expensive.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                <div className="glass" style={{ padding: '40px', borderLeft: '4px solid #ff4d4d' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <span style={{ background: '#ff4d4d22', padding: '8px', borderRadius: '50%' }}>❌</span>
                        <h3 style={{ margin: 0 }}>The Manual Way</h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {manualItems.map(item => (
                            <li key={item} style={{ color: 'var(--text-muted)', fontSize: '15px', display: 'flex', gap: '10px' }}>
                                <span style={{ color: '#ff4d4d' }}>-</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glass" style={{ padding: '40px', borderLeft: '4px solid var(--accent)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <span style={{ background: 'var(--accent)22', padding: '8px', borderRadius: '50%' }}>✅</span>
                        <h3 style={{ margin: 0 }}>The Korex Way</h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {korexItems.map(item => (
                            <li key={item} style={{ color: 'var(--foreground)', fontSize: '15px', display: 'flex', gap: '10px' }}>
                                <span style={{ color: 'var(--accent)' }}>+</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
