"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaHome, FaLeaf } from "react-icons/fa";
import AnimatedSection from "@/components/Animation/AnimatedSection";

const ProjectsPage = () => {
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
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-green-800 via-green-700 to-green-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/gallery/images/Choose-Project-Picture1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <FaHome className="w-4 h-4 text-green-300" />
              <span className="font-medium">Premium Developments</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-green-300">Projects</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of nature-centric communities designed for modern luxury living
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <AnimatedSection 
                key={index}
                animation="scale-in" 
                delay={index * 100}
                className="text-center"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaLeaf className="w-4 h-4" />
              Featured Projects
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Discover Our Premium Developments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to sustainable luxury and nature-integrated living
            </p>
          </AnimatedSection>
          
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <AnimatedSection 
                key={project.id}
                animation="fade-in" 
                delay={index * 200}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                      project.status === 'Available' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500 text-sm">{project.type}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                    <span>{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={project.href}>
                    <Button size="lg" className="group bg-green-600 hover:bg-green-700 text-white px-6">
                      Explore Project
                      <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <FaHome className="w-12 h-12 text-white" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Explore our premium projects and discover the perfect blend of luxury and nature. 
              Our expert team is ready to help you find your ideal property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 px-8">
                  Schedule Site Visit
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
//                     <h3 className="text-2xl font-bold mb-2">Trulife</h3>
//                     <p className="text-sm">Resort-themed Villa Estate</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
            
//             <Link href="/projects/bunglows">
//               <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
//                 <Image
//                   src="/gallery/images/Choose-Project-Picture2.jpg"
//                   alt="Bungalows Project"
//                   width={400}
//                   height={300}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <h3 className="text-2xl font-bold mb-2">Bungalows</h3>
//                     <p className="text-sm">Luxury Bungalow Communities</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
            
//             <Link href="/projects/farm-houses">
//               <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
//                 <Image
//                   src="/gallery/images/Choose-Project-Picture3.jpg"
//                   alt="Farm Houses Project"
//                   width={400}
//                   height={300}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <h3 className="text-2xl font-bold mb-2">Farm Houses</h3>
//                     <p className="text-sm">Rural Retreat Properties</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
            
//             <Link href="/projects/na-plots">
//               <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
//                 <Image
//                   src="/gallery/images/Choose-Project-Picture4.jpg"
//                   alt="NA Plots Project"
//                   width={400}
//                   height={300}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <h3 className="text-2xl font-bold mb-2">NA Plots</h3>
//                     <p className="text-sm">Premium Land Plots</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="ProjectHighlights px-8 sm:px-48 py-12 bg-white">
//         <div className="flex flex-col items-center gap-8">
//           <SectionHeader 
//             title="Why Choose Our Projects" 
//             subTitle="What Makes Our Developments Special" 
//             titleColor="text-secondary" 
//             subTitleColor="text-lime-900" 
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center p-6 bg-gray-50 rounded-lg">
//               <h4 className="text-lg font-semibold text-secondary mb-2">Sustainable Design</h4>
//               <p className="text-gray-600 text-sm">Eco-friendly construction with nature integration</p>
//             </div>
//             <div className="text-center p-6 bg-gray-50 rounded-lg">
//               <h4 className="text-lg font-semibold text-secondary mb-2">Prime Locations</h4>
//               <p className="text-gray-600 text-sm">Strategic locations near Mumbai with excellent connectivity</p>
//             </div>
//             <div className="text-center p-6 bg-gray-50 rounded-lg">
//               <h4 className="text-lg font-semibold text-secondary mb-2">Modern Amenities</h4>
//               <p className="text-gray-600 text-sm">Resort-style amenities and world-class facilities</p>
//             </div>
//             <div className="text-center p-6 bg-gray-50 rounded-lg">
//               <h4 className="text-lg font-semibold text-secondary mb-2">Managed Communities</h4>
//               <p className="text-gray-600 text-sm">Professionally managed with 24/7 security</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="CTA px-8 sm:px-48 py-12 bg-primary text-white">
//         <div className="flex flex-col items-center gap-6 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold">Ready to Find Your Dream Home?</h2>
//           <p className="text-lg opacity-90">
//             Explore our projects and discover the perfect property for your lifestyle
//           </p>
//           <Link href="/contact">
//             <Button
//               variant="secondary"
//               size="lg"
//               className="shadow-xl bg-secondary text-white hover:bg-secondary/90"
//             >
//               Contact Us Today
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProjectsPage;
