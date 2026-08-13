import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const current = {
    title: "Full-Stack Developer",
    company: "TIC Advisor",
    description:
      "Building and maintaining the company web platform for a testing, inspection, certification, and training provider in Bangladesh. Work across the stack with React, Next.js, Node.js, and MongoDB to ship responsive, production-ready features.",
    date: "Jul 2024 - Present",
    obligations: [
      "Translate UI/UX designs into responsive React and Next.js interfaces using TypeScript, Tailwind CSS, and modern component patterns.",
      "Integrate REST APIs and connect frontend flows to MongoDB-backed services across the MERN stack.",
      "Implement state management, reusable UI components, and performance-focused layouts for mobile and desktop.",
      "Collaborate with the team on feature delivery, code reviews, and iterative product improvements.",
    ],
    achievements: [
      "Developed and maintained the TIC Advisor web platform used to present services and engage clients online.",
      "Delivered full-stack features end to end — from interface implementation to API integration and deployment.",
      "Improved responsiveness, usability, and cross-browser compatibility across key user-facing pages.",
    ],
    skills: [
      { img: "/images/skills/react.png", name: "React" },
      { img: "/images/skills/next.png", name: "Next.js" },
      { img: "/images/skills/ts.png", name: "TypeScript" },
      { img: "/images/skills/tailwind.png", name: "Tailwind CSS" },
      { img: "/images/skills/git.png", name: "Git" },
      { img: "/images/skills/figma.png", name: "Figma" },
    ],
  };

  const secondary = {
    title: "IT Consultant",
    company: "Cotecna Inspections India Pvt. Ltd. | CPS",
    description:
      "Supported IT consulting initiatives for a global testing, inspection, and certification provider during a short-term engagement in Dhaka, Bangladesh.",
    date: "Apr 2024 - Jun 2024",
    obligations: [
      "Assisted with technical consulting and IT project support for client-facing operations.",
      "Collaborated with stakeholders to gather requirements and propose practical technology solutions.",
      "Contributed to documentation and team coordination across consulting deliverables.",
    ],
    achievements: [
      "Gained professional experience in a global TIC environment before moving into full-time web development.",
      "Applied problem-solving and communication skills in a client-focused consulting setting.",
    ],
    skills: [
      { img: "/images/skills/html.png", name: "HTML" },
      { img: "/images/skills/ts.png", name: "TypeScript" },
      { img: "/images/skills/react.png", name: "React" },
      { img: "/images/skills/git.png", name: "Git" },
    ],
  };

  return (
    <section className="relative scroll-mt-16 " id="experience">
      <div className="mb-7 flex gap-2 flex-col">
        <h2 className="text-4xl lg:text-3xl text-center  sm:text-2xl font-light text-wrap leading-tight">
          {"My Experience"}
        </h2>
      </div>
      <div className="flex flex-col divide-y-[1px] gap-6">
        <ExperienceCard {...current} />
        <ExperienceCard {...secondary} />
      </div>
    </section>
  );
}
