import Link from "next/link";
import { Manrope } from "next/font/google";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex items-center justify-center p-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 overflow-hidden rounded-xl shadow-2xl min-h-[500px]">
          {/* Left visual section */}
          <div className="relative bg-dark-green p-8 flex flex-col justify-center items-center py-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-dark-orange rounded-bl-full opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-lighter-yellow rounded-tr-full opacity-70"></div>

            {/* 404 text */}
            <div className="relative z-10 text-center">
              <h1 className="text-white text-9xl font-bold tracking-tighter">
                404
              </h1>
              <div className="w-full h-2 bg-white mt-2 mb-4"></div>
              <p className="text-white text-xl font-medium">Page not found</p>
            </div>
          </div>

          {/* Right content section */}
          <div className="bg-white p-8 flex flex-col justify-center py-16">
            <div className="mb-6">
              <h2
                className={`${manrope.variable} font-manrope text-2xl font-bold text-dark-ash mb-4`}
              >
                Oops! You&apos;ve wandered off the path
              </h2>

              <div className="w-12 h-1 bg-dark-orange mb-4"></div>

              <p className="text-ash mb-2">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
              <p className="text-ash mb-6">Let&apos;s get you back on track.</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-dark-orange hover:bg-opacity-90 text-white transition-colors"
                >
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    <Home size={18} />
                    Go Home
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-dark-green text-dark-green hover:bg-dark-green/10"
                >
                  <Link href="/contact-us">Report Issue</Link>
                </Button>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="flex justify-end gap-2 mt-auto">
              <div className="w-3 h-3 rounded-full bg-lighter-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-dark-green"></div>
              <div className="w-3 h-3 rounded-full bg-dark-orange"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
