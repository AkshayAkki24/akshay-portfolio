
import {
  Code2,
  Database,
  Monitor,
  Workflow,
  Wrench,
  ShieldCheck,
} from 'lucide-react'

import {
  SiSpring,
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiIntellijidea,
  SiEclipseide,
} from 'react-icons/si'

import {
  FaJava,
  FaPlay,
  FaSearch,
  FaCloud,
  FaCode,
} from 'react-icons/fa'

import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'

import { useScrollReveal } from '../hooks/useScrollReveal'
import SkillTag from './SkillTag'

type Skill = {
  name: string
  icon?: IconType
  color?: string
  href?: string
}

type SkillGroup = {
  title: string
  description: string
  icon: LucideIcon
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Development',
    description: 'Building scalable backend applications and APIs',
    icon: Code2,
    skills: [
      {
        name: 'Java 25 / 21',
        icon: FaJava,
        color: '#ED8B00',
        href: 'https://docs.oracle.com/en/java/',
      },
      {
        name: 'Spring',
        icon: SiSpring,
        color: '#6DB33F',
        href: 'https://spring.io/projects/spring-framework',
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        color: '#6DB33F',
        href: 'https://docs.spring.io/spring-boot/reference/',
      },
      {
        name: 'Spring MVC',
        icon: SiSpring,
        color: '#6DB33F',
        href: 'https://docs.spring.io/spring-framework/reference/web/webmvc.html',
      },
      {
        name: 'Spring Security',
        icon: SiSpring,
        color: '#6DB33F',
        href: 'https://docs.spring.io/spring-security/reference/',
      },
      {
        name: 'Microservices',
        href: 'https://microservices.io/',
      },
      {
        name: 'Hibernate',
        href: 'https://hibernate.org/orm/documentation/',
      },
      {
        name: 'JPA',
        href: 'https://jakarta.ee/specifications/persistence/',
      },
      {
        name: 'REST APIs',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
      },
      {
        name: 'Collections & Stream API',
        href: 'https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/stream/package-summary.html',
      },
      { name: 'Object-Oriented Programming' },
    ],
  },

  {
    title: 'Frontend Development',
    description: 'Creating responsive and user-friendly interfaces',
    icon: Monitor,
    skills: [
      {
        name: 'React.js',
        icon: SiReact,
        color: '#61DAFB',
        href: 'https://react.dev/',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Redux',
        icon: SiRedux,
        color: '#764ABC',
        href: 'https://redux.js.org/',
      },
      {
        name: 'HTML5',
        icon: SiHtml5,
        color: '#E34F26',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'CSS3',
        icon: SiCss,
        color: '#1572B6',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        name: 'Bootstrap',
        icon: SiBootstrap,
        color: '#7952B3',
        href: 'https://getbootstrap.com/',
      },
      {
        name: 'Responsive UI',
        href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design',
      },
    ],
  },

  {
    title: 'Database & SQL',
    description: 'Working with relational databases and complex queries',
    icon: Database,
    skills: [
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#4169E1',
        href: 'https://www.postgresql.org/docs/',
      },
      {
        name: 'MySQL',
        icon: SiMysql,
        color: '#4479A1',
        href: 'https://dev.mysql.com/doc/',
      },
      {
        name: 'SQL',
        href: 'https://www.postgresql.org/docs/current/sql.html',
      },
      { name: 'Complex SQL Queries' },
      { name: 'Data Validation' },
      { name: 'Database Integration' },
    ],
  },

  {
    title: 'Security & Integration',
    description: 'Implementing secure access and system integrations',
    icon: ShieldCheck,
    skills: [
      {
        name: 'Spring Security',
        icon: SiSpring,
        color: '#6DB33F',
        href: 'https://docs.spring.io/spring-security/reference/',
      },
      {
        name: 'Single Sign-On (SSO)',
        href: 'https://openid.net/developers/how-connect-works/',
      },
      {
        name: 'SFTP',
        href: 'https://www.ssh.com/academy/ssh/sftp',
      },
      {
        name: 'SharePoint',
        href: 'https://learn.microsoft.com/en-us/sharepoint/',
      },
      { name: 'File Storage' },
      { name: 'Notification Workflows' },
    ],
  },

  {
    title: 'Automation & Data Processing',
    description: 'Automating workflows and processing healthcare data',
    icon: Workflow,
    skills: [
      {
        name: 'Playwright',
        icon: FaPlay,
        color: '#2EAD33',
        href: 'https://playwright.dev/docs/intro',
      },
      {
        name: 'OCR Integration',
        href: 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview',
      },
      { name: 'Java DTO Mapping' },
      { name: 'Web Crawlers' },
      {
        name: 'CSV Processing',
        href: 'https://commons.apache.org/proper/commons-csv/',
      },
      {
        name: 'Excel Processing',
        href: 'https://poi.apache.org/',
      },
      { name: 'Data Pipelines' },
    ],
  },

  {
    title: 'Tools & Engineering Practices',
    description: 'Development tools, quality practices and collaboration',
    icon: Wrench,
    skills: [
      {
        name: 'Git',
        icon: SiGit,
        color: '#F05032',
        href: 'https://git-scm.com/doc',
      },
      {
        name: 'CI/CD',
        href: 'https://docs.github.com/en/actions',
      },
      {
        name: 'SonarQube',
        icon: FaSearch,
        color: '#4E9BCD',
        href: 'https://docs.sonarsource.com/sonarqube/',
      },
      {
        name: 'Microsoft Azure',
        icon: FaCloud,
        color: '#0078D4',
        href: 'https://learn.microsoft.com/en-us/azure/',
      },
      {
        name: 'IntelliJ IDEA',
        icon: SiIntellijidea,
        color: '#FE315D',
        href: 'https://www.jetbrains.com/idea/',
      },
      {
        name: 'Visual Studio Code',
        icon: FaCode,
        color: '#007ACC',
        href: 'https://code.visualstudio.com/docs',
      },
      {
        name: 'Eclipse IDE',
        icon: SiEclipseide,
        color: '#2C2255',
        href: 'https://help.eclipse.org/',
      },
      { name: 'Agile / Scrum' },
      { name: 'Clean Code' },
      { name: 'Refactoring' },
      { name: 'Debugging' },
    ],
  },
]

function Skills() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            What I Work With
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and engineering practices I use to build reliable,
            scalable and maintainable full-stack applications.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Core Expertise
          </span>

          {[
            'Java',
            'Spring Boot',
            'Microservices',
            'React.js',
            'PostgreSQL',
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-xs font-medium text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon

            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045]"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <GroupIcon size={21} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const TechnologyIcon = skill.icon

                    const content = (
                      <>
                        {TechnologyIcon && (
                          <TechnologyIcon
                            size={17}
                            color={skill.color}
                            aria-hidden="true"
                          />
                        )}

                        <span>{skill.name}</span>
                      </>
                    )

                    if (skill.href) {
                      return (
                        <a
                          key={skill.name}
                          href={skill.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Learn more about ${skill.name}`}
                          aria-label={`Learn more about ${skill.name} (opens in a new tab)`}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:text-white cursor-pointer"
                        >
                          {content}
                        </a>
                      )
                    }

                    return (
                      <SkillTag
                        key={skill.name}
                        skill={skill.name}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
