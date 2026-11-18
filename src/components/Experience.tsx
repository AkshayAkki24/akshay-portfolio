
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
  Server,
  Monitor,
  Workflow,
  ShieldCheck,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SkillTag from './SkillTag'

const responsibilityGroups = [
  {
    title: 'Backend Engineering',
    description: 'Backend services, APIs and data management.',
    icon: Server,
    items: [
      'Developed and maintained backend services using Java 25, Spring Boot and microservices architecture.',
      'Built REST APIs and complex PostgreSQL queries for healthcare data processing and claim workflows.',
      'Worked on policy caching, claim-processing workflows and service integrations.',
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Enterprise application modules and user interfaces.',
    icon: Monitor,
    items: [
      'Developed React.js modules for Crawler Management, Curation, Policy Management and Reporting.',
      'Built application interfaces supporting file uploads, referential data, task management and policy configuration.',
      'Contributed to reusable UI components and frontend integration with backend services.',
    ],
  },
  {
    title: 'Data Processing & Automation',
    description: 'Source-data ingestion and workflow integration.',
    icon: Workflow,
    items: [
      'Implemented web crawler and source-data ingestion workflows.',
      'Worked on Stage, Delta and Target data processing, including validation and persistence.',
      'Contributed to scheduled crawler execution, SharePoint integration and notification workflows.',
    ],
  },
  {
    title: 'Engineering & Delivery',
    description: 'Application quality, support and delivery.',
    icon: ShieldCheck,
    items: [
      'Implemented role-based access control using Spring Security.',
      'Contributed to JDK and Spring Boot upgrades and SonarQube code-quality improvements.',
      'Participated in Agile sprint delivery, debugging, defect resolution and production support.',
    ],
  },
]

const technologies = [
  'Java 25',
  'Spring Boot',
  'Microservices',
  'REST APIs',
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
            Building enterprise healthcare applications through backend
            engineering, frontend development, data processing and
            cross-functional collaboration.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative ml-2 border-l border-white/10 pl-6 sm:ml-3 sm:pl-10 md:pl-12">

          <div className="relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/10 sm:-left-[48px]" />

            <article className="reveal group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.035] sm:p-7 md:p-9">

              {/* Company and Role */}
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10">
                      <BriefcaseBusiness
                        className="text-cyan-400"
                        size={22}
                      />
                    </div>

                    <span className="text-sm font-medium text-cyan-400">
                      Professional Experience
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Software Engineer
                  </h3>

                  <p className="mt-2 text-base font-medium text-cyan-400/90 sm:text-lg">
                    Java Full Stack Developer
                  </p>

                  <p className="mt-3 text-sm font-medium text-gray-300">
                    AMPS Healthcare Pvt. Ltd.
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    India
                  </p>
                </div>

                {/* Employment Details */}
                <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-gray-400 sm:p-5 lg:min-w-[230px]">
                  <div className="flex items-center gap-3">
                    <CalendarDays
                      size={18}
                      className="shrink-0 text-cyan-400"
                    />
                    <span>July 2021 – Present</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={18}
                      className="shrink-0 text-cyan-400"
                    />
                    <span>Healthcare & Insurance</span>
                  </div>
                </div>
              </div>

              <div className="my-8 border-t border-white/10 sm:my-10" />

              {/* Featured Project */}
              <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.035] p-5 sm:p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Featured Project
                </p>

                <h4 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  IPU – Intelligent Policy Update
                </h4>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                  A healthcare payment integrity application designed to
                  identify inappropriate claim billing, manage configurable
                  policies and support insurance claim processing through
                  integrated data ingestion and policy evaluation workflows.
                </p>
              </div>

              {/* Engineering Responsibilities */}
              <div className="mt-9 sm:mt-11">
                <div className="mb-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
                    What I Do
                  </p>

                  <h4 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Engineering Responsibilities
                  </h4>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {responsibilityGroups.map((group) => {
                    const Icon = group.icon

                    return (
                      <div
                        key={group.title}
                        className="rounded-xl border border-white/10 bg-white/[0.015] p-5 transition-colors duration-300 hover:border-cyan-400/25 sm:p-6"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                            <Icon size={20} />
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-white sm:text-base">
                              {group.title}
                            </h5>

                            <p className="mt-1 text-xs text-gray-500">
                              {group.description}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {group.items.map((item) => (
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
                    )
                  })}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mt-9 border-t border-white/10 pt-8 sm:mt-11 sm:pt-9">
                <div className="mb-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Tools & Technologies
                  </p>

                  <h4 className="text-xl font-semibold text-white">
                    Technology Stack
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <SkillTag
                      key={technology}
                      skill={technology}
                    />
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
