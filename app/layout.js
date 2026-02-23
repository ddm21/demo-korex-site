import './globals.css';

export const metadata = {
    title: 'Korex Audit | Professional Automation & Workflow Audit',
    description: 'Stop doing robot work. Get a professional automation audit and scale your business without hiring more staff.',
    keywords: 'automation audit, workflow optimization, business scaling, efficiency, robot work, korex',
    openGraph: {
        title: 'Korex Audit | Professional Automation & Workflow Audit',
        description: 'Stop doing robot work. Get a professional automation audit and scale your business without hiring more staff.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <nav style={{
                    height: 'var(--nav-height)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: 'rgba(5, 7, 10, 0.8)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                        <div style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-1px' }}>
                            KOREX<span style={{ color: 'var(--primary)' }}>.</span>
                        </div>
                        <div>
                            <a href="#audit-form" className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Get Free Audit</a>
                        </div>
                    </div>
                </nav>
                <main style={{ marginTop: 'var(--nav-height)' }}>
                    {children}
                </main>
                <footer style={{ padding: '80px 20px', textAlign: 'center', borderTop: '1px solid var(--card-border)', marginTop: '100px' }}>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>&copy; {new Date().getFullYear()} Korex. All rights reserved.</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '400px', margin: '0 auto' }}>
                        RDL Colony, Near Jain Mandir GIDC Estate, Ankleswhar, Gujarat, 393002, India
                    </p>
                </footer>
            </body>
        </html>
    );
}
