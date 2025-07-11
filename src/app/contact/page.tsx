"use client";

import ContactForm from "@/components/Forms/ContactForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaBuilding } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import FloatingElements from "@/components/Enhancement/FloatingElements";
import AnimatedHeroReusable from "@/components/Hero/AnimatedHeroReusable";

const ContactPage = () => {
  return (
    <div className="ContactPage flex grow flex-col items-center justify-center self-stretch overflow-x-hidden">
      {/* Animated Hero Section */}
      <AnimatedHeroReusable
        backgroundImage="/gallery/images/Contact-Title-Header-Image.jpg"
        badge="Get In Touch"
        title="Contact Us"
        subtitle="Let's Build Your Dream Home Together"
        description="Ready to embark on your journey to nature-centric living? Our team is here to help you find the perfect property and answer all your questions."
        primaryButtonText="Start Conversation"
        primaryButtonLink="#contact-form"
        secondaryButtonText="View Projects"
        secondaryButtonLink="/projects"
        scrollTarget=".ContactUsCTAs"
      />

      {/* Quick Contact CTAs */}
      <AnimatedSection animation="fade-in" className="ContactUsCTAs relative flex items-center sm:justify-between py-16 px-4 sm:px-16 gap-4 sm:gap-8 self-stretch bg-gradient-to-br from-green-50 via-white to-gray-50 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              Quick Contact
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6">
              Get in Touch <span className="text-secondary">Instantly</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to connect with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up stagger-2">
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-lime-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-6">Chat with us instantly</p>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <FaWhatsapp className="w-5 h-5 mr-2" /> 
                  Start Chat
                </Button>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
                <p className="text-gray-600 mb-6">Send us your inquiry</p>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  <MdOutlineEmail className="w-5 h-5 mr-2" /> 
                  Send Email
                </Button>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-6">Speak with our experts</p>
                <Button className="w-full bg-lime-700 hover:bg-lime-800 text-white">
                  <FaPhone className="w-5 h-5 mr-2" /> 
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection animation="slide-in-left" className="ContactUsSection relative flex flex-col lg:flex-row items-center justify-center self-stretch py-24 px-8 sm:px-16 bg-white gap-16 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        
        <div className="relative z-10 flex-1 max-w-2xl fade-in-left">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              Contact Form
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6">
              Send Us a <span className="text-secondary">Message</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <FaPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email Us</h4>
                  <p className="text-gray-600">info@ayassociates.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
        
        <div className="relative z-10 flex-1 max-w-lg fade-in-right">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent z-10 group-hover:opacity-75 transition-opacity duration-300" />
            <Image
              src="/gallery/images/ContactUsForm.png"
              alt="Contact Us"
              width={600}
              height={400}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Office Locations Section */}
      <AnimatedSection animation="fade-in" className="LocationSection relative flex items-center justify-center flex-col self-stretch py-24 bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden">
        <FloatingElements variant="shapes" density="medium" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              Our Locations
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6">
              Visit Our <span className="text-secondary">Offices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We have multiple locations to serve you better. Visit us at any of our offices or project sites.
            </p>
          </div>

          {/* Main Office Highlight */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-12 fade-in-up stagger-1">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <FaBuilding className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Main Office</h3>
                    <p className="text-secondary">Corporate Headquarters</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Real Tech Park, Office 12, 13, 14, 5th Floor, Sec 30A, Vashi, Navi Mumbai, Maharashtra 400703
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <FaClock className="w-5 h-5 text-secondary" />
                    <span className="text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="w-5 h-5 text-secondary" />
                    <span className="text-gray-600">+91 98765 43210</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <FaMapMarkerAlt className="w-5 h-5 mr-2" /> 
                  View on Maps
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <FaPhone className="w-5 h-5 mr-2" /> 
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>

          {/* Project Locations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up stagger-2">
            {LocationList.map((location, index) => (
              <div
                key={location.title}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-lime-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <LuMapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{location.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{location.address}</p>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-white">
                      <FaMapMarkerAlt className="w-4 h-4 mr-1" /> 
                      Locate
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                      <FaPhone className="w-4 h-4 mr-1" /> 
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 fade-in-up stagger-3">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Visit Us?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a tour of our properties or visit our office to discuss your dream home with our experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <FaMapMarkerAlt className="w-5 h-5 mr-2" /> 
                View All Locations
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <FaPhone className="w-5 h-5 mr-2" /> 
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;

const LocationList = [
  {
    title: "Evernest Prime",
    address:
      "Mhasala Tala Rd, Village Fugarewadi, Ghosale, Roha, Maharashtra 402 109",
  },
  {
    title: "Trulife",
    address:
      "Mhasala Tala Rd, Village Fugarewadi, Ghosale, Roha, Maharashtra 402 109",
  },
  {
    title: "Eco Luxia",
    address:
      "Mhasala Tala Rd, Village Fugarewadi, Ghosale, Roha, Maharashtra 402 109",
  },
];
