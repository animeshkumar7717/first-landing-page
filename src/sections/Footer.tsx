/** @format */
// import Logo from "@/assets/logo.svg";
import SpLogo from "@/assets/sp_icon.svg";
import SpName from "@/assets/sudhaName.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import LinkedInSocial from "@/assets/social-linkedIn.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* left */}
          <div className="flex gap-2 items-center lg:flex-1">
            <a href="#hero">
              <SpLogo className="h-20 w-20" />
            </a>
            <div className="-ml-20">
              <SpName className="h-20 w-48" />
            </div>

            {/* <div className="font-medium">Sudha Pandey Langing Page</div> */}
          </div>
          {/* middle */}
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#about"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              About
            </a>
            <a
              href="#service"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Service
            </a>
            <a
              href="#feature"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Feature
            </a>
            <a
              href="#client"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Clients
            </a>
          </nav>
          {/* right */}
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <a
              href="https://www.threads.net/@sudhapandeysp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a
              href="https://www.instagram.com/adswalimarketing?igsh=MTQ0d20yNzBiOXBoeg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a
              href="https://www.youtube.com/@sudhapandeysp.."
              target="_blank"
              rel="noopener noreferrer"
            >
              <YTSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/sudha-pandey-912669226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInSocial className="text-white/40 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
