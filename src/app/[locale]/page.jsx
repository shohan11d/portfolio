"use client";

import Cta from "../components/Cta/Cta";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Stack from "../components/Stack/Stack";
import Script from 'next/script';


export default function Home() {

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mohammad Shohan",
            url: "https://shohan11d.pages.dev",
            sameAs: [
              "https://github.com/shohan11d",
              "https://www.linkedin.com/in/shohan11d/"
            ],
            jobTitle: "Full-stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance"
            },
            description: "Full-stack web developer specializing in modern web technologies like React, Next.js, Node. Welcome to my portfolio.",
            image: "https://shohan11d.pages.dev/images/profile_pic.png"
          }),
        }}
      />

      <div
        className="px-[130px] py-[40px] xl:px-[30px] xs:px-2 overflow-x-hidden"
        id="home"
      >
        <Header />
        <main className="my-32 lg:my-10">
          <Hero />
          <Projects />
          <Stack />
          <Experience />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
}
