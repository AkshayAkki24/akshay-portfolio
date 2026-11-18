
import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  Workflow,
  CheckCircle2,
  X,
  ExternalLink,
  Layers3,
  Target,
  Lightbulb,
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
    overview:
      'IPU (Intelligent Policy Update) is a healthcare payment-integrity solution designed to support healthcare data ingestion, policy configuration and automated claim evaluation.',
    challenge:
      'Healthcare source data and insurance claim workflows require reliable ingestion, validation, policy management and processing to help identify inappropriate billing.',
    solution:
      'Contributed to backend microservices and frontend modules supporting data ingestion, curation, policy configuration, claim processing and reporting.',
    workflow: [
      'Source files are collected through web crawler workflows and stored in SharePoint.',
      'The loader processes source data through Stage, Delta and Target stages.',
      'Curation workflows support validation and task-based data processing.',
      'Configured policies are managed through policy management modules.',
      'The claim-processing workflow evaluates claim information against configured policies.',
      'Reporting interfaces present claim-processing results and savings information.',
    ],
    responsibilities: [
      'Developed Spring Boot microservices for policy management and claim processing.',
      'Implemented web crawler and data-ingestion workflows.',
      'Built React modules for Curation, Policy Management and Reporting.',
      'Worked on Stage, Delta and Target data processing workflows.',
      'Integrated policy caching and claim-processing workflows.',
      'Implemented role-based access using Spring Security.',
      'Developed complex PostgreSQL queries for validation and application workflows.',
      'Worked on notifications, debugging, defect resolution and code-quality improvements.',
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
    highlights: [
      'Healthcare source-data ingestion',
      'Stage / Delta / Target processing',
      'Policy configuration and management',
      'Automated claim evaluation',
      'Role-based access control',
      'Reporting and notifications',
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
    overview:
      'Javelina Claim Automation is an end-to-end workflow that helps automate healthcare claim document handling, information extraction and claim form entry.',
    challenge:
      'Healthcare claim documents contain information that needs to be transferred, extracted, mapped into structured data and entered into the target application.',
    solution:
      'Contributed to an integrated workflow combining SFTP file transfers, SharePoint storage, OCR extraction, Java DTO mapping, SSO and Playwright browser automation.',
    workflow: [
      'Claim documents are received through SFTP.',
      'Files are transferred to SharePoint for downstream processing.',
      'OCR extracts relevant information from the documents.',
      'Extracted information is mapped into Java DTOs.',
      'The workflow uses the structured information to automate claim form completion.',
      'Playwright interacts with the Javelina application to enter claim information.',
    ],
    responsibilities: [
      'Integrated Single Sign-On (SSO) for secure application access.',
      'Implemented SFTP-to-SharePoint file transfer workflows.',
      'Extracted document information using OCR and mapped it into Java DTOs.',
      'Automated claim form completion using Playwright.',
      'Worked on end-to-end processing and workflow integration.',
      'Handled exception scenarios, processing status and notifications.',
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
    highlights: [
      'Secure application access',
      'SFTP file transfer',
      'SharePoint integration',
      'OCR-based extraction',
      'Java DTO mapping',
      'Playwright browser automation',
    ],
    icon: Code2,
  },
]

type Project = (typeof projects)[number]

function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  useEffect(() => {
    if (!activeProject) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [activeProject])

  return (
    <>
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
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.04] blur-3xl transition-opacity duration-500 group-hover:bg-cyan-400/[0.09]" />

                  <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">

                    {/* Project Information */}
                    <div className="min-w-0">

                      <div className="mb-7 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4">
                        <span className="font-mono text-sm text-cyan-400">
                          / {project.number}
                        </span>

                        <div className="h-px w-8 bg-white/20 sm:w-12" />

                        <span className="text-[10px] uppercase tracking-[0.16em] text-gray-500 sm:text-xs">
                          {project.category}
                        </span>
                      </div>

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
                          {project.responsibilities.slice(0, 5).map((item) => (
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

                      {/* Case Study Button */}
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/[0.06] px-5 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                      >
                        View Case Study
                        <ArrowUpRight size={17} />
                      </button>
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

                  <div className="pointer-events-none absolute right-5 top-5 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400 sm:right-7 sm:top-7">
                    <ArrowUpRight size={19} />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-black/50"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative border-b border-white/10 p-5 sm:p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 font-mono text-sm text-cyan-400">
                    PROJECT / {activeProject.number}
                  </p>

                  <h2
                    id="case-study-title"
                    className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
                  >
                    {activeProject.title}
                  </h2>

                  <p className="mt-3 text-sm text-cyan-400 sm:text-base">
                    {activeProject.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close case study"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-5 sm:p-8">

              {/* Overview */}
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-cyan-400">
                  <Layers3 size={18} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    Project Overview
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-400 sm:text-base">
                  {activeProject.overview}
                </p>
              </div>

              {/* Challenge and Solution */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="mb-3 flex items-center gap-2 text-cyan-400">
                    <Target size={18} />
                    <h3 className="text-sm font-semibold">The Challenge</h3>
                  </div>

                  <p className="text-sm leading-7 text-gray-400">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="mb-3 flex items-center gap-2 text-cyan-400">
                    <Lightbulb size={18} />
                    <h3 className="text-sm font-semibold">The Solution</h3>
                  </div>

                  <p className="text-sm leading-7 text-gray-400">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Workflow */}
              <div className="mb-8">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                  Workflow & Implementation
                </h3>

                <div className="space-y-4">
                  {activeProject.workflow.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs text-cyan-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <p className="pt-0.5 text-sm leading-7 text-gray-400">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  My Responsibilities
                </h3>

                <ul className="space-y-3">
                  {activeProject.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-gray-400"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-cyan-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  Key Modules & Capabilities
                </h3>

                <div className="flex flex-wrap gap-2">
                  {activeProject.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  Technology Stack
                </h3>

                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((technology) => (
                    <SkillTag key={technology} skill={technology} />
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 sm:px-8">
              <span className="text-xs text-gray-500">
                Professional Project Experience
              </span>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Close Case Study
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
