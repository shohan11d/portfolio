import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const current = {
    title: "Front-end Developer I",
    company: "GFT Technologies",
    description: "Acted as the primary person responsible for the maintenance and evolution of the Brazilian pages on the portal of a major international bank. Part of an agile squad with daily interaction with global teams.",
    date: "Jan 2025 - Present",
    obligations: [
      "Developed and reviewed Angular interfaces based on Figma prototypes, ensuring visual fidelity and consistency with the global design system.",
      "Integrated REST APIs and implemented mocks with Wiremock to enable development and testing independent of the Back-End.",
      "Maintained code quality according to global standards and Angular and TypeScript best practices.",
      "Collaborated with global teams, requesting and performing code reviews, and handling Squad-related requests.",
    ],
    achievements: [
      "Planned and executed the correction of three years of technical debt, fixing over 1,000 ESLint/TypeScript violations, migrating NgRx (Redux) to Signals/RxJS and replacing deprecated APIs and components.",
      "Contributed to the project's UI/UX overhaul, developing high-fidelity interfaces from Figma prototypes and assisting the design team with technical questions, suggestions, and leading four-eyes validations.",
      "Implemented unit tests with Jest, raising code coverage to a minimum of 90% and establishing this indicator with the Squad as DoD (Definition of Done).",
      "Developed end-to-end (E2E) tests with WebdriverIO for main user flows, increasing deploy reliability and reducing production incident response time.",
    ],
    skills: [
      { img: "/images/skills/angular.png", name: "Angular" },
      { img: "/images/skills/ts.png", name: "TypeScript" },
      { img: "/images/skills/nx.png", name: "NX Monorepo" },
      { img: "/images/skills/git.png", name: "Git" },
      { img: "/images/skills/figma.png", name: "Figma" },
      { img: "/images/skills/rxjs.png", name: "RxJS" },
      { img: "/images/skills/wio.png", name: "WebdriverIO" },
      { img: "/images/skills/jest.png", name: "Jest" },
    ]
  };


  
  const secondary = {
    title: "Mid-level Front-end Developer",
    company: "CONSISTE CONSULTORIA E SISTEMAS LTDA",
    date: "Jun 2022 - Jan 2025",
    obligations: [
      "Developed and maintained 5+ Angular web applications, ensuring high performance, responsiveness and good user experience through regular usability testing and feedback incorporation.",
      "Conceptualized and implemented reusable Angular libraries to streamline development and centralize maintenance.",
      "Explored and integrated new technologies and methodologies to enhance user experience.",
    ],
    achievements: [
      "Designed and developed 6 reusable Angular libraries, reducing development time by 60% and centralizing maintenance, resulting in a more efficient workflow across 10+ projects.",
      "Developed a dynamic dashboard web application similar to Microsoft Power BI, enabling users to create custom dashboards with flexible features for presenting data integrated from public entities like CADASTUR and IBGE.",
      "Enhanced the UI/UX of an advanced table component with filtering, aggregation, and sorting functionalities, improving data access efficiency and user satisfaction.",
    ],
    skills: [
      { img: "/images/skills/angular.png", name: "Angular" },
      { img: "/images/skills/ts.png", name: "TypeScript" },
      { img: "/images/skills/scss.png", name: "SCSS" },
      { img: "/images/skills/git.png", name: "Git" },
      { img: "/images/skills/figma.png", name: "Figma" },
    ]
  };
  

  return (
    <section className="relative scroll-mt-16 " id="experience">
      {/* radial-gradient(circle at center, white -20%, transparent 80%) */}
      {/* <Image width={1400} height={500} className='absolute inset-0' src={'images/bbblurry (11).svg' } alt={''}></Image> */}
      {/* <div  style={{ backgroundImage: `url('images/bbblurry (11).svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', maskImage: 'radial-gradient(circle at center, white -20%, transparent 100%)'}} className='absolute inset-0'></div> */}
      <div className="mb-7 flex gap-2 flex-col">

      <h2 className="text-4xl lg:text-3xl text-center  sm:text-2xl font-light text-wrap leading-tight">
        {"My Experience"}
      </h2>
      {/* <label className='dark:bg-white/95 w-fit  bg-accent-orange text-white dark:text-black/90 h-min flex-grow-0 lg:text-[10px] sm:text-[8px]'>{t('description')}</label> */}
      </div>
      <div className="flex flex-col divide-y-[1px] gap-6">
      <ExperienceCard {...current} />
      <ExperienceCard {...secondary} />
      </div>
      {/* <div className="flex gap-28 mt-24 xl:gap-0 lg:gap-10 xl:mt-10 lg:grid lg:grid-cols-1 ">
            {experiences.map((exp,i) => (
            <div key={i} className="flex flex-col items-center ">
                <h3 style={{color: exp.hex}} className={`text-7xl lg:text-6xl font-bold`}>
                    {exp.value}
                </h3>
                <span className="w-96 xs:w-fit text-center lg:text-xs ">{t(exp.labelKey)}</span>
            </div>
            ))}
        </div> */}
    </section>
  );
}
