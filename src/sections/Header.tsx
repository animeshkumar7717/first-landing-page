/** @format */

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <a href="#hero">
              <LogoIcon className="h-8 w-8" />
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                href="#about"
                className="text-white/70 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#feature"
                className="text-white/70 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#client"
                className="text-white/70 hover:text-white transition"
              >
                Clients
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            <div className="">
              <MenuIcon className="md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};