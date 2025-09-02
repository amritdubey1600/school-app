'use client';

import { SchoolValues } from "@/lib/formHelper";
import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import { SchoolCard } from "@/components/schoolCard";
import LoadingPage from "../loading";
import ErrorPage from "../error";

// Main Schools Page
export default function SchoolsPage() {
  const [schools, setSchools] = useState<SchoolValues[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch schools data
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/schools');
        if (!response.ok) {
          throw new Error('Failed to fetch schools');
        }
        const data = await response.json();
        setSchools(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  // Filter schools based on search query
  const filteredSchools = useMemo(() => {
    if (!searchQuery.trim()) return schools;
    
    const query = searchQuery.toLowerCase();
    return schools.filter(school => 
      school.name.toLowerCase().includes(query) ||
      school.city.toLowerCase().includes(query) ||
      school.state.toLowerCase().includes(query) ||
      school.address.toLowerCase().includes(query)
    );
  }, [schools, searchQuery]);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl mt-8 font-bold text-white mb-4">
            Find Your Ideal School
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Discover quality educational institutions that match your goals and preferences.
          </p>
          
          {/* Centered Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
              <input
                type="text"
                placeholder="Search schools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Results Counter */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-600">
            {filteredSchools.length === schools.length 
              ? `${schools.length} schools available` 
              : `${filteredSchools.length} of ${schools.length} schools`
            }
          </p>
          
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-emerald-600 hover:text-emarald-700 transition-colors"
            >
              Clear search
            </button>
          )}
        </div>

        {/* No Results */}
        {filteredSchools.length === 0 && searchQuery && (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto border border-gray-200">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No schools found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or browse all available schools.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View All Schools
              </button>
            </div>
          </div>
        )}

        {/* Schools Grid */}
        {filteredSchools.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchools.map((school: SchoolValues) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}