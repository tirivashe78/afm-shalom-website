"use client";

import { motion } from "framer-motion";
import { CreditCard, Smartphone, DollarSign, Copy } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PaymentsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-2">Give & Support</h1>
        <p className="text-gray-700 text-lg">
          Support our ministry and help us expand God’s Kingdom.
        </p>
        <p className="text-gray-500 mt-1">
          Your generous donations help us evangelize, support our members, and serve the community.
        </p>
      </motion.div>

      {/* Payment Methods */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Bank Transfer */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary"
        >
          <div className="flex items-center gap-2 mb-4"> */}
            {/* <Bank className="w-6 h-6 text-primary" /> */}
            {/* <h2 className="text-xl font-semibold text-gray-800">Bank Transfer</h2>
          </div>
          <p className="text-gray-700 mb-2">Bank: ABC Bank</p>
          <p className="text-gray-700 mb-2">Account Name: AFM Shalom Center</p>
          <p className="text-gray-700 mb-2 flex items-center gap-2">
            Account Number: 1234567890
            <button onClick={() => handleCopy("1234567890")} className="ml-2">
              <Copy className="w-4 h-4 text-gray-500 hover:text-primary" />
            </button>
          </p>
          {copied && <p className="text-green-500 text-sm mt-1">Copied!</p>}
        </motion.div> */}

        {/* Ecocash / Mobile Money */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500"
        >
          <div className="flex items-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-800">Ecocash / Mobile Money</h2>
          </div>
          <p className="text-gray-700 mb-2">Number: +263 77 705 1088</p>
          <p className="text-gray-700 mb-2">Account Name: AFM Shalom Center</p>
          <p className="text-gray-700 mb-2">Instructions: Send your donation and notify via WhatsApp</p>
        </motion.div>

        {/* PayPal / Card */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500 flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-800">PayPal / Card</h2>
          </div>
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition"
          >
            <DollarSign className="w-5 h-5" /> Donate via PayPal
          </a>
        </motion.div> */}
      </div>

      {/* Security & Assurance */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md text-center"
      >
        <p className="text-gray-700">
          All donations are secure and encrypted. No sensitive data is stored on this website.
        </p>
      </motion.div>
    </main>
  );
}
