import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex w-full flex-col bg-neutral-950 text-white">
      <div className="relative flex flex-col md:flex-row md:justify-between md:items-center p-10 bg-green-800">
        <div className="flex flex-col space-y-4 self-stretch">
          <h1 className="text-2xl font-semibold">
            We'd love to connect with you. Let's find your ideal space!
          </h1>
          <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="bg-lime-300 text-white hover:text-lime-800"
            >
              Instant Callback
            </Button>
          </Link>
        </div>
        <div className="self-stretch">
          <Image
            width={"500"}
            height={"500"}
            src="/gallery/images/footer-house-image.png"
            alt="House"
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around bg-neutral-950 p-10">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <h1 className="text-2xl font-semibold text-white">HOLISTIC</h1>
          </Link>
          <p className="mt-2 text-sm">
            Invest In Best Properties With Our Expert's Guidance
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-medium mb-3">Company</h2>
          <nav className="space-y-2">
            <Link href="/about" className="hover:text-white/80">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-white/80">
              Careers
            </Link>
            <Link href="/privacy" className="hover:text-white/80">
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-medium mb-3">Contact Us</h2>
          <nav className="space-y-2">
            <Link href="/contact" className="hover:text-white/80">
              Contact
            </Link>
            <Link href="/email" className="hover:text-white/80">
              Email Us
            </Link>
            <Link href="/message" className="hover:text-white/80">
              Message Us
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-3">Projects</h2>
          <nav className="space-y-2">
            <Link
              href="/projects/holistic-royal-farms"
              className="hover:text-white/80"
            >
              Holistic Royal Farms
            </Link>
            <Link href="/projects/trulife" className="hover:text-white/80">
              Trulife
            </Link>
            <Link
              href="/projects/holistic-bespoke"
              className="hover:text-white/80"
            >
              Holistic Bespoke
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
