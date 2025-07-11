"use client";

import ContactForm from "@/components/Forms/ContactForm";
import TitleHeader from "@/components/Header/TitleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import FloatingElements from "@/components/Enhancement/FloatingElements";

const ContactPage = () => {
  return (
    <div className="ContactPage flex grow flex-col items-center justify-center self-stretch overflow-x-hidden">
      <TitleHeader image="/gallery/images/Contact-Title-Header-Image.jpg" titleText="Contact Us" subTitleText="Get in touch with us" />

      <AnimatedSection animation="fade-in" className="ContactUsCTAs relative flex items-center sm:justify-between py-8 px-3 sm:px-14 gap-1 sm:gap-4 self-stretch bg-gradient-to-br from-green-50 via-white to-gray-50 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        <div className="relative z-10 flex items-center justify-center gap-4 w-full">
          <Button className="grow px-2 sm:px-6 flex gap-2 sm:h-12 text-sm sm:text-base bg-secondary hover:bg-secondary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <FaWhatsapp className="w-6 h-6" /> WhatsApp
          </Button>
          <Button className="grow px-2 sm:px-6 flex gap-2 sm:h-12 text-sm sm:text-base bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <MdOutlineEmail className="w-6 h-6" /> Mail
          </Button>
          <Button className="grow px-2 sm:px-6 flex gap-2 sm:h-12 text-sm sm:text-base bg-secondary hover:bg-secondary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <LuMapPin className="w-6 h-6" /> Locate
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-in-left" className="ContactUsSection flex flex-col gap-8 sm:gap-0 sm:flex-row items-center justify-center self-stretch grow py-10 px-8 sm:px-14 bg-white">
        <div className="ContactUsForm flex items-center justify-center flex-col grow self-stretch basis-1/2 fade-in-left">
          <ContactForm />
        </div>
        <div className="ContactUsFormImage flex items-center justify-center flex-col grow relative self-stretch basis-1/2 fade-in-right">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <Image
              src="/gallery/images/ContactUsForm.png"
              alt="Contact Us"
              width={550}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-in" className="ContactUsSection relative flex items-center justify-center flex-col self-stretch grow py-16 bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        <div className="relative z-10 Title flex items-center justify-center flex-col grow gap-2 text-center fade-in-up">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Our Location
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-primary leading-snug">
            Main <span className="text-green-600">Office</span>
          </h2>
          <p className="text-secondary font-secondary max-w-2xl text-lg leading-relaxed">
            Real Tech Park, Office 12, 13, 14, 5th Floor, Sec 30A, Vashi, Navi
            Mumbai, Maharashtra 400703
          </p>
        </div>
        
        <div className="LocationCards self-stretch flex flex-col sm:flex-row items-center justify-center grow py-14 px-8 sm:px-14 gap-10">
          {LocationList.map((location) => (
            <div
              key={location.title}
              className="LocationCard text-secondary border border-secondary shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start p-5 rounded-2xl justify-center flex-col gap-2 hover:scale-105 transform"
            >
              <LuMapPin className="w-10 h-10" />
              <h2 className="text-xl font-semibold">{location.title}</h2>
              <h2 className="font-secondary text-sm">{location.address}</h2>
            </div>
          ))}
        </div>
        
        <div className="CTAs self-stretch flex flex-col sm:flex-row items-center justify-center grow py-10 px-8 sm:px-14 gap-10">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="self-stretch sm:self-auto flex gap-2 h-12 hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
          >
            <FaMapMarkerAlt className="w-6 h-6" /> View on Google Maps
          </Button>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="self-stretch sm:self-auto flex gap-2 h-12 hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
          >
            <FaPhone className="w-6 h-6" /> Schedule a Tour
          </Button>
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
