"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPrayingHands,
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
      {/* Hero Fade In */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <Hero />
      </motion.div>

      <Container>
        {/* Mission Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 mb-20"
        >
          <motion.section
            variants={fadeInUp}
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

          {/* Service Image */}
          <motion.section
            variants={fadeInUp}
            className="mb-24 flex justify-center"
          >
            <motion.div
              className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage("/images/service.jpg")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Image
                src="/images/service.jpg"
                alt="Service Image"
                width={500}
                height={50}
                className="object-contain mx-auto"
              />
            </motion.div>
          </motion.section>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-xl font-medium mb-4">Gallery Preview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="relative h-40 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
        </motion.section>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              variants={fadeInUp}
              onClick={(e) => e.stopPropagation()}
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

      {/* Button Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
