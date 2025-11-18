"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// import { Users, Heart, Sparkles, HelpingHand } from "lucide-react";
import {
  FaPrayingHands,
  FaGlobe,
  FaHeart,
  FaCross,
  FaPaw,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Hero />

      <Container>
        {/* Mission Section with fade-in animation */}
        <section className="mt-12 mb-20">
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold text-slate-900"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg text-slate-700 max-w-3xl"
          >
            We are a Christ-centered, Spirit-led, Bible-believing church rooted in the rich legacy of the Apostolic Faith Mission in Zimbabwe. At Shalom Center, we are committed to building lives, transforming communities and expanding God’s Kingdom through worship, discipleship and service.
          </motion.p> */}

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-primary"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaPrayingHands className="text-primary w-8 h-8" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              We are a Christ-centered, Spirit-led, Bible-believing church
              rooted in the rich legacy of the Apostolic Faith Mission in
              Zimbabwe. At Shalom Center, we are committed to building lives,
              transforming communities and expanding God’s Kingdom through
              worship, discipleship and service.
            </p>
            <blockquote className="text-sm italic text-gray-600 border-l-4 pl-4 border-accent">
              Join us this Sunday and experience the power and presence of God
              in a dynamic, family-oriented environment.
            </blockquote>
          </motion.section>
          <br />

          <section className="mb-24 flex justify-center">
            <motion.div
              className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage("/images/service.jpg")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Image
                src="/images/service.jpg"
                alt="Service Image"
                width={500} // Adjust size here
                height={50}
                className="object-contain mx-auto"
              />
            </motion.div>
          </section>
        </section>

        {/* Gallery Section with hover & fade-in animation */}
        <section className="mb-24">
          <h3 className="text-xl font-medium mb-4">Gallery Preview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="relative h-40 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx < 3}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </Container>

      {/* Lightbox Modal with animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            >
              <Image
                src={selectedImage}
                alt="Selected image"
                width={1200}
                height={800}
                className="rounded-lg object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white text-3xl font-bold"
              >
                &times;
              </button>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
            <a
                href="https://play.google.com/store/apps/details?id=io.tatenda.afm"
                className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition"
              >
                <FaDownload className="w-5 h-5" /> Download our Hymn Book
              </a>
              </motion.div>
            
    </>
    
  );
}
