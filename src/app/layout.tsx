import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Martian_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Providers from './contexts/Providers';
import './globals.css';

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const ibm = IBM_Plex_Mono({ weight: ["100", "300", "700"], subsets: ["latin"], variable: "--font-ibm" });
const martian = Martian_Mono({ weight: ["100", "400", "700"], subsets: ["latin"], variable: "--font-martian" });

export const metadata: Metadata = {
  title: "Eric Augusto | Frontend Developer",
  description: "I'm Eric Augusto a frontend developer specializing in modern web technologies like Angular, React and Next.js. Welcome to my portfolio.",
  openGraph: {
    title: "Eric Augusto | Frontend Developer",
    description: "Check out Eric Augusto's frontend projects built with Next.js and tailwind.",
    url: "https://ericaugusto.pages.dev",
    siteName: "Eric Augusto Portfolio",
    images: [
      {
        url: "https://ericaugusto.pages.dev/images/tucano.jpg",
        width: 1200,
        height: 630,
        alt: "Eric Augusto Portfolio Tucano",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Augusto | Frontend Developer Portfolio",
    description: "Frontend developer passionate about creating performant, accessible web apps.",
    images: ["https://ericaugusto.pages.dev/images/tucano.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full min-w-full scroll-smooth overflow-x-hidden" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${ibm.variable} ${martian.variable} font-sans h-full w-full bg-[hsl(60,13%,100%)] overflow-x-hidden dark:text-white text-black dark:bg-[#000000]`} suppressHydrationWarning={true}>
        <Providers>
          {children}
          <Toaster richColors/>
        </Providers>
      </body>
    </html>
  );
}
