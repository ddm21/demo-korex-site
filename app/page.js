import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Comparison from '@/components/Comparison';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import AuditForm from '@/components/AuditForm';

export default function Home() {
    return (
        <>
            <Hero />
            <Logos />
            <Comparison />
            <Features />
            <Testimonials />
            <FAQ />

            {/* Final CTA Pre-form */}
            <section style={{ textAlign: 'center', padding: '100px 20px 0' }}>
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>Ready to Reclaim 20 Hours a Week?</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Join dozens of other high-growth brands who have automated their backend today.</p>
            </section>

            <AuditForm />
        </>
    );
}
