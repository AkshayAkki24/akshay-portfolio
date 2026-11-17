
import { ExternalLink } from 'lucide-react'

const skillLinks: Record<string, string> = {
  // Java and backend
  'Java 25': 'https://docs.oracle.com/en/java/',
  'Java 21': 'https://docs.oracle.com/en/java/',
  Java: 'https://docs.oracle.com/en/java/',
  Spring: 'https://docs.spring.io/spring-framework/reference/',
  'Spring Boot': 'https://docs.spring.io/spring-boot/index.html',
  'Spring MVC': 'https://docs.spring.io/spring-framework/reference/web/webmvc.html',
  'Spring Security': 'https://docs.spring.io/spring-security/reference/',
  Microservices: 'https://spring.io/microservices',
  Hibernate: 'https://hibernate.org/orm/documentation/',
  JPA: 'https://jakarta.ee/specifications/persistence/',
  'REST APIs': 'https://developer.mozilla.org/en-US/docs/Web/HTTP',

  // Frontend
  'React.js': 'https://react.dev/learn',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  Redux: 'https://redux.js.org/tutorials/overview',
  HTML5: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  CSS3: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  Bootstrap: 'https://getbootstrap.com/docs/',

  // Databases
  PostgreSQL: 'https://www.postgresql.org/docs/',
  MySQL: 'https://dev.mysql.com/doc/',

  // Automation and processing
  Playwright: 'https://playwright.dev/docs/intro',
  'Excel Processing':
    'https://poi.apache.org/components/spreadsheet/quick-guide.html',

  // Enterprise integration
  SharePoint: 'https://learn.microsoft.com/en-us/sharepoint/',

  // Tools
  Git: 'https://git-scm.com/doc',
  SonarQube: 'https://docs.sonarsource.com/sonarqube-server/',
  Azure: 'https://learn.microsoft.com/en-us/azure/',
  'IntelliJ IDEA': 'https://www.jetbrains.com/help/idea/getting-started.html',
  'VS Code': 'https://code.visualstudio.com/docs',
  Eclipse: 'https://help.eclipse.org/latest/index.jsp',
  SSO: 'https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on',
  OCR: 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read?view=doc-intel-4.0.0&tabs=sample-code',
  SFTP: 'https://www.geeksforgeeks.org/computer-networks/sftp-file-transfer-protocol/',
  'CI/CD': 'https://www.geeksforgeeks.org/devops/what-is-ci-cd/',
}

type SkillTagProps = {
  skill: string
  className?: string
}

function SkillTag({ skill, className = '' }: SkillTagProps) {
  const url = skillLinks[skill]

  const baseClassName =
    'inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px] text-gray-300 transition-colors duration-200 sm:text-xs'

  if (!url) {
    return (
      <span className={`${baseClassName} ${className}`}>
        {skill}
      </span>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Explore ${skill} documentation`}
      aria-label={`Open ${skill} documentation in a new tab`}
      className={`${baseClassName} cursor-pointer hover:border-cyan-400/40 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${className}`}
    >
      {skill}
      <ExternalLink
        size={11}
        aria-hidden="true"
        className="opacity-50 transition-opacity group-hover:opacity-100"
      />
    </a>
  )
}

export default SkillTag
