import CTASection from "@/sections/CTA";
import FeaturesSection from "@/sections/Features";
import HeroSection from "@/sections/Hero";
import TestimonialsSection from "@/sections/Testimonials";
import WorkingsSection from "@/sections/Workings";

export default function Homepage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* How It Works Section */}
            <WorkingsSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}