import SectionHeader from "@/components/Header/SectionHeader";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex grow flex-col items-center self-stretch">
      <section className="relative flex h-[80vh] grow items-center justify-center self-stretch bg-hero bg-cover bg-center pt-3 sm:h-[90vh]">
        <div className="text-center text-white">
          <h1 className="mb-4 px-4 text-4xl font-semibod sm:text-6xl">
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
              <Button
                variant="outline"
                size="lg"
                className="shadow-xl"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="About px-8 sm:px-24 py-12 flex flex-col sm:flex-row items-start justify-between bg-white gap-5 sm:gap-12 ">
        <SectionHeader />
        <div className="flex flex-col gap-6 max-w-lg">
          <p className="text-left text-gray-600 text-md font-normal font-['Poppins'] leading-9">
            Holistic Group specializes in building communities and providing end-to-end solutions to customers aspiring for a nature-centric lifestyle. We Design, Build, Develop & Manage these communities.
            In five years, the successful delivery of four projects is a testament to our commitment to a Nature-Centric Lifestyle as a tangible and compelling reality for our valued customers.
            We specialize in creating spaces that seamlessly blend with nature, offering bespoke designs for homes, unparalleled hospitality experiences, and thoughtful solutions for senior living.
          </p>
          <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-xl bg-green-800 text-white"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
