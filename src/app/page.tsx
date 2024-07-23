import {Button} from "@/components/ui/button"
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
    </div>
  );
}
