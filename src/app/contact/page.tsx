"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Heart, MapPin, Clock, User } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-gray-700 text-lg">
          We’re here to pray, serve, and connect — reach out to us.
        </p>
        <p className="text-gray-500 mt-1">
          For pastoral care, membership enquiries or ministry requests.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {/* Pastor */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary text-white font-bold rounded-full flex items-center justify-center text-lg">
              P
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Pastor Nhiwatiwa</h2>
              <p className="text-gray-600 text-sm">Lead Pastor</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Available for pastoral care, counseling and prayer requests.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+263 77 705 1088"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Phone className="w-5 h-5" /> +263 77 705 1088
            </a>
            <a
              href="mailto:pastor@example.com"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              {/* <Mail className="w-5 h-5" /> pastor@example.com */}
            </a>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4" /> Mon–Fri: 09:00–17:00
            </p>
          </div>
        </motion.div>

        {/* Mai */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-pink-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-pink-500 text-white font-bold rounded-full flex items-center justify-center text-lg">
              M
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Mai Nhiwatiwa</h2>
              <p className="text-gray-600 text-sm">Pastor’s Wife</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Available for guidance, prayer, and support within the church community.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+263770000002"
              className="flex items-center gap-2 text-pink-500 hover:underline"
            >
              <Phone className="w-5 h-5" /> +263 77 000 0002
            </a>
            <a
              href="mailto:mai@example.com"
              className="flex items-center gap-2 text-pink-500 hover:underline"
            >
              <Mail className="w-5 h-5" /> mai@example.com
            </a>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4" /> Mon–Fri: 09:00–17:00
            </p>
          </div>
        </motion.div> */}
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mb-12 justify-center"
      >
        <a
          href="https://wa.me/+263777051088?text=Hello%2C%20I%20want%20to%20join%20the%20AFM%20Shalom%20WhatsApp%20group"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition"
        >
          <MessageCircle className="w-5 h-5" /> Join WhatsApp Group
        </a>
        <a
          href="mailto:info@afmshalom.org?subject=Contact%20from%20Website"
          className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition"
        >
          <Mail className="w-5 h-5" /> Send Email
        </a>
        <a
          href="#request-prayer"
          className="flex items-center justify-center gap-2 bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition"
        >
          <Heart className="w-5 h-5" /> Request Prayer
        </a>
      </motion.div>

      {/* Location & Hours */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-500"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-yellow-500" /> Location & Hours
        </h2>
        <p className="text-gray-700 mb-2">AFM Shalom Center — Harare, Zimbabwe</p>
        <a
          href="https://www.google.com/maps/place/AFM+Westlea+Shalom+Centre,+Harare/@-17.8197304,30.9727392,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:underline flex items-center gap-1 mb-2"
        >
          Open in Google Maps
        </a>
        <p className="text-gray-700">
          Sunday Service: 08:00 — 11:00 <br />
          Office Hours: Mon–Fri 08:00 — 17:00
        </p>
      </motion.div>
    </main>
  );
}
