import SectionHeader from "@/components/Header/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdSecurity } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaMapLocationDot, FaHouseChimney } from "react-icons/fa6";
import IconTextCard from "@/components/Cards/IconTextCard";
import { ProductsServicesAccordian } from "@/components/Accordian/ProductsServicesAccordian";
import { ProductsServicesCarousel } from "@/components/Carousel/ProductsServicesCarousel";
import { ChooseProjectCarousel } from "@/components/Carousel/ChooseProject";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex grow flex-col items-center self-stretch">
      <section className="relative flex h-[80vh] grow items-center justify-center self-stretch bg-hero bg-cover bg-center pt-3 sm:h-[90vh]">
        <div className="text-center text-white">
          <h1 className="mb-4 px-4 text-4xl font-semibold sm:text-6xl">
            Building Nature Communities
          </h1>
          <p className="mb-8 px-6 text-sm sm:text-lg">
            Invest in Tranquility, Live in Luxury
          </p>
          <div className="flex justify-center flex-row gap-6">
            <Link href="/">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-xl bg-secondary text-white"
              >
                Enquire Now
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="shadow-xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="About px-8 sm:px-48 py-12 flex flex-col sm:flex-row items-start justify-between bg-white gap-5 sm:gap-36 ">
        <SectionHeader
          title="About Us"
          subTitle="About Holistic Nature Homes"
          titleColor="text-secondary"
          subTitleColor="text-lime-900"
        />
        <div className="flex flex-col gap-6 max-w-lg">
          <p className="text-left text-gray-600 text-md font-normal font-secondary leading-9">
            Holistic Group specializes in building communities and providing
            end-to-end solutions to customers aspiring for a nature-centric
            lifestyle. We Design, Build, Develop & Manage these communities. In
            five years, the successful delivery of four projects is a testament
            to our commitment to a Nature-Centric Lifestyle as a tangible and
            compelling reality for our valued customers. We specialize in
            creating spaces that seamlessly blend with nature, offering bespoke
            designs for homes, unparalleled hospitality experiences, and
            thoughtful solutions for senior living.
          </p>
          <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-xl bg-secondary text-white"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>
      <section className="WhyChooseUs px-2 sm:px-12 py-8 lex flex-col items-center justify-center self-stretch ">
        <div className="Header justify-center flex flex-col items-center gap-2 sm:gap-3">
          <h2 className="text-2xl sm:text-4xl text-lime-900 font-semibold">
            Why Choose Us?
          </h2>
          <p className="px-30 sm:px-80 text-center text-md text-gray-500">
            We provide end to end solutions & undertake Design, Approval,
            Procurement, Construction and Maintenance of all projects with our
            in house team of experts
          </p>
        </div>
        <div className="Cards py-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <IconTextCard
            Icon={MdSecurity}
            title="Secured & Fenced"
            text="Round-the-Clock Safety and Security for All"
            bgColor="bg-secondary"
          />
          <IconTextCard
            Icon={GrUserManager}
            title="Managed & Maintained"
            text="Hassle Free & Cost Effective"
            bgColor="bg-white"
          />
          <IconTextCard
            Icon={FaMapLocationDot}
            title="Prime Location & Smart Investment"
            text="Connectivity & Well-Thought-Out Returns"
            bgColor="bg-secondary"
          />
          <IconTextCard
            Icon={FaHouseChimney}
            title="Integrated Resort Community Estates"
            text="Robust Amenities & Infrastructure"
            bgColor="bg-white"
          />
        </div>
      </section>
      <section className="w-[100vw] flex flex-col sm:flex-row items-center sm:items-start justify-center self-stretch px-8 sm:px-2 py-8 gap-8 sm:gap-36">
        <div className="Col-1 flex flex-col items-start justify-start self-stretch gap-4 sm:gap-12">
          <SectionHeader
            title="Our Products & Services"
            subTitle="Explore Our Diverse Properties"
            titleColor="text-secondary"
            subTitleColor="text-lime-900"
          />
          <ProductsServicesAccordian />
        </div>
        <ProductsServicesCarousel />
      </section>
      <section className="ChooseProject w-[100vw] px-8 md:px-24 lg:px-52 py-8 flex flex-col items-center justify-center self-stretch gap-11">
        <SectionHeader
          title="Choose Your Project"
          subTitle="Discover Your Ideal Nature Home"
          titleColor="text-secondary"
          subTitleColor="text-lime-900"
        />
        <ChooseProjectCarousel />
      </section>
      <div className="Header px-4 sm:px-52 py-12 sm:py-20 justify-center flex self-stretch flex-col items-center gap-3 sm:gap-6 bg-primary">
        <h2 className="text-2xl sm:text-4xl font-medium text-white text-center">
          Thread By Thread, Leaf By Leaf, We Weave A Tapestry Of Holistic
          Living.
        </h2>
        <Link href="/">
          <Button
            variant="secondary"
            size="lg"
            className="shadow-xl bg-secondary text-white"
          >
            Get Quick Callback
          </Button>
        </Link>
      </div>
      <section className="UniquenessSection w-[100vw] flex flex-col sm:flex-row items-center sm:items-start justify-center self-stretch px-8 sm:px-48 py-12 gap-8 sm:gap-28">
        <Image
          src="/gallery/images/Uniqueness-Section-Image.png"
          alt="About Us"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="flex flex-col items-center sm:items-start justify-center self-stretch gap-8">
          <SectionHeader
            title="Our Uniqueness"
            subTitle="Why Choose Us?"
            titleColor="text-secondary"
            subTitleColor="text-lime-900"
          />
          <div className="UniquenessCards flex flex-col items-start gap-8">
            <div className="Card flex flex-col items-start justify-center self-stretch gap-4">
              <div className="flex items-start sm:items-center justify-start sm:justify-center">
                <GiStarsStack className="w-6 h-6 text-lime-900 " />
                <h3 className="text-lg text-lime-900 font-semibold ml-2">
                  Setting Ourselves Apart
                </h3>
              </div>
              <p className="text-md text-gray-500 text-start sm:text-left">
                Discover Unmatched Expertise, Impeccable Quality, and Tailored
                Solutions as per your needs.
              </p>
            </div>
            <div className="Card flex flex-col items-start justify-center self-stretch gap-4">
              <div className="flex items-center justify-center">
                <RiPoliceBadgeLine className="w-6 h-6 text-lime-900 " />
                <h3 className="text-lg text-lime-900 font-semibold ml-2">
                  Elevate Your Experience
                </h3>
              </div>
              <p className="text-md text-gray-500 text-start sm:text-left">
                Immerse yourself in a lifestyle curated by experts, ensuring
                unparalleled quality and a personalized touch.
              </p>
            </div>
            <div className="Card flex flex-col items-start justify-center self-stretch gap-4">
              <div className="flex items-start justify-start">
                <FaRegHandshake className="w-6 h-6 text-lime-900 " />
                <h3 className="text-lg text-lime-900 font-semibold ml-2">
                  Embark on Your Journey with Us
                </h3>
              </div>
              <p className="text-md text-gray-500 text-start sm:text-left">
                Let us be a part of your adventure! Experience a guided journey
                enriched by our unwavering commitment to excellence. Let&apos;s
                make this journey together, uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
