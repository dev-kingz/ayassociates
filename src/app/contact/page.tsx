import ContactForm from "@/components/Forms/ContactForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="ContactPage flex grow flex-col items-center justify-center self-stretch">
      <section className="relative flex h-[80vh] grow items-center justify-center self-stretch bg-hero bg-cover bg-center pt-3 sm:h-[90vh]"></section>
      <section className="flex items-center justify-between py-6 px-8 sm:px-14 gap-4 self-stretch">
        <Button size={"lg"} className="grow flex gap-2 h-12 text-base">
          <FaWhatsapp className="w-6 h-6" /> WhatsApp
        </Button>
        <Button size={"lg"} className="grow flex gap-2 h-12 text-base">
          <MdOutlineEmail className="w-6 h-6" /> Mail
        </Button>
        <Button size={"lg"} className="grow flex gap-2 h-12 text-base">
          <LuMapPin className="w-6 h-6" /> Locate
        </Button>
      </section>
      <section className="ContactUsSection flex items-center justify-center self-stretch grow py-10 px-8 sm:px-14">
        <div className="ContactUsForm flex items-center justify-center flex-col grow self-stretch basis-1/2">
          <ContactForm />
        </div>
        <div className="ContactUsFormImage flex items-center justify-center flex-col grow relative self-stretch basis-1/2">
          <Image
            src="/gallery/images/ContactUsForm.png"
            alt="Contact Us"
            width={550}
            height={300}
            className="rounded-md object-cover"
          />
        </div>
      </section>
      <section className="ContactUsSection flex items-center justify-center flex-col self-stretch grow">
        <div className="Title flex items-center justify-center flex-col grow gap-2">
          <h2 className="text-2xl sm:text-4xl font semibold text-primary leading-snug">
            Main Office
          </h2>
          <h2 className="text-secondary font-secondary">
            Real Tech Park, Office 12, 13, 14, 5th Floor, Sec 30A, Vashi, Navi
            Mumbai, Maharashtra 400703
          </h2>
        </div>
        <div className="LocationCards self-stretch flex items-center justify-center grow py-14 px-8 sm:px-14 gap-10">
          {LocationList.map((location) => (
            <div key={location.title} className="LocationCard text-secondary border border-secondary shadow flex items-start p-5 rounded-md justify-center flex-col gap-2">
              <LuMapPin className="w-10 h-10" />
              <h2 className="text-xl font-semibold">{location.title}</h2>
              <h2 className="font-secondary text-sm">{location.address}</h2>
            </div>
          ))}
        </div>
        <div className="CTAs self-stretch flex items-center justify-center grow py-10 px-8 sm:px-14 gap-10">
          <Button variant={"secondary"} size={"lg"} className="flex gap-2 h-12">
            <FaWhatsapp className="w-6 h-6" /> View on Google Maps
          </Button>
          <Button variant={"secondary"} size={"lg"} className="flex gap-2 h-12">
            <MdOutlineEmail className="w-6 h-6" /> Schedule a Tour
          </Button>
        </div>
      </section>
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
