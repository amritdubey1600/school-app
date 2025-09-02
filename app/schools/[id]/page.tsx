'use client';

import { SchoolValues } from "@/lib/formHelper";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, MapPin, Phone, Mail, GraduationCap, Star, Users, Building } from "lucide-react";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";
import Image from "next/image";

export default function SchoolDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const [school, setSchool] = useState<SchoolValues | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSchool = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/schools?id=${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch school details');
                }
                const data = await response.json();
                if (data.length === 0) {
                    throw new Error('School not found');
                }
                setSchool(data[0]);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchSchool();
        }
    }, [id]);

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return <ErrorPage error={error} />;
    }

    if (!school) {
        return <ErrorPage error="School not found" />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-6xl mx-auto pt-24 px-6 pb-16">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-white hover:text-emerald-400 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Schools
                    </button>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* School Image */}
                        <div className="w-full lg:w-1/3">
                            <div className="aspect-video relative bg-white/10 rounded-2xl overflow-hidden border border-white/20">
                                {typeof school.image === 'string' && school.image ? (
                                    <Image
                                        fill
                                        src={school.image}
                                        alt={school.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <GraduationCap className="h-16 w-16 text-white/40" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* School Info */}
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                {school.name}
                            </h1>
                            
                            <div className="flex items-center text-gray-300 mb-6">
                                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                                <span className="text-lg">
                                    {school.address}, {school.city}, {school.state}
                                </span>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="flex items-center mb-2">
                                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                                        <span className="text-white font-medium">Rating</span>
                                    </div>
                                    <p className="text-2xl font-bold text-white">4.8</p>
                                    <p className="text-gray-300 text-sm">Excellent</p>
                                </div>
                                
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="flex items-center mb-2">
                                        <Users className="h-5 w-5 text-emerald-400 mr-2" />
                                        <span className="text-white font-medium">Students</span>
                                    </div>
                                    <p className="text-2xl font-bold text-white">1,200+</p>
                                    <p className="text-gray-300 text-sm">Enrolled</p>
                                </div>
                                
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="flex items-center mb-2">
                                        <Building className="h-5 w-5 text-blue-400 mr-2" />
                                        <span className="text-white font-medium">Campus</span>
                                    </div>
                                    <p className="text-2xl font-bold text-white">25</p>
                                    <p className="text-gray-300 text-sm">Acres</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">About {school.name}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {school.name} is a prestigious educational institution committed to providing 
                                exceptional learning experiences. Located in the heart of {school.city}, {school.state}, 
                                our school has been shaping young minds and fostering academic excellence for years.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We offer a comprehensive curriculum designed to prepare students for success in 
                                higher education and their future careers. Our dedicated faculty and state-of-the-art 
                                facilities provide an environment where students can thrive academically, socially, and personally.
                            </p>
                        </div>

                        {/* Programs & Features */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Programs & Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-gray-900">Academic Programs</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                            Science & Mathematics
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                            Language Arts
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                            Social Studies
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                            Fine Arts
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-gray-900">Facilities</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            Modern Classrooms
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            Science Laboratories
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            Library & Computer Lab
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            Sports Complex
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Address</p>
                                        <p className="text-gray-600 text-sm">
                                            {school.address}<br />
                                            {school.city}, {school.state}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <a 
                                            href={`tel:${school.contact}`}
                                            className="text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
                                        >
                                            {school.contact}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <a 
                                            href={`mailto:${school.email_id}`}
                                            className="text-emerald-600 hover:text-emerald-700 transition-colors text-sm break-all"
                                        >
                                            {school.email_id}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started</h3>
                            
                            <div className="space-y-3">
                                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                                    Apply Now
                                </button>
                                
                                <button className="w-full bg-white hover:bg-gray-50 text-emerald-600 border border-emerald-600 py-3 px-4 rounded-lg font-medium transition-colors">
                                    Schedule Visit
                                </button>
                                
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors">
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}