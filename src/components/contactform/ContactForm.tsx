"use client";

import React, { useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    serviceType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const serviceTypes = [
    "Bridal Makeup",
    "Party Makeup",
    "Photoshoot Makeup",
    "Editorial Makeup",
    "Special Effects",
    "Makeup Lessons",
    "Group Bookings"
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string | undefined> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent successfully. We'll get back to you soon!");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      serviceType: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        
        {/* Form Header */}
        <div className="text-center mb-8 pt-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Let's Create Magic Together
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            Ready to transform your look? Fill out the form below and let's discuss how we can make your vision come to life.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-50 blur-xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full opacity-50 blur-xl animate-pulse"></div>
          
          <div className="relative z-10 p-6 md:p-10 lg:p-12">
            <div className="space-y-8">
              
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="text-sm  font-semibold text-gray-300  tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-white hover:bg-white/15`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-semibold text-gray-300  tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-white hover:bg-white/15`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>
              </div>

              {/* Phone and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-300 tracking-wide">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-white hover:bg-white/15"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-300  tracking-wide">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-white hover:bg-white/15 [color-scheme:dark]"
                  ></input>
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-300 tracking-wide">
                  Service Type *
                </label>
                <div className="relative">
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-white/10 border ${errors.serviceType ? 'border-red-400' : 'border-white/20'} rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer text-white hover:bg-white/15`}
                  >
                    <option value="" className="bg-black text-white">Select a service...</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service} className="bg-black text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.serviceType && <p className="text-red-400 text-sm">{errors.serviceType}</p>}
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-300    tracking-wide">
                  Tell us about your vision
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 resize-none text-white hover:bg-white/15"
                  placeholder="Describe your event, style preferences, inspiration, or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 shadow-lg hover:shadow-pink-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Your Message...</span>
                    </div>
                  ) : (
                    "Send Message & Book Consultation ✨"
                  )}
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-300">Email Us</h3>
                  <p className="text-gray-400 text-sm">product-salon@zerotech.com</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-indigo-500/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-300">Call Us</h3>
                  <p className="text-gray-400 text-sm">+91 75400 88390</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-400/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-300">Response Time</h3>
                  <p className="text-gray-400 text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;