export default function Testimonials() {
    const testimonials = [
        {
            name: 'Michael Chen',
            role: 'Director, TechFlow',
            quote: 'We nearly twice as much as earlier! 2 months ago we were manually doing everything on our own. We saved 50% more time in 2 months from our daily expense and reports.',
            stars: 5
        },
        {
            name: 'Elena Rodriguez',
            role: 'CEO, Brightscale',
            quote: 'Saved time and we saved thousands of made humble reports since then. My company is not broken anymore, and our workers spend at almost $2k in hiring every single year.',
            stars: 5
        },
        {
            name: 'James Pierce',
            role: 'Founder, SoloScale',
            quote: 'The system runs every day. They have been reaching me with more leads as my team grows to reach 7 more clients in just week or more.',
            stars: 5
        }
    ];

    return (
        <section>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '32px' }}>Results Speak Louder</h2>
                <p style={{ color: 'var(--text-muted)' }}>The feedback speaks for our services.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {testimonials.map(t => (
                    <div key={t.name} className="glass" style={{ padding: '30px' }}>
                        <div style={{ color: 'var(--accent)', marginBottom: '15px' }}>
                            {'★'.repeat(t.stars)}
                        </div>
                        <p style={{ fontStyle: 'italic', marginBottom: '30px', color: 'var(--text-muted)' }}>"{t.quote}"</p>
                        <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '20px' }}>
                            <div style={{ fontWeight: '700' }}>{t.name}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
