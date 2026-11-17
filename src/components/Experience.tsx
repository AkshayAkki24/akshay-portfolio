
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SkillTag from './SkillTag'

const responsibilities = [
  'Developed and maintained backend services using Java 25, Spring Boot and microservices architecture.',
  'Built REST APIs and complex PostgreSQL queries for healthcare data processing and claim workflows.',
  'Developed React.js modules for Crawler Management, Curation, Policy Management and Reporting.',
  'Implemented data ingestion workflows involving web crawlers and Stage, Delta and Target processing.',
  'Worked on policy caching, notification workflows, scheduled crawler execution and production issue resolution.',
  'Contributed to JDK and Spring Boot upgrades, SonarQube improvements and Agile sprint delivery.',
]

const technologies = [
  'Java 25',
  'Spring Boot',
  'Microservices',
  'React.js',
  'Spring Security',
  'PostgreSQL',
  'SharePoint',
  'SonarQube',
]

function Experience() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="reveal mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-400 sm:mb-5 sm:text-sm">
            Career Journey
          </p>

          <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-bold leading-tight tracking-tight">
            Professional <span className="text-gray-500">Experience.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            My professional journey building enterprise healthcare
            applications and solving real-world business problems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative ml-2 border-l border-white/10 pl-6 sm:ml-3 sm:pl-10 md:pl-12">

          {/* Timeline Item */}
          <div className="relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/10 sm:-left-[48px]" />

            <article className="reveal group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.035] sm:p-7 md:p-9">

              {/* Role and Company */}
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">

                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                      <BriefcaseBusiness
                        className="text-cyan-400"
                        size={21}
                      />
                    </div>

                    <span className="text-sm font-medium text-cyan-400">
                      Current Role
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Software Engineer
                  </h3>

                  <p className="mt-2 text-base text-gray-300 sm:text-lg">
                    Java Full Stack Developer
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    AMPS Healthcare Pvt. Ltd., India
                  </p>
                </div>

                {/* Employment Details */}
                <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-gray-500 lg:border-0 lg:pt-2">
                  <div className="flex items-center gap-3">
                    <CalendarDays
                      size={17}
                      className="shrink-0 text-cyan-400"
                    />
                    <span>July 2021 – Present</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={17}
                      className="shrink-0 text-cyan-400"
                    />
                    <span>Healthcare & Insurance Domain</span>
                  </div>
                </div>
              </div>

              <div className="my-7 border-t border-white/10 sm:my-9" />

              {/* Key Project */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-400">
                  Featured Project
                </p>

                <h4 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">
                  IPU – Intelligent Policy Update
                </h4>

                <p className="max-w-4xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                  Developed and enhanced a healthcare payment integrity
                  application designed to identify inappropriate claim
                  billing, manage configurable policies and support
                  efficient insurance claim processing.
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mt-8 sm:mt-10">
                <h4 className="mb-5 text-base font-semibold text-white sm:text-lg">
                  Key Responsibilities
                </h4>

                <ul className="space-y-4">
                  {responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-gray-400 sm:text-base"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1.5 shrink-0 text-cyan-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="mt-9 sm:mt-10">
                <h4 className="mb-4 text-base font-semibold text-white sm:text-lg">
                  Technology Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                        <SkillTag key={technology} skill={technology} />

                  ))}
                </div>
              </div>

            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
