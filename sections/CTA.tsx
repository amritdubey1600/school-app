import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function CTASection(){
    return (
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Reveal direction="down">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Find Your Perfect School?
                </h2>
                <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                    Join thousands of families who have found their ideal educational match through our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={'/schools'}>
                      <button className="w-full sm:w-auto bg-white hover:cursor-pointer hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 shadow-lg flex items-center justify-center">
                        Start Your Search
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </Link>
                    <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105">
                        Learn More
                    </button>
                </div>
                </Reveal>
            </div>
        </div>
    );
}