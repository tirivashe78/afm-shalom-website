'use client'
import { FaWhatsapp } from 'react-icons/fa'


export default function WhatsAppButton() {
const phone = '+263777051088' // replace with church number, e.g. 2637XXXXXXXX
const url = `https://wa.me/${phone}?text=${encodeURIComponent('Hello AFM Shalom Center')}`


return (
<a aria-label="Chat with us on WhatsApp" href={url} target="_blank" rel="noopener noreferrer"
className="fixed right-4 bottom-6 z-50 w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-300">
<FaWhatsapp size={22} />
</a>
)
}