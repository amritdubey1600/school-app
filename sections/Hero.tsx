import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function HeroSection(){
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
            
            <div className="max-w-6xl mx-auto px-6 py-20 relative">
                <div className="text-center mb-12">
                    <Reveal direction="left">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Find Your Perfect
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                            Educational Journey
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Discover exceptional schools that match your goals, values, and aspirations.
                    </p>
                    
                    {/* Quick Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={'/schools'}>
                          <button className="w-full sm:w-auto bg-white hover:cursor-pointer hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-xl font-medium transition-all hover:scale-105 shadow-lg text-lg">
                            Browse All Schools
                          </button>
                        </Link>
                        <button className="bg-emerald-600/20 hover:bg-emerald-600/30 text-white border border-emerald-400 px-10 py-5 rounded-xl font-medium transition-all hover:scale-105 text-lg">
                            How It Works
                        </button>
                    </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}