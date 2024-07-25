import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialIcons from "../Icons/SocialIcons";

export function Footer() {
  return (
    <footer className="Footer flex w-full flex-col text-white mt-44 sm:mt-36">
      <section className="TopSection relative flex flex-col-reverse md:flex-row md:justify-between md:items-center py-10 sm:px-36 bg-primary">
        <div className="flex flex-col self-stretch items-center sm:items-start gap-6 md:gap-12 px-8">
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
              className="bg-secondary text-white"
            >
              Instant Callback
            </Button>
          </Link>
        </div>
        <div className="h-32">
          <Image
            width={"500"}
            height={"500"}
            src="/gallery/images/footer-house-image.png"
            alt="House"
            className="absolute right-0 -top-48 sm:bottom-0"
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
              Discover Your Dream Home with AY Associates!
            </p>
          </div>
          <div className="QuickLinks flex flex-col sm:flex-row gap-6 sm:gap-24 text-center md:text-left">
            <div className="flex flex-col mb-6 md:mb-0 items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-3">Company</h2>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/about"
                  className="hover:text-white/80 font-secondary"
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="hover:text-white/80 font-secondary"
                >
                  Careers
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-white/80 font-secondary"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
            <div className="flex flex-col mb-6 md:mb-0 items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/contact"
                  className="hover:text-white/80 font-secondary"
                >
                  Contact
                </Link>
                <Link
                  href="/email"
                  className="hover:text-white/80 font-secondary"
                >
                  Email Us
                </Link>
                <Link
                  href="/message"
                  className="hover:text-white/80 font-secondary"
                >
                  Message Us
                </Link>
              </nav>
            </div>
            <div className="flex flex-col mb-6 md:mb-0 items-center sm:items-start">
              <h2 className="text-xl font-semibold mb-3">Projects</h2>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/projects/bunglows"
                  className="hover:text-white/80 font-secondary"
                >
                  Bungalows
                </Link>
                <Link
                  href="/projects/farm-houses"
                  className="hover:text-white/80 font-secondary"
                >
                  Farm Houses
                </Link>
                <Link
                  href="/projects/na-plots"
                  className="hover:text-white/80 font-secondary"
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
