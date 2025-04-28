'use client';

import { useRouter } from 'next/navigation';

export default function ComingSoon() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
                <p className="text-gray-400 mb-8">This feature is not yet available.</p>
                <button 
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                >
                    Back
                </button>
            </div>
        </div>
    );
} 