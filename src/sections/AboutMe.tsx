/** @format */
"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import sudhaImage from "@/assets/sudhaImage.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-200, 200]
  );

  return (
    <section id="about" className="py-16 md:py-20" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/10 py-14 px-6 md:px-10 rounded-xl overflow-hidden relative flex flex-col md:flex-row items-center shadow-[0_0_20px_rgba(140,69,255,0.4)] group"
          animate={{ backgroundPositionX: starsBg.width }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(34,12,64)] bg-blend-overlay opacity-90 [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>

          {/* Left Side: About Me Text and Testimonials */}
          <div className="relative z-10 w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl tracking-tighter font-semibold text-white">
              About Me
            </h2>
            <p className="text-base md:text-lg text-white/80 mt-3 max-w-md">
              &quot;Hello! I&apos;m Sudha Pandey, your go-to SEO and digital
              marketing strategist with a flair for driving success in the
              digital world. My mission? To elevate your brand&apos;s online
              presence, turning clicks into loyal customers and analytics into
              actionable insights.&quot;
            </p>
            <div className="mt-8 space-y-6">
              <div className="border border-white/15 p-4 rounded-lg bg-gradient-to-b from-[rgba(74,32,138,0.7)] to-[rgba(14,0,36,0.8)] shadow-md">
                <p className="text-lg font-display text-primary">
                  &quot;With Sudha’s expertise, our SEO strategy has reached new
                  heights. Her innovative ideas and vibrant energy have brought
                  real, lasting impact to our marketing efforts.&quot;
                </p>
                <span className="text-white/70 mt-4 block font-display text-primary">
                  – Jamie Lee, Founder @ Pulse
                </span>
              </div>
              <div className="border border-white/15 p-4 rounded-lg bg-gradient-to-b from-[rgba(74,32,138,0.7)] to-[rgba(14,0,36,0.8)] shadow-md">
                <p className="text-lg font-display text-primary">
                  &quot;Working with Sudha has been a game-changer—her expert,
                  user-centered SEO brought impactful, measurable growth to our
                  platform.&quot;
                </p>
                <span className="text-white/70 mt-4 block font-display text-primary">
                  – Alec Whitten, CTO @ Tech Solutions
                </span>
              </div>
            </div>

            <div className="flex justify-start mt-8">
              <a
                href="https://wa.me/9128952819"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-8 py-3">Contact Me</Button>
              </a>
            </div>
          </div>

          {/* Right Side: Image of Sudha with Effects */}
          <div className="relative w-full h-auto md:w-1/2 md:mt-0 flex justify-center">
            <img
              src={sudhaImage.src}
              alt="Sudha Pandey"
              className="rounded-lg shadow-lg border border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
