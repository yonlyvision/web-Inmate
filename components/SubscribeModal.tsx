import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, User, Mail } from 'lucide-react';

interface SubscribeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        memberType: '' as 'inmate' | 'client' | ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            console.log('Submitting to Kit Form 9095440...');

            const body = new FormData();
            body.append('email_address', formData.email);
            if (formData.name) body.append('first_name', formData.name);

            // Use 'no-cors' mode to bypass CORS. 
            // The response will be opaque (we can't read it), but the submission will verify on Kit's side.
            await fetch('https://app.kit.com/forms/9095440/subscriptions', {
                method: 'POST',
                body: body,
                mode: 'no-cors'
            });

            // Optimistically assume success since we can't read the response in no-cors mode
            // If it failed network-wise, it would throw an error caught below.
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ email: '', name: '', memberType: '' });
            }, 3000);

        } catch (err) {
            console.error('Submission error:', err);
            setStatus('idle');
            alert('An error occurred. Please check your connection and try again.');
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
                        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-stone-100"
                    >
                        {/* Header/Banner */}
                        <div className="bg-stone-900 py-10 px-8 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-stone-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                            <div className="space-y-2">
                                <span className="text-primary font-bold uppercase text-xs tracking-widest">Stay Connected</span>
                                <h3 className="font-serif text-3xl font-bold tracking-tight">Subscribe to INM8TE</h3>
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
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold text-stone-900">You're on the list!</h4>
                                        <p className="text-stone-500 font-medium italic">Welcome to the family. Check your inbox soon.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                                            <Mail size={12} /> Email Address <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="alex@example.com"
                                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                                            <User size={12} /> Name <span className="text-stone-300 font-normal italic">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Alex Johnson"
                                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === 'loading'}
                                        className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl ${status === 'loading'
                                            ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                            : 'bg-stone-900 text-white hover:bg-primary shadow-stone-900/10'
                                            }`}
                                    >
                                        {status === 'loading' ? (
                                            <div className="w-5 h-5 border-2 border-stone-400 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Subscribe
                                            </>
                                        )}
                                    </motion.button>
                                    <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest font-black italic">
                                        Weekly stories, no spam.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
