'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedBadge from './AnimatedBadge'
import Container from './Container'
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
return (
<section className="relative">
<div className="absolute inset-0 -z-10">
<Image src="/images/hero2.jpg" alt="AFM Shalom Center building exterior" fill style={{ objectFit: 'cover' }} priority />
<div className="absolute inset-0 bg-black/45" />
</div>


<Container>
<div className="min-h-[60vh] flex items-center">
<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
<p className="text-amber-300 text-sm uppercase tracking-wider"></p>
<h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"> <Typewriter
            words={['Welcome to AFM Shalom Center']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={60000}
          /></h1>
<p className="mt-4 text-lg text-slate-200 max-w-2xl">
<span className="font-semibold text-white-600">Established for growth, expansion and increase.</span>
</p>


<AnimatedBadge items={[
'Pray without ceasing',
'The Spirit of the Lord',
'The House of the Lord',
'Read Your Bible Every Day'
]} />


<div className="mt-6 flex gap-3">
<a href="/notices" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transform-gpu transition">Join us this Sunday</a>
<a href="/get-connected" className="inline-flex items-center px-5 py-3 border border-white/30 rounded-lg text-white/90 hover:bg-white/5">Get Connected</a>
</div>
</motion.div>
</div>
</Container>
</section>
)
}