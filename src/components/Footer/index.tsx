import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialIcons from "../Icons/SocialIcons";

export function Footer() {
  return (
    <footer className="Footer flex w-full flex-col bg-neutral-950 text-white">
      <section className="TopSection relative flex flex-col md:flex-row md:justify-between md:items-center py-10 px-36 bg-primary">
        <div className="flex flex-col self-stretch gap-12">
          <div className="TopSectionText flex flex-col gap-2">
            <h1 className="text-4xl font-medium">
              We&apos;d love to connect with you.
            </h1>
            <h1 className="text-4xl font-medium">
              Let&apos;s find your ideal space!
            </h1>
          </div>
          <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="bg-secondary text-white hover:text-lime-800"
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
      </section>
      <section className="BottomSection flex md:flex-col md:justify-around bg-footer py-10 px-36">
        <div className="Content py-4 flex flex-row justify-between">
          <div className="Logo&Text mb-6 md:mb-0">
            <Link href="/">
              <h1 className="text-3xl font-bold text-white">AY Associates</h1>
            </Link>
            <p className="mt-2 text-md">
            Discover Your Dream Home with AY Associates
            </p>
          </div>
          <div className="QuickLinks flex flex-row gap-24">
            <div className="flex flex-col mb-6 md:mb-0">
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
            <div className="flex flex-col mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <nav className="flex flex-col  space-y-2">
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
            <div className="flex flex-col mb-6 md:mb-0">
              <h2 className="flex flex-col text-xl font-semibold mb-3">Projects</h2>
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
        <div className="SocialIcons py-8 flex flex-col self-stretch items-end gap-10">
          <div className="px-20 w-full h-[1px] bg-gray-300" />
          <SocialIcons />
        </div>
      </section>
    </footer >
  );
}