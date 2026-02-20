import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SubscribeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
        // Load Kit script when modal opens
        if (isOpen && !scriptRef.current) {
            const script = document.createElement('script');
            script.src = "https://f.convertkit.com/ckjs/ck.5.js";
            script.async = true;
            document.body.appendChild(script);
            scriptRef.current = script;
        }
    }, [isOpen]);

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
                            {/* Kit Form Embed (Converted to JSX) */}
                            <form
                                action="https://app.kit.com/forms/9095440/subscriptions"
                                className="seva-form formkit-form space-y-6"
                                method="post"
                                data-sv-form="9095440"
                                data-uid="30fbfdd215"
                                data-format="modal"
                                data-version="5"
                                data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                                style={{ borderRadius: '0px' }}
                            >
                                <div data-style="full" style={{ display: 'block' }}>
                                    <ul className="formkit-alert formkit-alert-error text-red-500 text-sm text-center mb-4" data-element="errors" data-group="alert"></ul>

                                    <div data-element="fields" className="seva-fields formkit-fields space-y-6">
                                        <div className="formkit-field space-y-2">
                                            <input
                                                className="formkit-input w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                                name="email_address"
                                                aria-label="Email Address"
                                                placeholder="Email Address"
                                                required
                                                type="email"
                                            />
                                        </div>

                                        <div className="formkit-field space-y-2">
                                            <input
                                                className="formkit-input w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-stone-50 text-stone-900 transition-all font-medium"
                                                name="first_name"
                                                aria-label="First Name"
                                                placeholder="First Name (Optional)"
                                                type="text"
                                            />
                                        </div>

                                        <button
                                            data-element="submit"
                                            className="formkit-submit w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl bg-stone-900 text-white hover:bg-primary shadow-stone-900/10"
                                        >
                                            <span className="">Subscribe</span>
                                        </button>
                                    </div>
                                    <div className="formkit-disclaimer text-center text-[10px] text-stone-400 uppercase tracking-widest font-black italic mt-4" data-element="disclaimer">
                                        We respect your privacy. Unsubscribe at any time.
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
