import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // Simulate a backend request
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mocking a successful response
            const response = { ok: true };

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    // Reset after transition
                    setTimeout(() => {
                        setStatus('idle');
                        setEmail('');
                        setName('');
                        setMessage('');
                    }, 500);
                }, 3000);
            } else {
                setStatus('error');
                setErrorMessage('Message failed to send. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-stone-100 max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="bg-stone-900 py-10 px-8 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-stone-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                            <div className="space-y-2">
                                <span className="text-primary font-bold uppercase text-xs tracking-widest">Get in Touch</span>
                                <h3 className="font-serif text-3xl font-bold tracking-tight">Contact INM8TE</h3>
                                <p className="text-stone-400 text-sm mt-2 flex items-center gap-2">
                                    <Mail size={14} />
                                    <a href="mailto:support@inm8tebook.net" className="hover:text-white transition-colors underline decoration-stone-700 underline-offset-4">
                                        support@inm8tebook.net
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="p-10">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div className="space-y-4 text-center">
                                        <h4 className="font-serif text-3xl font-bold text-stone-900">Message Sent.</h4>
                                        <p className="text-stone-500 font-medium italic">We have received your message and will get back to you shortly.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-3 text-red-600 font-medium text-sm"
                                        >
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </motion.div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                                            <User size={12} /> Name <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                                            <Mail size={12} /> Email Address <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@email.com"
                                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                                            <MessageSquare size={12} /> Message <span className="text-primary">*</span>
                                        </label>
                                        <textarea
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="How can we help you?"
                                            rows={4}
                                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === 'loading'}
                                        type="submit"
                                        className={`w-full py-5 mt-2 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl ${status === 'loading'
                                            ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                            : 'bg-stone-900 text-white hover:bg-primary shadow-stone-900/10'
                                            }`}
                                    >
                                        {status === 'loading' ? (
                                            <div className="w-5 h-5 border-2 border-stone-400 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
