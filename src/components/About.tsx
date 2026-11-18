
import {
  Code2,
  Database,
  Layers3,
  BriefcaseBusiness,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  {
    value: '5+',
    label: 'Years of Professional Experience',
    icon: BriefcaseBusiness,
  },
  {
    value: 'Java',
    label: 'Backend Engineering & APIs',
    icon: Code2,
  },
  {
    value: 'React',
    label: 'Frontend Development',
    icon: Layers3,
  },
  {
    value: 'SQL',
    label: 'Database Design & Queries',
    icon: Database,
  },
]

function About() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="about"
      className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="reveal mb-10 sm:mb-14">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            About Me
          </p>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">

            {/* Left Content */}
            <div>
              <h2 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Building technology
                <span className="text-gray-500">
                  {' '}that solves real problems.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                From backend architecture to user-facing applications,
                I enjoy building reliable solutions that make a
                meaningful difference.
              </p>
            </div>

            {/* Right Content */}
            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                I'm a Java Full Stack Developer with 5+ years of
                professional experience developing and supporting
                enterprise healthcare and insurance applications.
                Currently, I work at AMPS Healthcare, contributing
                to applications that support healthcare data
                processing and payment integrity.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                My core expertise includes Java 25, Spring Boot,
                microservices, REST APIs, Spring Security and
                PostgreSQL. On the frontend, I develop responsive
                application modules using React.js, JavaScript,
                HTML and CSS.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                I've worked across data ingestion pipelines,
                Stage-Delta-Target processing, policy management,
                claim workflows, web crawlers and enterprise
                integrations. I also contribute to code quality,
                debugging, production support and Agile delivery.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                I enjoy solving complex problems, writing maintainable
                code and continuously improving my engineering skills
                while exploring modern technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="reveal mt-14 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-6 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-6"
              >
                <span className="absolute right-4 top-4 text-xs text-gray-700 transition-colors group-hover:text-cyan-400/60">
                  0{index + 1}
                </span>

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Icon size={20} />
                </div>

                <h3 className="break-words text-2xl font-bold tracking-tight text-cyan-400 sm:text-3xl md:text-4xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About
