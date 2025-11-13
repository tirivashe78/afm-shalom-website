// import './globals.css';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-50 text-slate-800 antialiased">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'


export const metadata = {
title: 'AFM Shalom Center',
description: 'Established for growth, expansion and increase. Join us this Sunday at AFM Shalom Center.'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-white text-slate-800 antialiased">
<Header />
<main className="min-h-[70vh]">
{children}
</main>
<Footer />
<WhatsAppButton />
</body>
</html>
)
}
