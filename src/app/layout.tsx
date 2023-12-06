import type { Metadata } from 'next'
import { Noto_Serif, Raleway } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/providers/Providers';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  variable: "--Raleway",
  // Fix font load errors: https://github.com/vercel/next.js/issues/45080#issuecomment-1646678980
  preload: false,
  display: "auto",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--NotoSerif",
  // Fix font load errors: https://github.com/vercel/next.js/issues/45080#issuecomment-1646678980
  preload: false,
  display: "auto",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
  title: {
    default: "История края - история для края",
    template: `%s | История края`,
  },
  description: 'Начни изучать историю Красноярского края прямо сейчас',
  openGraph: {
    title: "История края - история для края",
    description: 'Начни изучать историю Красноярского края прямо сейчас',
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "История края - история для края",
    images: ["/images/image-placeholder.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang={"ru"}
      suppressHydrationWarning
      className={`${raleway.variable} ${notoSerif.variable}`}
    >
      <body className="m-0 flex min-h-screen flex-col">
        <Providers>
          <Header />
          <div className="flex-1 pt-20">{children}</div>
          <Footer tel='+7 999 999 99 99' email='pochta@gmail.com' />
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
