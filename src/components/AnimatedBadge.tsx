'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'


export default function AnimatedBadge({ items }: { items: string[] }) {
const [index, setIndex] = useState(0)
useEffect(() => {
const t = setInterval(() => setIndex(i => (i + 1) % items.length), 3000)
return () => clearInterval(t)
}, [items.length])


return (
<div className="mt-4">
<AnimatePresence mode="wait">
<motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }}>
<span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm">{items[index]}</span>
</motion.div>
</AnimatePresence>
</div>
)
}