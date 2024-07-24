import IconTextCard from "@/components/Cards/IconTextCard";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { MdSecurity } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaMapLocationDot, FaHouseChimney  } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex grow flex-col items-center self-stretch">
      <section className="relative flex h-[80vh] grow items-center justify-center self-stretch bg-hero bg-cover bg-center pt-3 sm:h-[90vh]">
        <div className="text-center text-white">
          <h1 className="mb-4 px-4 text-4xl font-semibod sm:text-6xl">
            Building Nature Communities
          </h1>
          <p className="mb-8 px-6 text-sm sm:text-lg font-secondary">
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
      <section className="WhyChooseUs px-12 py-8 lex flex-col items-center justify-center self-stretch ">
        <div className="Header justify-center flex flex-col items-center gap-2 sm:gap-6">
          <h2 className="text-2xl sm:text-4xl font-semibold text-secondary">Why Choose Us?</h2>
          <p className="px-30 sm:px-80 text-center text-sm sm:text-md text-gray-500">
            We provide end to end solutions & undertake Design, Approval, Procurement, Construction and Maintenance of all projects with our in house team of experts
          </p>
        </div>
        <div className="Cards py-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <IconTextCard Icon={MdSecurity} title="Secured & Fenced" text="Round-the-Clock Safety and Security for All" bgColor="bg-secondary" />
          <IconTextCard Icon={GrUserManager} title="Managed & Maintained" text="Hassle Free & Cost Effective" bgColor="bg-white" />
          <IconTextCard Icon={FaMapLocationDot} title="Prime Location & Smart Investment" text="Connectivity & Well-Thought-Out Returns" bgColor="bg-secondary" />
          <IconTextCard Icon={FaHouseChimney } title="Integrated Resort Community Estates" text="Robust Amenities & Infrastructure" bgColor="bg-white" />
        </div>
      </section>
    </div>
  );
}
