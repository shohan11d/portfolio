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
  title: "K. M. Shohan | Full-Stack Developer",
  description: "I'm K. M. Shohan, a full-stack developer specializing in modern web technologies like Angular, React and Next.js. Welcome to my portfolio.",
  openGraph: {
    title: "K. M. Shohan | Full-Stack Developer",
    description: "Check out K. M. Shohan's full-stack projects built with Next.js and tailwind.",
    url: "https://kmdshohan.pages.dev",
    siteName: "K. M. Shohan Portfolio",
    images: [
      {
        url: "https://kmdshohan.pages.dev/images/tucano.jpg",
        width: 1200,
        height: 630,
        alt: "K. M. Shohan Portfolio Tucano",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K. M. Shohan | Full-Stack Developer Portfolio",
    description: "Full-Stack developer passionate about creating performant, accessible web apps.",
    images: ["https://kmdshohan.pages.dev/images/tucano.jpg"],
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
