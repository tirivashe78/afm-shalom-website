"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  // { href: '/gallery', label: 'Gallery' },
  { href: "/departments", label: "Departments" },
  { href: "/payments", label: "Payments" },
  // { href: '/get-connected', label: 'Get Connected' },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="backdrop-blur sticky top-0 z-40 bg-white/60 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/images/AFMI-Logo.png"
              alt="AFM Shalom logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <div className="font-semibold">AFM Shalom Center</div>
            <div className="text-xs text-slate-500">
              Established for growth, expansion and increase
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-slate-700 hover:text-primary transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md focus:outline-none focus:ring-2"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95">
          <div className="px-4 py-4 space-y-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block text-slate-700 py-2"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
