import Image from "next/image";
import { SchoolValues } from "@/lib/formHelper";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function SchoolCard({ school }: { school: SchoolValues }) {
  return (
    <div className="bg-white backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden group hover:shadow-xl hover:shadow-emerald-500/10">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image 
          fill
          alt={school.name}
          src={school.image as string}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-4 line-clamp-2">
          {school.name}
        </h3>
        
        {/* Address */}
        <div className="flex items-start gap-3 mb-4 text-black">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-400" />
          <p className="text-sm line-clamp-2">
            {school.address}, {school.city}, {school.state}
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-black">
            <Phone className="w-4 h-4 flex-shrink-0 text-emerald-400" />
            <span className="text-sm">{school.contact}</span>
          </div>
          
          <div className="flex items-center gap-3 text-black">
            <Mail className="w-4 h-4 flex-shrink-0 text-emerald-400" />
            <span className="text-sm truncate">{school.email_id}</span>
          </div>
        </div>
        
        {/* Action Button */}
        <Link href={`/schools/${school.id}`}>
          <button className="w-full hover:cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium group-hover:shadow-lg group-hover:shadow-emerald-500/20">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}