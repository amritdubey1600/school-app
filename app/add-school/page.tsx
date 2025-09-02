'use client';

import { useForm } from 'react-hook-form';
import { SchoolValues as SchoolFormValues, formSubmit } from '@/lib/formHelper';
import { Upload, School, MapPin, Phone, Mail } from 'lucide-react';

export default function SchoolFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<SchoolFormValues>();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto pt-24 px-6 pb-16 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-600 rounded-xl">
              <School className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Add New School
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Help expand our directory by adding a new educational institution to our platform.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
            {/* Image Upload */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Upload className="h-4 w-4" />
                School Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "School image is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                />
              </div>
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
            </div>

            {/* School Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <School className="h-4 w-4" />
                School Name
              </label>
              <input
                {...register("name", { required: "School name is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter school name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <MapPin className="h-4 w-4" />
                Address
              </label>
              <input
                {...register("address", { required: "Address is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter full address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>

            {/* City and State Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  City
                </label>
                <input
                  {...register("city", { required: "City is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter city"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  State
                </label>
                <input
                  {...register("state", { required: "State is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter state"
                />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Phone className="h-4 w-4" />
                Contact Number
              </label>
              <input
                type="tel"
                {...register("contact", {
                  required: "Contact number is required",
                  valueAsNumber: true,
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter contact number"
              />
              {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Mail className="h-4 w-4" />
                Email Address
              </label>
              <input
                type="email"
                {...register("email_id", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter email address"
              />
              {errors.email_id && <p className="text-red-500 text-sm mt-1">{errors.email_id.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                Add School
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}