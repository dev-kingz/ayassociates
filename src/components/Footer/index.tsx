import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialIcons from "../Icons/SocialIcons";

export function Footer() {
  return (
    <footer className="Footer flex w-full flex-col bg-neutral-950 text-white">
      <section className="TopSection relative flex flex-col md:flex-row md:justify-between md:items-center pt-8 sm:py-10 sm:px-36 bg-primary">
        <div className="flex flex-col self-stretch items-center sm:items-start gap-6 md:gap-12 px-8 ">
          <div className="TopSectionText flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-medium">
              We&apos;d love to connect with you.
            </h1>
            <h1 className="text-3xl md:text-4xl font-medium">
              Let&apos;s find your ideal space!
            </h1>
          </div>
          <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="bg-secondary text-white hover:text-white"
            >
              Instant Callback
            </Button>
          </Link>
        </div>
        <div className="sm:hidden md:block">
          <Image
            width={"500"}
            height={"500"}
            src="/gallery/images/footer-house-image.png"
            alt="House"
            className="sm:absolute sm:right-0 sm:bottom-0"
          />
        </div>
      </section>
      <section className="BottomSection flex flex-col md:justify-around bg-footer py-10 px-8 sm:px-36">
        <div className="Content py-4 flex flex-col sm:flex-row justify-between gap-6">
          <div className="Logo&Text mb-6 md:mb-0 text-center md:text-left">
            <Link href="/">
              <h1 className="text-3xl font-bold text-white">AY Associates</h1>
            </Link>
            <p className="mt-2 text-md">
              Invest In Best Properties With Our Expert&apos;s Guidance
            </p>
          </div>
          <div className="QuickLinks flex flex-col sm:flex-row gap-6 sm:gap-24 text-center md:text-left">
            <div className="flex flex-col mb-6 md:mb-0 items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-3">Company</h2>
              <nav className="flex flex-col space-y-2">
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
            <div className="flex flex-col mb-6 md:mb-0 items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <nav className="flex flex-col space-y-2">
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
            <div className="flex flex-col mb-6 md:mb-0 items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-3">Projects</h2>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/projects/holistic-royal-farms"
                  className="hover:text-white/80"
                >
                  Bungalows
                </Link>
                <Link href="/projects/trulife" className="hover:text-white/80">
                  Farm Houses
                </Link>
                <Link
                  href="/projects/holistic-bespoke"
                  className="hover:text-white/80"
                >
                  NA Plots
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="SocialIcons sm:py-8 flex flex-col self-stretch items-center sm:items-end gap-10">
          <div className="w-full h-[1px] bg-gray-300" />
          <SocialIcons />
        </div>
      </section>
    </footer>
  );
}
