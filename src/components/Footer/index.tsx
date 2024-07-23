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
        
      </div>
    </footer>
  );
}
