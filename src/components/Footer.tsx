import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'
import { FaWhatsapp } from 'react-icons/fa'


export default function Footer() {
return (
<footer className="border-t border-slate-200 mt-12 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
<div className="flex flex-col md:flex-row md:justify-between gap-6">
<div>
<h4 className="font-semibold">AFM Shalom Center</h4>
<p className="text-sm text-slate-600 mt-2">We are a Christ-centered, Spirit-led, Bible-believing church.</p>
<p className="text-sm text-slate-500 mt-3"><br/>Phone: +263 77 705 1088</p>
</div>


<div>
<h5 className="font-medium">Quick Links</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><Link href="/about">About Us</Link></li>
<li><Link href="/departments">Departments</Link></li>
<li><Link href="/gallery">Gallery</Link></li>
<li><Link href="/contact">Contact</Link></li>
</ul>
</div>
</div>


<div className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} AFM Shalom Center — Established for growth, expansion and increase.
    Designed by{' '}
  <a
    href="https://wa.me/263784558583"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
    aria-label="Message Tirivashe Tinarwo on WhatsApp"
  >
    <FaWhatsapp className="w-4 h-4 text-green-500" aria-hidden />
    <span className="underline">Tirivashe Tinarwo</span>
  </a>

</div>
</div>
</footer>
)
}