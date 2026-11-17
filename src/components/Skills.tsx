
import {
  Code2,
  Database,
  Layers,
  Monitor,
  Workflow,
  Wrench,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SkillTag from './SkillTag'

const skillGroups = [
  {
    title: 'Backend Development',
    description: 'Developing enterprise backend services and REST APIs.',
    icon: Code2,
    skills: [
      'Java 25',
      'Java 21',
      'Spring',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Microservices',
      'Hibernate',
      'JPA',
      'REST APIs',
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive and reusable user interfaces.',
    icon: Monitor,
    skills: [
      'React.js',
      'JavaScript',
      'Redux',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Responsive UI',
    ],
  },
  {
    title: 'Database & SQL',
    description: 'Working with relational databases and complex queries.',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQL',
      'Complex SQL Queries',
      'Data Validation',
    ],
  },
  {
    title: 'Automation & Processing',
    description: 'Automating document processing and browser workflows.',
    icon: Workflow,
    skills: [
      'Playwright',
      'OCR',
      'Java DTO Mapping',
      'Web Crawlers',
      'CSV Processing',
      'Excel Processing',
    ],
  },
  {
    title: 'Enterprise Integration',
    description: 'Connecting enterprise systems and processing workflows.',
    icon: Layers,
    skills: [
      'SFTP',
      'SharePoint',
      'SSO',
      'File Storage',
      'Notification Workflows',
      'Data Pipelines',
    ],
  },
  {
    title: 'Tools & Engineering Practices',
    description: 'Maintaining code quality and reliable delivery workflows.',
    icon: Wrench,
    skills: [
      'Git',
      'CI/CD',
      'SonarQube',
      'Azure',
      'Agile / Scrum',
      'Clean Code',
      'Refactoring',
      'Debugging',
      'IntelliJ IDEA',
      'VS Code',
      'Eclipse',
    ],
  },
]

function Skills() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="reveal mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-400 sm:mb-5 sm:text-sm">
            My Expertise
          </p>

          <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-bold leading-tight tracking-tight">
            Skills & <span className="text-gray-500">Technologies.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Technologies and engineering practices I use to build,
            maintain and deliver reliable full-stack applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <article
                key={group.title}
                className="reveal group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.04] sm:p-6 lg:p-7"
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/15 sm:mb-6 sm:h-12 sm:w-12">
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="text-cyan-400"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-6 text-gray-500 sm:mb-6">
                  {group.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                    ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
