'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, X, School, Plus } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Schools', href: '/schools', icon: School },
    { name: 'Add School', href: '/add-school', icon: Plus },
  ];

  return (
    <nav className="bg-gray-800/90 backdrop-blur-md border-b border-gray-700/50 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-emerald-600 rounded-lg group-hover:bg-emerald-700 transition-colors">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
              EduFinder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors duration-200 group"
                >
                  <Icon className="h-4 w-4 group-hover:text-emerald-400 transition-colors" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700/50">
            <div className="py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 hover:bg-gray-700/30 px-4 py-3 rounded-lg transition-colors duration-200 group"
                  >
                    <Icon className="h-5 w-5 group-hover:text-emerald-400 transition-colors" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}