/** @format */

"use client";
import seo2 from "@/assets/logo-seo.png";
import webDevelopment from "@/assets/logo-web-devlopment.png";
import socialMedia from "@/assets/logo-social-media.png";
import googleAds from "@/assets/logo-google-ads.png";
import metaAds from "@/assets/logo-meta-ads.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const mapValue = [seo2, googleAds, webDevelopment, metaAds, socialMedia];
  return (
    <section id="service" className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="text-2xl font-display text-primary">Services</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[...mapValue, ...mapValue].map((item) => (
                <img
                  src={item.src}
                  key={item.src}
                  alt="image"
                  className="h-28 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
