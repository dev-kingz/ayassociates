"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaHome, FaLeaf } from "react-icons/fa";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import FloatingElements from "@/components/Enhancement/FloatingElements";
import AnimatedHeroReusable from "@/components/Hero/AnimatedHeroReusable";

const ProjectsPage: React.FC = () => {
  const featuredProjects = [
    {
      id: "trulife",
      title: "Trulife Resort & Residences",
      location: "Nature Valley, Premium Location",
      status: "Ongoing",
      type: "Luxury Resort Community",
      image: "/gallery/images/Trulife-Header-Image1.png",
      description: "A premium resort-style community offering luxury living amidst pristine natural surroundings.",
      features: ["Resort Amenities", "Gated Community", "Nature Trails", "Wellness Center"],
      href: "/projects/trulife"
    },
    {
      id: "farmhouse",
      title: "Nature Farm Houses",
      location: "Scenic Countryside",
      status: "Available",
      type: "Farm House Community",
      image: "/gallery/images/Choose-Project-Picture2.jpg",
      description: "Spacious farm houses designed for sustainable living with modern amenities.",
      features: ["Organic Farming", "Solar Power", "Water Harvesting", "Private Gardens"],
      href: "/projects/farm-houses"
    },
    {
      id: "bungalows",
      title: "Premium Bungalows",
      location: "Green Valley Estate",
      status: "Pre-Launch",
      type: "Luxury Bungalows",
      image: "/gallery/images/Choose-Project-Picture3.jpg",
      description: "Exclusive bungalows with contemporary design and nature integration.",
      features: ["Private Pool", "Smart Home", "Landscaped Gardens", "Security"],
      href: "/projects/bunglows"
    },
    {
      id: "plots",
      title: "NA Approved Plots",
      location: "Multiple Locations",
      status: "Available",
      type: "Investment Plots",
      image: "/gallery/images/Choose-Project-Picture4.jpg",
      description: "Ready-to-build NA approved plots in prime locations with all amenities.",
      features: ["Clear Titles", "Road Access", "Utilities Ready", "Investment Potential"],
      href: "/projects/na-plots"
    }
  ];

  const projectStats = [
    { icon: FaHome, number: "4+", label: "Active Projects" },
    { icon: FaMapMarkerAlt, number: "50+", label: "Acres Developed" },
    { icon: FaCalendarAlt, number: "5+", label: "Years Experience" },
    { icon: FaLeaf, number: "100%", label: "Eco-Friendly" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <AnimatedHeroReusable
        backgroundImage="/gallery/images/Choose-Project-Picture1.jpg"
        badge="Premium Developments"
        title="Our Projects"
        subtitle="Explore our diverse portfolio of nature-centric communities designed for modern luxury living"
        description=""
        primaryButtonText="View All Projects"
        primaryButtonLink="#projects"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 to-green-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <AnimatedSection 
                key={index}
                animation="scale-in" 
                delay={index * 100}
                className="text-center"
              >
                <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-secondary/10 hover-lift">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/5 to-white" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-in" className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-secondary/20">
              <FaLeaf className="w-4 h-4" />
              Featured Projects
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Discover Our Premium <span className="text-secondary">Developments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each project represents our commitment to sustainable luxury and nature-integrated living
            </p>
          </AnimatedSection>
          
          <div className="space-y-24 px-12">
            {featuredProjects.map((project, index) => (
              <AnimatedSection 
                key={project.id}
                animation="fade-in" 
                delay={index * 200}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      project.status === 'Available' ? 'bg-secondary/10 text-secondary border border-secondary/20' :
                      'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">{project.type}</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-gray-600 mb-6">
                    <FaMapMarkerAlt className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-12">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-secondary/5 rounded-xl border border-secondary/10">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex mt-8">
                  <Link href={project.href}>
                    <Button size="lg" className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold hover-lift">
                      Explore Project
                      <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover-lift">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-secondary rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white">
                    <FaHome className="w-12 h-12 text-white" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;