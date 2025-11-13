'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Hero />

      <Container>
        {/* Mission Section with fade-in animation */}
        <section className="mt-12 mb-20">
          <motion.h2
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
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-base text-slate-700"
          >
            Join us this Sunday and experience the power and presence of God in a dynamic, family-oriented environment.
          </motion.p>
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
    </>
  );
}
