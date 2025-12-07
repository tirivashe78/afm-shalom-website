// Updated DepartmentsPage with added departments

"use client";

import { motion } from "framer-motion";
import { Users, Heart, Sparkles, HelpingHand, Megaphone, Camera, Handshake, Music2, Shield } from "lucide-react";

export default function DepartmentsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="bg-gray-100 min-h-screen py-16 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Our Church Departments</h1>
        <p className="text-gray-600">Discover the ministries that serve, nurture, and uplift our community.</p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Ladies Department */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-primary"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-primary w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">AFM in Zimbabwe Ladies Ministry</h2>
          </div>
          <p className="text-gray-700 mb-4">
            The AFM in Zimbabwe Ladies Ministry, commonly referred to as the Ladies Department, has been serving for over 100 years, supporting and sustaining families and contributing significantly to church projects.
          </p>
          <blockquote className="text-sm italic text-gray-600 border-l-4 pl-4 border-accent">
            “Who can find a virtuous woman? For her price is far above rubies...” – Proverbs 31:10-13 (KJV)
          </blockquote>
        </motion.section>

        {/* WISMO Department */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-pink-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-pink-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Widows & Single Mothers (WISMO) Department</h2>
          </div>
          <p className="text-gray-700 mb-2">
            Established in 1997 by Rev. T.I. Murefu, the WISMO department supports widows and single mothers, providing encouragement and teaching them to live holy lives regardless of circumstances.
          </p>
        </motion.section>

        {/* Youth Department */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-blue-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Youth Department</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Open to members aged 18 to 40, the Youth Department nurtures spiritual gifts and talents for service to the Lord, provides spiritual education, and mobilizes resources for church growth.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">Activities:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Assembly, provincial, and national conferences</li>
            <li>Youth leadership seminars</li>
            <li>Presidential Sports Cups</li>
            <li>Talent showcases & choral competitions</li>
            <li>Youth business dinners</li>
          </ul>
        </motion.section>

        {/* Children's Ministry */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-yellow-500"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children’s Ministry / Department</h2>
          <p className="text-gray-700 mb-4">
            The Children’s Ministry welcomes all members under 18, leading children to the Kingdom of God and nurturing their spiritual growth.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">Purpose:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Lead children to accept Jesus Christ</li>
            <li>Encourage baptism and spiritual growth</li>
            <li>Equip children for ministry within the church</li>
          </ul>
        </motion.section>

        {/* Welfare Department */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-green-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <HelpingHand className="text-green-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Welfare Department</h2>
          </div>
          <p className="text-gray-700 mb-4">
            The Welfare Department serves the poor and needy, both within the church and the surrounding community, extending the love of God through practical care.
          </p>
        </motion.section>

        {/* Ushering Department */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-purple-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-purple-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Ushering Department</h2>
          </div>
          <p className="text-gray-700">
            The Ushering Department is dedicated to providing a warm, organized, and respectful environment for all who attend worship services and church events. Through hospitality and service, ushers ensure that every member and visitor feels welcomed, valued, and comfortable.
          </p>
        </motion.section>

        {/* Media Department */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <Camera className="text-indigo-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Media Department</h2>
          </div>
          <p className="text-gray-700">
            The Media Department harnesses modern technology to communicate the message of Christ effectively, both within the church and to the wider community. Through audio, video, social media, and graphic design, the department seeks to enhance worship, outreach, and discipleship.
          </p>
        </motion.section>

        {/* Evangelism Department */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-red-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="text-red-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Evangelism Department</h2>
          </div>
          <p className="text-gray-700">
            The Evangelism Department is passionate about sharing the Good News of Jesus Christ and making disciples within the church and the wider community. Through outreach, preaching, and personal witness, the department seeks to expand God’s Kingdom and bring hope to the lost.
          </p>
        </motion.section>

        {/* Praise and Worship Ministry */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-orange-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <Music2 className="text-orange-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Praise and Worship Ministry</h2>
          </div>
          <p className="text-gray-700">
            The Praise and Worship Ministry leads the church in spirit-filled worship, creating an atmosphere where hearts are drawn closer to God through song, music, and prayer. Committed to excellence and reverence, this ministry fosters a deep connection between the congregation and the Holy Spirit.
          </p>
        </motion.section>

        {/* Men's Fellowship */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-gray-700"
        >
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="text-gray-700 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">Men’s Fellowship</h2>
          </div>
          <p className="text-gray-700">
            The Men’s Fellowship is a strong pillar of the church, uniting men in faith, brotherhood, and service. It aims to build spiritually mature, responsible, and purpose-driven men who lead in their families, church, and communities according to God’s Word.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
