import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Parent",
        content: "This platform made finding the right school for my daughter so much easier. The detailed information and reviews were invaluable.",
        rating: 5,
        location: "New York, NY"
    },
    {
        name: "Michael Chen",
        role: "Student",
        content: "I found my dream school through this platform. The search filters helped me narrow down exactly what I was looking for.",
        rating: 5,
        location: "Los Angeles, CA"
    },
    {
        name: "Emily Rodriguez",
        role: "Parent",
        content: "Excellent service! The team was helpful throughout the entire school selection process. Highly recommended.",
        rating: 5,
        location: "Chicago, IL"
    }
];

export default function TestimonialsSection(){
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal direction="down">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        What Families Say
                    </h2>
                    <p className="text-xl text-gray-600">
                        Trusted by thousands of families nationwide
                    </p>
                </div>
                </Reveal>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Reveal key={index} direction="down">
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">`{testimonial.content}`</p>
                            <div className="border-t border-gray-100 pt-4">
                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</div>
                            </div>
                        </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}