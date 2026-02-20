import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Send } from 'lucide-react';

interface SubscribeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
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
                        {/* Header */}
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
                            {/* 
                                STANDARD HTML FORM POST
                                Directly posts to Kit to avoid script hijacking or CORS issues.
                            */}
                            <form
                                action="https://app.kit.com/forms/9095440/subscriptions"
                                className="space-y-6"
                                method="post"
                            >
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                                        <Mail size={12} /> Email Address <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                        name="email_address"
                                        aria-label="Email Address"
                                        placeholder="alex@example.com"
                                        required
                                        type="email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                                        <User size={12} /> Name <span className="text-stone-300 font-normal italic">(Optional)</span>
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                        name="first_name"
                                        aria-label="First Name"
                                        placeholder="Alex Johnson"
                                        type="text"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl bg-stone-900 text-white hover:bg-primary shadow-stone-900/10 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <Send size={18} />
                                        Subscribe
                                    </span>
                                </button>

                                <div className="text-center text-[10px] text-stone-400 uppercase tracking-widest font-black italic mt-4">
                                    We respect your privacy. Unsubscribe at any time.
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
