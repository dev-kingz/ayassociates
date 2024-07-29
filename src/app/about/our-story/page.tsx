import PhotoCard from "@/components/Cards/PhotoCard";
import PhotoTextCard from "@/components/Cards/PhotoTextCard";
import SectionHeader from "@/components/Header/SectionHeader";
import TitleHeader from "@/components/Header/TitleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StoryPage = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch">
      <TitleHeader image="/gallery/images/About-Us-Header-Image.jpg" titleText="Our Story" subTitleText="at AY Associates Nature Homes" />
      <section className="About px-8 sm:px-48 py-12 flex flex-col sm:flex-row items-center justify-between bg-white gap-5 sm:gap-36 ">
        <div className="flex flex-col gap-6 max-w-lg">
          <SectionHeader title="Overview" subTitle="About AY Associates" titleColor="text-secondary" subTitleColor="text-lime-900" />
          <p className="text-left text-gray-600 text-sm sm:text-md font-normal font-secondary leading-9">
            Holistic Group, specializes in building communities and providing end to end solutions to customers aspiring for a nature centric lifestyle. We Design, Build, Develop & Manage these communities.
            We specialize in creating spaces that seamlessly blend with nature, offering bespoke designs for homes, unparalleled hospitality experiences, and thoughtful solutions for senior living.
            In five years successful delivery of four projects is a testament of our commitment to Nature-Centric Lifestyle as a tangible and compelling reality for our valued customers.
          </p>
          <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-xl bg-secondary text-white"
            >
              Meet Our Team
            </Button>
          </Link>
        </div>
        <Image
          src="/gallery/images/Overview-Image.jpg"
          alt="About Us Image"
          width={500}
          height={600}
          className="rounded-lg"
        />
      </section>
      <section className="Mission px-8 sm:px-48 py-6 sm:py-12 flex flex-col sm:flex-row items-center justify-between bg-white gap-5 sm:gap-36 ">
        <div className="flex flex-col gap-6 max-w-lg">
          <SectionHeader title="Our Mission" subTitle="Our Commitment to Quality Living" titleColor="text-secondary" subTitleColor="text-lime-900" />
          <p className="text-left text-gray-600 text-sm sm:text-md font-normal font-secondary leading-9">
            Our mission is guided by honesty, unwavering integrity, and hands on experience. Our goal is to persist on this path of excellence, crafting spaces that enhance the lives of our clients.
          </p>
        </div>
        <Image
          src="/gallery/images/Mission-Image.jpg"
          alt="About Us Image"
          width={500}
          height={600}
          className="rounded-lg"
        />
      </section>
      <section className="Vision px-8 sm:px-48 py-6 sm:py-12 flex flex-col sm:flex-row items-center justify-between bg-white gap-5 sm:gap-36 ">
        <Image
          src="/gallery/images/Vision-Image.jpg"
          alt="About Us Image"
          width={500}
          height={600}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-6 max-w-lg">
          <SectionHeader title="Our Vision" subTitle="Sustainable Homes" titleColor="text-secondary" subTitleColor="text-lime-900" />
          <p className="text-left text-gray-600 text-sm sm:text-md font-normal font-secondary leading-9">
            We are passionate about crafting nature-centric lifestyles, where the harmony of Mother Nature defines a true, enriched life. Our vision is to lead the way in curating every aspect of sustainable and personalized nature homes.
          </p>
        </div>
      </section>
      <section className="Timeline py-6 sm:py-12 flex flex-col bg-white gap-5 sm:gap-12">
        <h1 className="text-2xl sm:text-4xl text-center text-lime-800">
          Our Core Values
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
        <PhotoTextCard image="/gallery/images/Innovation.jpg" title="Integrity" subTitle="Creativity, Belief for a Positive Change" />
        <PhotoTextCard image="/gallery/images/Integrity.jpg" title="Innovation" subTitle="Honesty, Transparency & Ethical Conduct" />
        <PhotoTextCard image="/gallery/images/Experience.png" title="Experience With Us" subTitle="Satisfaction, Expertise, Memorable Journey" />
        </div>
      </section >
      <section className="Timeline py-6 sm:py-12 flex flex-col bg-white gap-5 sm:gap-12">
        <h1 className="text-2xl sm:text-4xl text-center text-lime-800">
          Our Timeline
        </h1>
        <Image
          src="/gallery/images/Timeline.jpg"
          alt="Our Timeline"
          width={1400}
          height={800}
          layout="responsive"
          className="rounded-lg w-full"
        />
      </section >
      <section className="Team py-6 sm:py-12 flex flex-col bg-white gap-5 sm:gap-12">
        <h1 className="text-2xl sm:text-4xl text-center text-lime-800">
          Management Team
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
        <PhotoCard image="/gallery/images/Team-Member-1.png" name="Sanjoy Das" role="Founder & MD" />
        <PhotoCard image="/gallery/images/Team-Member-2.png" name="Subhankar Mitra" role="Co-founder & Director" />
        <PhotoCard image="/gallery/images/Team-Member-3.png" name="Mrityunjoy Aich" role="CEO Hospitality" />
        </div>
      </section >

    </div >
  );
};

export default StoryPage;
