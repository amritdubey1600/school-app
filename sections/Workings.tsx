import Reveal from "@/components/Reveal";
import { ChevronRight } from "lucide-react";

export default function WorkingsSection(){
    return (
        <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal direction="down">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Find your ideal school in three simple steps
                    </p>
                </div>
                </Reveal>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Step 1 */}
                    <Reveal direction="down">
                    <div className="text-center relative">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full text-2xl font-bold mb-6">
                            1
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Browse Schools</h3>
                        <p className="text-gray-600">
                            Explore our comprehensive directory of quality schools with detailed profiles and information.
                        </p>
                        {/* Arrow */}
                        <div className="hidden md:block absolute top-10 -right-4 text-gray-300">
                            <ChevronRight className="h-8 w-8" />
                        </div>
                    </div>
                    </Reveal>
                    
                    {/* Step 2 */}
                    <Reveal direction="down">
                    <div className="text-center relative">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full text-2xl font-bold mb-6">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Compare & Review</h3>
                        <p className="text-gray-600">
                            Compare schools side-by-side and read authentic reviews from parents and students.
                        </p>
                        {/* Arrow */}
                        <div className="hidden md:block absolute top-10 -right-4 text-gray-300">
                            <ChevronRight className="h-8 w-8" />
                        </div>
                    </div>
                    </Reveal>
                    
                    {/* Step 3 */}
                    <Reveal direction="down">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 text-purple-600 rounded-full text-2xl font-bold mb-6">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Connect & Apply</h3>
                        <p className="text-gray-600">
                            Contact schools directly and start your application process with confidence.
                        </p>
                    </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}