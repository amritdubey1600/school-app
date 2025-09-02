import Reveal from "@/components/Reveal";
import { GraduationCap, Award, Users, Target, Shield, BookOpen } from "lucide-react";

const features = [
    {
        icon: GraduationCap,
        title: "Quality Education",
        description: "Access to top-rated schools with excellent academic programs and experienced faculty.",
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        icon: Award,
        title: "Verified Quality",
        description: "All schools are thoroughly vetted and verified to ensure the highest educational standards.",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: Users,
        title: "Community Reviews",
        description: "Real reviews from parents and students to help you make informed decisions.",
        color: "bg-purple-50 text-purple-600"
    },
    {
        icon: Target,
        title: "Perfect Match",
        description: "Find schools that align with your goals, interests, and educational preferences.",
        color: "bg-yellow-50 text-yellow-600"
    },
    {
        icon: Shield,
        title: "Trusted Platform",
        description: "Secure and reliable platform trusted by thousands of families nationwide.",
        color: "bg-red-50 text-red-600"
    },
    {
        icon: BookOpen,
        title: "Comprehensive Info",
        description: "Detailed information about academics, facilities, fees, and admission processes.",
        color: "bg-indigo-50 text-indigo-600"
    }
];

export default function FeaturesSection(){
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal direction="down">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Why Choose Our Platform?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We make school selection simple, transparent, and effective with cutting-edge tools 
                        and comprehensive information.
                    </p>
                </div>
                </Reveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Reveal key={index} direction="down">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6`}>
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}