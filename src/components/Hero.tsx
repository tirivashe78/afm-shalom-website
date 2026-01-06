"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedBadge from "./AnimatedBadge";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import { ChevronLeft, ChevronRight } from "lucide-react"; // install: npm i lucide-react

export default function Hero() {
  const images = [
    "/images/gallery1.jpg",
    "/images/hero1.jpg",
    "/images/gallery4.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Hero background slide"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual arrows */}
      {/* <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white backdrop-blur-md"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white backdrop-blur-md"
      >
        <ChevronRight size={24} />
      </button> */}

      <Container>
        <div className="min-h-[60vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <Typewriter
                words={["Welcome to AFM Shalom Center"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={60000}
              />
            </h1>

            <p className="mt-4 text-lg text-slate-200 max-w-2xl">
              <span className="font-semibold">
                Being Elavated for Excellence and Impact
              </span>
            </p>

            <AnimatedBadge
              items={[
                "Pray without ceasing",
                "The Spirit of the Lord",
                "The House of the Lord",
                "Read Your Bible Every Day",
              ]}
            />

            <div className="mt-6 flex gap-3">
              <a
                href="/notices"
                className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transform-gpu transition"
              >
                Join us this Sunday
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-5 py-3 border border-white/30 rounded-lg text-white/90 hover:bg-white/5"
              >
                Get Connected
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
