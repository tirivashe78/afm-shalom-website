'use client';

import Container from '@/components/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPrayingHands, FaGlobe, FaHeart, FaCross, FaPaw, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

// Leadership data
const leadership = [
  { name: 'Pastor Nhiwatiwa', position: 'Pastor', image: '/images/pastor.jpg' },
  { name: 'Baba Zizhou', position: 'Chairperson', image: '/images/chairperson.jpg' },
];

const visionPoints = [
  'Proclaim the gospel of salvation worldwide through our words and deeds.',
  'Baptize those who believe in water in the name of the Father, Son, and Holy Spirit.',
  'Pray for converts and prepare them for Holy Spirit baptism with evidence of speaking in tongues.',
  'Heal the sick in the name of Jesus Christ.',
  'Make disciples and equip them for ministry.',
  'Prepare members for the second coming through teaching, prayer, fasting, education, fellowship, counselling, assisting the needy, and performing works of faith.',
];

export default function AboutPage() {
  const bishopLink = 'https://example.com/bishop-ad-madawo';
  const mapsLink = 'https://www.google.com/maps/place/AFM+Westlea+Shalom+Centre,+Harare/@-17.8197304,30.9727392,17z';

  return (
    <Container>
      {/* Hero Section */}
      <motion.section
        className="mt-20 text-center py-16 bg-[linear-gradient(180deg,#f7f3ee,transparent),url('/images/church-bg.jpg')] bg-cover bg-center rounded-2xl relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="absolute -top-8 -left-8 w-64 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#c6f6d5" d="M44.8,-61.7C56.6,-50.7,60.6,-31.9,64.2,-12.8C67.8,6.3,71,25.8,63.1,39.1C55.2,52.5,36.1,59.8,16.3,67.4C-3.5,75,-23.9,82.9,-35.5,76.9C-47.1,71,-49.9,51.1,-55.9,33.3C-61.9,15.4,-71.1,-0.4,-67.9,-15.7C-64.8,-31,-49.3,-46.7,-31.9,-58.1C-14.5,-69.6,4.6,-77.8,23.9,-77.1C43.3,-76.3,62.7,-66.6,44.8,-61.7Z" transform="translate(100 100)" />
        </svg>

        <div className="bg-black bg-opacity-70 p-8 rounded-2xl inline-block relative z-10 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-50 mb-4">
            About AFM Shalom Center
          </h1>
          <p className="text-lg text-amber-100/90 max-w-3xl mx-auto">
            Established for growth, expansion, and increase — a community rooted in Holy Spirit power, fellowship, and compassionate service.
          </p>

          {/* History */}
          <motion.div
            className="mt-6 inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full shadow-inner"
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FaPaw className="text-yellow-300" />
            <div className="text-left">
              <div className="text-sm text-amber-100/90">
                Officially opened on <strong>21 April 2024</strong>
              </div>
              <a
                href={bishopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-200 hover:underline inline-flex items-center gap-2"
              >
                By AFM in Zimbabwe president Bishop A.D. Madawo <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <FaPrayingHands className="text-2xl text-yellow-600" /> Our Mission
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl">
          Filled with Holy Spirit, we evangelize, heal the sick and prepare our members for our Lord Jesus Christ’s second coming.
        </p>
      </motion.section>

      {/* Vision */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <FaGlobe className="text-2xl text-blue-600" /> Our Vision
        </h2>
        <ul className="space-y-4 list-none">
          {visionPoints.map((point, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3 text-slate-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <FaCross className="mt-1 text-green-600" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Leadership & Location */}
      <motion.section className="mt-16 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <FaHeart className="text-2xl text-red-600" /> Our Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl shadow-lg overflow-hidden bg-white cursor-pointer hover:scale-105 transform transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="relative h-64 w-full bg-amber-50">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center bg-gradient-to-t from-white to-amber-50">
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-slate-600">{leader.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location */}
        <motion.aside
          className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-6 shadow-xl border border-amber-100"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-white/70 p-3 shadow">
              <FaPaw className="text-xl text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Visit Us</h3>
              <p className="text-sm text-slate-700">All are welcome — bring friends and family.</p>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-amber-700" />
            <div>
              <p className="font-medium">AFM Shalom Center</p>
              <p className="text-sm text-slate-700">Harare, Zimbabwe</p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-amber-600 hover:underline"
              >
                Open in Google Maps <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </motion.aside>
      </motion.section>
    </Container>
  );
}


// 'use client';

// import Container from '@/components/Container';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { FaPrayingHands, FaGlobe, FaHeart, FaCross, FaPaw, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

// // Leadership data
// const leadership = [
//   { name: 'Pastor Nhiwatiwa', position: 'Pastor', image: '/images/pastor.jpg' },
//   { name: 'Baba Zizhou', position: 'Chairperson', image: '/images/chairperson.jpg' },
//   // { name: 'Mike Chikowore', position: 'Treasurer', image: '/images/leadership/treasurer.jpg' },
// ];

// const visionPoints = [
//   'Proclaim the gospel of salvation worldwide through our words and deeds.',
//   'Baptize those who believe in water in the name of the Father, Son, and Holy Spirit.',
//   'Pray for converts and prepare them for Holy Spirit baptism with evidence of speaking in tongues.',
//   'Heal the sick in the name of Jesus Christ.',
//   'Make disciples and equip them for ministry.',
//   'Prepare members for the second coming through teaching, prayer, fasting, education, fellowship, counselling, assisting the needy, and performing works of faith.',
// ];

// export default function AboutPage() {
//   // Replace these placeholders with actual URLs
//   const bishopLink = 'https://example.com/bishop-ad-madawo'; // <-- replace with real article/profile
//   const mapsLink = 'https://www.google.com/maps/place/AFM+Westlea+Shalom+Centre,+Harare/@-17.8197304,30.9727392,17z/data=!3m1!4b1!4m6!3m5!1s0x1931a66e0926d82f:0xa6fd42623eca510d!8m2!3d-17.8197355!4d30.9753141!16s%2Fg%2F11c80bl469?entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D'; // <-- replace with your exact map link

//   return (
//     <>
//       <Container>
//         {/* Hero Section */}
//         <motion.section
//           className="mt-20 text-center py-16 bg-[linear-gradient(180deg,#f7f3ee,transparent),url('/images/church-bg.jpg')] bg-cover bg-center rounded-lg relative overflow-hidden"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* decorative organic blob (animalistic, subtle) */}
//           <svg className="absolute -top-8 -left-8 w-64 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//             <path fill="#c6f6d5" d="M44.8,-61.7C56.6,-50.7,60.6,-31.9,64.2,-12.8C67.8,6.3,71,25.8,63.1,39.1C55.2,52.5,36.1,59.8,16.3,67.4C-3.5,75,-23.9,82.9,-35.5,76.9C-47.1,71,-49.9,51.1,-55.9,33.3C-61.9,15.4,-71.1,-0.4,-67.9,-15.7C-64.8,-31,-49.3,-46.7,-31.9,-58.1C-14.5,-69.6,4.6,-77.8,23.9,-77.1C43.3,-76.3,62.7,-66.6,44.8,-61.7Z" transform="translate(100 100)" />
//           </svg>

//           <div className="bg-black bg-opacity-70 p-8 rounded-3xl inline-block relative z-10 max-w-4xl">
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-50 mb-4">
//               About AFM Shalom Center
//             </h1>
//             <p className="text-lg text-amber-100/90 max-w-3xl mx-auto">
//               Established for growth, expansion, and increase — a community rooted in Holy Spirit power, fellowship, and compassionate service.
//             </p>

//             {/* History & Opening (animal accent) */}
//             <motion.div
//               className="mt-6 inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full shadow-inner"
//               initial={{ y: 8, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               <FaPaw className="text-yellow-300" />
//               <div className="text-left">
//                 <div className="text-sm text-amber-100/90">
//                   Officially opened on <strong>21 April 2024</strong>
//                 </div>
//                 <a
//                   href={bishopLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-amber-200 hover:underline inline-flex items-center gap-2"
//                 >
//                   By AFM in Zimbabwe president Bishop A.D. Madawo <FaExternalLinkAlt className="text-xs" />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Mission Section */}
//         <motion.section
//           className="mt-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
//             <FaPrayingHands className="text-2xl text-yellow-600" /> Our Mission
//           </h2>
//           <p className="text-lg text-slate-700 max-w-3xl">
//             Filled with Holy Spirit, we evangelize, heal the sick and prepare our members for our Lord Jesus Christ’s second coming.
//           </p>
//         </motion.section>

//         {/* Vision Section */}
//         <motion.section
//           className="mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
//             <FaGlobe className="text-2xl text-blue-600" /> Our Vision
//           </h2>
//           <ul className="space-y-4 list-none">
//             {visionPoints.map((point, idx) => (
//               <motion.li
//                 key={idx}
//                 className="flex items-start gap-3 text-slate-700"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//               >
//                 <FaCross className="mt-1 text-green-600" />
//                 <span>{point}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.section>

//         {/* Leadership & Location Section */}
//         <motion.section className="mt-16 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           <div className="lg:col-span-2">
//             <h2 className="text-3xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
//               <FaHeart className="text-2xl text-red-600" /> Our Leadership
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {leadership.map((leader, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="rounded-2xl shadow-lg overflow-hidden bg-white cursor-pointer hover:scale-105 transform transition-transform duration-300"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.2 }}
//                 >
//                   <div className="relative h-64 w-full bg-amber-50">
//                     <Image
//                       src={leader.image}
//                       alt={leader.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="p-4 text-center bg-gradient-to-t from-white to-amber-50">
//                     <h3 className="font-semibold text-lg">{leader.name}</h3>
//                     <p className="text-slate-600">{leader.position}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Animalistic / Location Card */}
//           <motion.aside
//             className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-6 shadow-xl border border-amber-100"
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="rounded-full bg-white/70 p-3 shadow">
//                 <FaPaw className="text-xl text-amber-500" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">Visit Us</h3>
//                 <p className="text-sm text-slate-700">All are welcome — bring friends and family.</p>
//               </div>
//             </div>

//             <div className="mt-4 flex items-start gap-3">
//               <FaMapMarkerAlt className="mt-1 text-amber-700" />
//               <div>
//                 <p className="font-medium">AFM Shalom Center</p>
//                 <p className="text-sm text-slate-700">
//                   Harare, Zimbabwe {/* replace with exact street/address if you have one */}
//                 </p>
//                 <a
//                   href={mapsLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 inline-flex items-center gap-2 text-sm text-amber-600 hover:underline"
//                 >
//                   Open in Google Maps <FaExternalLinkAlt className="text-xs" />
//                 </a>
//               </div>
//             </div>
//           </motion.aside>
//         </motion.section>
//       </Container>
//     </>
//   );
// }
