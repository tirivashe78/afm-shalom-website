"use client";

import { motion } from "framer-motion";
import { Users, Heart, Sparkles, HelpingHand } from "lucide-react";

export default function DepartmentsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">
          Our Church Departments
        </h1>
        <p className="text-gray-600">
          Discover the ministries that serve, nurture, and uplift our community.
        </p>
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
            <h2 className="text-2xl font-semibold text-gray-800">
              AFM in Zimbabwe Ladies Ministry
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            The AFM in Zimbabwe Ladies Ministry, commonly referred to as the
            Ladies Department, has been serving for over 100 years, supporting
            and sustaining families and contributing significantly to church
            projects.
          </p>
          <blockquote className="text-sm italic text-gray-600 border-l-4 pl-4 border-accent">
            “Who can find a virtuous woman? For her price is far above rubies...”
            – Proverbs 31:10-13 (KJV)
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
            <h2 className="text-2xl font-semibold text-gray-800">
              Widows & Single Mothers (WISMO) Department
            </h2>
          </div>
          <p className="text-gray-700 mb-2">
            Established in 1997 by Rev. T.I. Murefu, the WISMO department
            supports widows and single mothers, providing encouragement and
            teaching them to live holy lives regardless of circumstances.
          </p>
          <p className="text-gray-700">
            {/* Led by Amai Cathrine Madawo, the department promotes
            self-sufficiency and active participation in church projects. */}
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
            <h2 className="text-2xl font-semibold text-gray-800">
              Youth Department
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            Open to members aged 18 to 40, the Youth Department nurtures
            spiritual gifts and talents for service to the Lord, provides
            spiritual education, and mobilizes resources for church growth.
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
          <div className="flex items-center gap-3 mb-4">
            {/* <Child className="text-yellow-500 w-8 h-8" /> */}
            <h2 className="text-2xl font-semibold text-gray-800">
              Children’s Ministry / Department
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            The Children’s Ministry welcomes all members under 18, leading
            children to the Kingdom of God and nurturing their spiritual growth.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">Purpose:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Lead children to accept Jesus Christ</li>
            <li>Encourage baptism and spiritual growth</li>
            <li>Equip children for ministry within the church</li>
          </ul>
          <h3 className="font-semibold text-gray-800 mt-4 mb-2">Activities:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Weekly Sunday School services</li>
            <li>Annual Conference at Rufaro Centre</li>
            <li>Teacher training programs</li>
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
            <h2 className="text-2xl font-semibold text-gray-800">
              Welfare Department
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            The Welfare Department serves the poor and needy, both within the
            church and the surrounding community, extending the love of God
            through practical care.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">Goals:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Assist church members in meeting basic needs</li>
            <li>Reach out to needy individuals and families</li>
            <li>
              Support community members with food, clothing, and other
              necessities
            </li>
          </ul>
        </motion.section>
      </div>
    </main>
  );
}



// 'use client';

// import { useId } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaFemale,
//   FaHandsHelping,
//   FaUsers,
//   FaCalendarAlt,
//   FaChild,
//   FaHeartbeat,
//   FaPrayingHands,
//   FaBookOpen,
// } from 'react-icons/fa';

// const container = {
//   hidden: { opacity: 0, y: 8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.12, when: 'beforeChildren' },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 12, scale: 0.99 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 16, stiffness: 120 } },
// };

// export default function DepartmentsPage() {
//   const id = useId();

//   return (
//     <main className="py-16 px-4 sm:px-8 lg:px-20">
//       <motion.header
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl mx-auto text-center"
//       >
//         <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-amber-700">Departments</h1>
//         <p className="text-lg text-slate-700">
//           Ministries, programs and activities at AFM Shalom Center. Click or read through each section — animated for clarity and flow.
//         </p>
//       </motion.header>

//       <motion.div
//         className="mt-12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-2"
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.15 }}
//       >
//         {/* Ladies Department */}
//         <motion.section variants={card} className="bg-white rounded-2xl p-6 shadow-lg border">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 p-3 rounded-lg bg-amber-50">
//               <FaFemale className="text-2xl text-amber-600" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">AFM in Zimbabwe — Ladies Ministry</h2>
//               <p className="mt-3 text-slate-700">
//                 The AFM in Zimbabwe Ladies Ministry, commonly referred to as the Ladies Department, has been serving for over <strong>100 years</strong>,
//                 supporting and sustaining families and contributing significantly to church projects.
//               </p>

//               <blockquote className="mt-4 border-l-4 border-amber-200 pl-4 italic text-slate-700">
//                 “Who can find a virtuous woman? For her price is far above rubies. The heart of her husband doth safely trust in her, so that he shall have no need of spoil. She will do him good and not evil all the days of her life. She seeketh wool, and flax, and worketh willingly with her hands.” – <span className="font-medium">Proverbs 31:10-13 (KJV)</span>
//               </blockquote>
//             </div>
//           </div>
//         </motion.section>

//         {/* WISMO */}
//         <motion.section variants={card} className="bg-white rounded-2xl p-6 shadow-lg border">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-50">
//               <FaHandsHelping className="text-2xl text-emerald-600" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">Widows & Single Mothers (WISMO)</h2>
//               <p className="mt-3 text-slate-700">
//                 Established in 1997 in Harare by Rev. T.I. Murefu, the WISMO department aims to support widows and single mothers — providing encouragement,
//                 spiritual teaching, and practical help to live a holy and self-sufficient life. Led by Amai Cathrine Madawo, the department champions active participation
//                 in church projects and community support.
//               </p>
//             </div>
//           </div>
//         </motion.section>

//         {/* Youth */}
//         <motion.section variants={card} className="bg-white rounded-2xl p-6 shadow-lg border">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50">
//               <FaUsers className="text-2xl text-blue-600" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">Youth Department</h2>
//               <p className="mt-3 text-slate-700">
//                 Membership is open to all church members aged <strong>18–40</strong>. The department focuses on nurturing spiritual gifts, character formation,
//                 and equipping young men and women for service in the church and community.
//               </p>

//               <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
//                 <li>Nurture spiritual gifts and talents for service to the Lord.</li>
//                 <li>Provide spiritual education and character formation according to the Word of God.</li>
//                 <li>Mobilize funds for departmental and church objectives.</li>
//                 <li>Establish and manage AFM fellowship groups in educational institutions nationwide.</li>
//               </ul>
//             </div>
//           </div>
//         </motion.section>

//         {/* Activities */}
//         <motion.section variants={card} className="bg-white rounded-2xl p-6 shadow-lg border">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 p-3 rounded-lg bg-rose-50">
//               <FaCalendarAlt className="text-2xl text-rose-600" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">Activities & Conferences</h2>
//               <p className="mt-3 text-slate-700">
//                 The department organises assembly, provincial and national conferences. Annual conferences are held in <strong>April</strong> at the Rufaro Conference Centre in Masvingo.
//               </p>

//               <div className="mt-4 text-slate-700 space-y-2">
//                 <div className="flex items-start gap-3">
//                   <FaPrayingHands className="mt-1 text-amber-500" />
//                   <span>Youth leadership seminars</span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaHeartbeat className="mt-1 text-red-500" />
//                   <span>Presidential Sports Cups</span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaBookOpen className="mt-1 text-slate-600" />
//                   <span>Talent showcases & Youth Choral Competitions</span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaUsers className="mt-1 text-blue-600" />
//                   <span>Youth Business Dinners</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Children’s Ministry */}
//         <motion.section variants={card} className="bg-white rounded-2xl p-6 shadow-lg border lg:col-span-2">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 p-3 rounded-lg bg-indigo-50">
//               <FaChild className="text-2xl text-indigo-600" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">Children’s Ministry / Department</h2>
//               <p className="mt-3 text-slate-700">
//                 The Children’s Ministry warmly welcomes all members under the age of eighteen. Children are supported by parents or guardians in exercising their rights and duties.
//               </p>

//               <h3 className="mt-4 font-semibold text-slate-800">Purpose</h3>
//               <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
//                 <li>To lead children to the Kingdom of God by helping them accept the Lord Jesus Christ.</li>
//                 <li>Recommend water baptism for children who meet the necessary criteria.</li>
//                 <li>Encourage children to seek the Baptism of the Holy Spirit.</li>
//                 <li>Facilitate and nurture spiritual growth and equip children for ministry.</li>
//                 <li>Edify the children and shape their spiritual character according to the Word of God.</li>
//                 <li>Proclaim the Gospel through the Children’s Ministry and mobilize funding to support its activities.</li>
//               </ul>

//               <h3 className="mt-4 font-semibold text-slate-800">Activities</h3>
//               <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
//                 <li>Weekly children’s services (Sunday School).</li>
//                 <li>Annual Conference at Rufaro Conference Centre.</li>
//                 <li>Training educators and teachers dedicated to children’s ministry.</li>
//                 <li>Researching trends in Christian Children Education for implementation.</li>
//               </ul>
//             </div>
//           </div>
//         </motion.section>

//         {/* Welfare */}
//         <motion.section variants={card} className="bg-white rounded-2xl p-6 shadow-lg border lg:col-span-2">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 p-3 rounded-lg bg-yellow-50">
//               <FaHandsHelping className="text-2xl text-yellow-600" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">Welfare Department</h2>
//               <p className="mt-3 text-slate-700">
//                 The Welfare Department cares for and serves the poor and needy within the church and the surrounding community.
//               </p>

//               <h3 className="mt-4 font-semibold text-slate-800">Our Goals</h3>
//               <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
//                 <li>Assist members in need to meet basic needs.</li>
//                 <li>Reach out to needy children and adults, irrespective of background, to extend the love of God.</li>
//                 <li>Periodically support the needy with necessities by partnering with charities and shelters.</li>
//                 <li>Distribute foodstuffs, clothing, blankets, towels, toiletries and other basic items as resources allow.</li>
//               </ul>
//             </div>
//           </div>
//         </motion.section>
//       </motion.div>
//     </main>
//   );
// }
