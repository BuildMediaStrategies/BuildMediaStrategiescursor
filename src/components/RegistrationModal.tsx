import React, { useState } from 'react';
import { X, User, Mail, Lock, Phone } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {!isSubmitted ? (
          // Registration Form
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 id="registration-modal-title" className="text-2xl font-bold text-gray-900">Create Account</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="Close registration modal"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              {/* GDPR Consent */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="gdpr-consent"
                  required
                  className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor="gdpr-consent" className="text-sm text-black">
                  I consent to BuildMediaStrategies collecting and storing my personal information for account creation and service delivery. Read our{' '}
                  <a href="#" className="text-black hover:underline focus:outline focus:outline-2 focus:outline-black">Privacy Policy</a>.
                </label>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor="terms" className="text-sm text-black">
                  I agree to the{' '}
                  <a href="#" className="text-black hover:underline focus:outline focus:outline-2 focus:outline-black">Terms of Service</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-6"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-black mt-6">
              Already have an account?{' '}
              <a href="#" className="text-black hover:underline font-medium">
                Sign in
              </a>
            </p>
          </div>
        ) : (
          // Success Message
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-sky-gradient mb-2">Registration Successful!</h2>
            <p className="text-black mb-6">
              Welcome to OpenMint! Your account has been created successfully.
            </p>
            <button
              onClick={handleClose}
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
}