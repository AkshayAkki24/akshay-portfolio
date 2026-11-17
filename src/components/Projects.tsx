
import {
  ArrowUpRight,
  Code2,
  Workflow,
  CheckCircle2,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SkillTag from './SkillTag'

const projects = [
  {
    number: '01',
    title: 'Intelligent Policy Update',
    subtitle: 'Healthcare Payment Integrity Platform',
    category: 'Enterprise Healthcare Application',
    description:
      'An enterprise healthcare application that processes source data, manages configurable policies, and evaluates insurance claims to identify inappropriate billing and optimize claim payments.',
    responsibilities: [
      'Developed Spring Boot microservices for policy management and claim processing.',
      'Implemented web crawler and data-ingestion workflows.',
      'Built React modules for Curation, Policy Management and Reporting.',
      'Worked on Stage, Delta and Target data processing workflows.',
      'Integrated policy caching and claim-processing workflows.',
    ],
    technologies: [
      'Java 25',
      'Spring Boot',
      'Microservices',
      'React.js',
      'Spring Security',
      'PostgreSQL',
      'SharePoint',
      'SonarQube',
    ],
    icon: Workflow,
  },
  {
    number: '02',
    title: 'Javelina Claim Automation',
    subtitle: 'End-to-End Healthcare Claim Automation',
    category: 'Workflow & Browser Automation',
    description:
      'An automation solution that transfers healthcare claim documents, extracts structured information using OCR, and automates claim entry into the Javelina application.',
    responsibilities: [
      'Integrated Single Sign-On (SSO) for secure application access.',
      'Implemented SFTP-to-SharePoint file transfer workflows.',
      'Extracted document information using OCR and mapped it into Java DTOs.',
      'Automated claim form completion using Playwright.',
      'Worked on end-to-end processing, exception handling and workflow reliability.',
    ],
    technologies: [
      'Java',
      'SSO',
      'OCR',
      'Playwright',
      'SFTP',
      'SharePoint',
      'Java DTOs',
    ],
    icon: Code2,
  },
]

function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="reveal mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-400 sm:mb-5 sm:text-sm">
            Selected Work
          </p>

          <h2 className="max-w-4xl text-[clamp(2.2rem,6vw,4rem)] font-bold leading-tight tracking-tight">
            Projects that solve
            <span className="text-gray-500"> real problems.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Enterprise healthcare solutions focused on backend engineering,
            frontend development, workflow automation and reliable data processing.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-5 sm:space-y-7">
          {projects.map((project) => {
            const Icon = project.icon

            return (
              <article
                key={project.number}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.035] hover:shadow-[0_20px_60px_rgba(34,211,238,0.07)] sm:p-7 md:p-9 lg:p-10"
              >
                {/* Subtle Background Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.04] blur-3xl transition-opacity duration-500 group-hover:bg-cyan-400/[0.09]" />

                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">

                  {/* Project Information */}
                  <div className="min-w-0">

                    {/* Project Number and Category */}
                    <div className="mb-7 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4">
                      <span className="font-mono text-sm text-cyan-400">
                        / {project.number}
                      </span>

                      <div className="h-px w-8 bg-white/20 sm:w-12" />

                      <span className="text-[10px] uppercase tracking-[0.16em] text-gray-500 sm:text-xs">
                        {project.category}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div className="flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400 sm:h-14 sm:w-14">
                        <Icon
                          size={24}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-cyan-400 sm:text-2xl md:text-3xl lg:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mb-4 mt-3 text-sm font-medium text-cyan-400/80 sm:text-base">
                          {project.subtitle}
                        </p>

                        <p className="max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Key Contributions */}
                    <div className="mt-8 sm:mt-9">
                      <h4 className="mb-4 text-sm font-semibold text-white sm:text-base">
                        Key Contributions
                      </h4>

                      <ul className="space-y-3">
                        {project.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-gray-400"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-1.5 shrink-0 text-cyan-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technology Panel */}
                  <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      Technology Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                            <SkillTag key={technology} skill={technology} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Arrow */}
                <div className="pointer-events-none absolute right-5 top-5 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400 sm:right-7 sm:top-7">
                  <ArrowUpRight size={19} />
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Projects
