'use client';

import { useState, useEffect } from 'react';
import { bebasNeue, dmSans, dmSerif } from '@/app/lib/fonts';
import { useModal } from '@/app/lib/modal-context';


export default function ContactModal() {
    const { isOpen, closeModal } = useModal();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    // Animate in/out
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => setShow(true));
        } else {
            setShow(false);
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            closeModal();
            setSubmitted(false);
            setError('');
            setFormState({ name: '', email: '', phone: '', message: '' });
        }, 400);
    };

    const GOOGLE_FORM_ACTION =
        'https://docs.google.com/forms/d/e/1FAIpQLSfmDDr1rr2i4cVqUYWd61nbd1syLMYzdyvas-owXMrEA3MKgA/formResponse';

    const FIELD_MAP = {
        name: 'entry.2005620554',
        email: 'entry.1045781291',
        phone: 'entry.1166974658',
        message: 'entry.839337160',
    } as const;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Build a hidden form targeting the invisible iframe
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = GOOGLE_FORM_ACTION;
            form.target = 'google_form_iframe';
            form.style.display = 'none';

            const entries: [string, string][] = [
                [FIELD_MAP.name, formState.name],
                [FIELD_MAP.email, formState.email],
                [FIELD_MAP.phone, formState.phone],
                [FIELD_MAP.message, formState.message],
            ];

            for (const [key, value] of entries) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            }

            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);

            // Google Forms doesn't return a parseable response cross-origin,
            // so we show success after a brief delay.
            setTimeout(() => {
                setSubmitted(true);
                setLoading(false);
            }, 1000);
        } catch {
            setError('Something went wrong. Please try again.');
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[9000] flex items-center justify-center transition-all duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}
            style={{ cursor: 'auto' }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#000]/80 backdrop-blur-md"
                onClick={handleClose}
            />

            {/* Hidden iframe for Google Forms submission */}
            <iframe
                name="google_form_iframe"
                style={{ display: 'none' }}
                title="Google Form Target"
            />

            {/* Modal container */}
            <div
                className={`relative z-10 w-[95vw] max-w-[1000px] max-h-[90vh] overflow-y-auto bg-[#0e0e0e] border border-[#f5f2ec]/10 shadow-2xl transition-all duration-500 ${show ? 'scale-100 translate-y-0' : 'scale-95 translate-y-6'}`}
            >
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 flex items-center justify-center text-[#f5f2ec]/40 hover:text-[#f5f2ec] transition-colors"
                    aria-label="Close"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
                    </svg>
                </button>

                {submitted ? (
                    /* ── SUCCESS STATE ── */
                    <div className="flex flex-col items-center justify-center text-center py-24 sm:py-32 px-8">
                        {/* Animated check circle */}
                        <div className="w-20 h-20 rounded-full border-2 border-[#16A850] flex items-center justify-center mb-8 animate-[scaleIn_0.5s_ease-out]">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M8 16l6 6 10-10" stroke="#16A850" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className={`${bebasNeue.className} text-[#f5f2ec] text-4xl sm:text-5xl mb-4`}>
                            Message Sent!
                        </h3>
                        <p className={`${dmSans.className} text-[#f5f2ec]/60 text-sm sm:text-base max-w-md leading-relaxed mb-10`}>
                            Thank you for reaching out. We&apos;ll get back to you within 24 hours. In the meantime, feel free to check out our work.
                        </p>
                        <button
                            onClick={handleClose}
                            className={`${dmSans.className} bg-[#16A850] text-white px-10 py-3.5 text-sm font-semibold hover:bg-[#149246] transition-all duration-300`}
                        >
                            Back to Site
                        </button>
                    </div>
                ) : (
                    /* ── FORM STATE ── */
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr]">
                        {/* Left — Branding panel */}
                        <div className="relative overflow-hidden bg-[#111] px-8 sm:px-10 py-12 sm:py-16 flex flex-col justify-between">
                            {/* Subtle grid */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                backgroundImage: 'linear-gradient(rgba(245,242,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,236,0.03) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }} />

                            <div className="relative z-10">
                                <div className={`${dmSans.className} flex items-center gap-3 mb-8`}>
                                    <div className="w-8 h-[2px] bg-[#16A850]" />
                                    <span className="text-[#16A850] text-[10px] uppercase tracking-[0.25em] font-medium">
                                        Let&apos;s Talk
                                    </span>
                                </div>

                                <h2 className={`${bebasNeue.className} text-[#f5f2ec] leading-[0.95] mb-6`}
                                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                                    Start Your<br />
                                    <span className="text-[#16A850]">Next Project</span>
                                </h2>

                                <p className={`${dmSans.className} text-[#f5f2ec]/50 text-sm leading-relaxed max-w-xs`}>
                                    Tell us about your vision and we&apos;ll craft a plan tailored to your brand. No commitments — just a conversation.
                                </p>
                            </div>

                            <div className="relative z-10 mt-10 flex flex-col gap-5">
                                {/* Quick info cards */}
                                {[
                                    { icon: '✉', text: 'clyoro.creative@gmail.com' },
                                    { icon: '⏱', text: 'We respond within 24 hours' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="text-sm">{item.icon}</span>
                                        <span className={`${dmSans.className} text-[#f5f2ec]/40 text-xs`}>{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative big number */}
                            <div className={`${bebasNeue.className} absolute -bottom-6 -right-4 text-[14rem] text-[#f5f2ec] opacity-[0.03] leading-none select-none pointer-events-none`}>
                                ?
                            </div>
                        </div>

                        {/* Right — Form */}
                        <form onSubmit={handleSubmit} className="px-8 sm:px-10 py-12 sm:py-16 space-y-6">
                            {/* Name */}
                            <div>
                                <label className={`${dmSans.className} text-[#f5f2ec]/50 text-[10px] uppercase tracking-[0.2em] font-medium block mb-2`}>
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                    className={`${dmSans.className} w-full bg-transparent border-b border-[#f5f2ec]/15 text-[#f5f2ec] text-sm py-3 outline-none focus:border-[#16A850] transition-colors duration-300 placeholder:text-[#f5f2ec]/20`}
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className={`${dmSans.className} text-[#f5f2ec]/50 text-[10px] uppercase tracking-[0.2em] font-medium block mb-2`}>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                    className={`${dmSans.className} w-full bg-transparent border-b border-[#f5f2ec]/15 text-[#f5f2ec] text-sm py-3 outline-none focus:border-[#16A850] transition-colors duration-300 placeholder:text-[#f5f2ec]/20`}
                                    placeholder="john@company.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className={`${dmSans.className} text-[#f5f2ec]/50 text-[10px] uppercase tracking-[0.2em] font-medium block mb-2`}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formState.phone}
                                    onChange={e => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                                    className={`${dmSans.className} w-full bg-transparent border-b border-[#f5f2ec]/15 text-[#f5f2ec] text-sm py-3 outline-none focus:border-[#16A850] transition-colors duration-300 placeholder:text-[#f5f2ec]/20`}
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className={`${dmSans.className} text-[#f5f2ec]/50 text-[10px] uppercase tracking-[0.2em] font-medium block mb-2`}>
                                    Your Query *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                    className={`${dmSans.className} w-full bg-transparent border-b border-[#f5f2ec]/15 text-[#f5f2ec] text-sm py-3 outline-none focus:border-[#16A850] transition-colors duration-300 placeholder:text-[#f5f2ec]/20 resize-none`}
                                    placeholder="Tell us your query — what do you need help with?"
                                />
                            </div>

                            {/* Error message */}
                            {error && (
                                <p className={`${dmSans.className} text-red-400 text-xs text-center bg-red-400/10 border border-red-400/20 py-2.5 px-4`}>
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`${dmSans.className} group w-full bg-[#16A850] text-white py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#149246] hover:shadow-[0_0_30px_rgba(22,168,80,0.25)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed`}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                    {!loading && (
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            <p className={`${dmSans.className} text-[#f5f2ec]/25 text-[10px] text-center pt-2`}>
                                We respect your privacy. No spam, ever.
                            </p>
                        </form>
                    </div>
                )}

                {/* Keyframes for success animation */}
                <style>{`
          @keyframes scaleIn {
            0% { transform: scale(0); opacity: 0; }
            60% { transform: scale(1.15); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
            </div>
        </div>
    );
}
