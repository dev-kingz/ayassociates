import { Button } from "@/components/ui/button";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch">
      <section className="relative flex h-[80vh] grow items-center justify-center self-stretch bg-hero bg-cover bg-center pt-3 sm:h-[90vh]"></section>
      <section className="flex items-center justify-between py-6 px-14 gap-4 self-stretch">
        <Button size={"lg"} className="grow flex gap-2 h-12 text-base">
          <FaWhatsapp /> WhatsApp
        </Button>
        <Button size={"lg"} className="grow flex gap-2 h-12 text-base">
          <MdOutlineEmail /> Mail
        </Button>
        <Button size={"lg"} className="grow flex gap-2 h-12 text-base">
          <LuMapPin /> Locate
        </Button>
      </section>
      <section className="ContactUsSection flex items-center justify-center self-stretch h-56">
        <div className="ContactUsForm flex items-center justify-center flex-col grow"></div>
        <div className="ContactUsImage flex items-center justify-center flex-col grow"></div>
      </section>
    </div>
  );
};

export default ContactPage;
