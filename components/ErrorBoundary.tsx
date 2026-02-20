import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-black text-white p-10 font-sans">
                    <div className="max-w-2xl space-y-6">
                        <h1 className="text-3xl font-bold text-red-500">Something went wrong.</h1>
                        <p className="text-stone-400">Please verify the application logs or contact support.</p>
                        <div className="bg-stone-900 p-6 rounded-xl overflow-auto border border-white/10">
                            <code className="text-sm font-mono text-red-400">
                                {this.state.error?.toString()}
                            </code>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-200"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
