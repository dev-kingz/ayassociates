import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="flex w-full flex-col bg-neutral-950 text-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center p-10 bg-green-800">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-semibold">We'd love to connect with you.</h1>
          <h1 className="text-2xl font-semibold">Let's find your ideal space!</h1>
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
        <div className="mt-4 md:mt-0">
          <img src="\gallery\images\footer-house-image.png" alt="House" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around bg-neutral-950 p-10">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <h1 className="text-2xl font-semibold text-white">HOLISTIC</h1>
          </Link>
          <p className="mt-2 text-sm">Invest In Best Properties With Our Expert's Guidance</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-medium mb-3">Company</h2>
          <nav className="space-y-2">
            <Link href="/about">
              <a className="hover:text-white/80">About Us</a>
            </Link>
            <Link href="/careers">
              <a className="hover:text-white/80">Careers</a>
            </Link>
            <Link href="/privacy">
              <a className="hover:text-white/80">Privacy Policy</a>
            </Link>
          </nav>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-medium mb-3">Contact Us</h2>
          <nav className="space-y-2">
            <Link href="/contact">
              <a className="hover:text-white/80">Contact</a>
            </Link>
            <Link href="/email">
              <a className="hover:text-white/80">Email Us</a>
            </Link>
            <Link href="/message">
              <a className="hover:text-white/80">Message Us</a>
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-3">Projects</h2>
          <nav className="space-y-2">
            <Link href="/projects/holistic-royal-farms">
              <a className="hover:text-white/80">Holistic Royal Farms</a>
            </Link>
            <Link href="/projects/trulife">
              <a className="hover:text-white/80">Trulife</a>
            </Link>
            <Link href="/projects/holistic-bespoke">
              <a className="hover:text-white/80">Holistic Bespoke</a>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
