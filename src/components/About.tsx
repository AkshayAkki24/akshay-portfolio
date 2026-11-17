
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  { value: '5+', label: 'Years Experience' },
  { value: 'Java', label: 'Backend Development' },
  { value: 'React', label: 'Frontend Development' },
  { value: 'Full Stack', label: 'End-to-End Solutions' },
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
                Engineering ideas
                <span className="text-gray-500">
                  {' '}into reality.
                </span>
              </h2>
            </div>

            {/* Right Content */}
            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                I'm Akshay, a Java Full Stack Developer with 5+ years
                of experience building enterprise healthcare and
                insurance applications.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                My experience includes Java, Spring Boot, Microservices,
                React and PostgreSQL. I work across backend services,
                responsive interfaces, data processing and API development.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                I'm passionate about clean code, solving complex
                engineering problems, continuous learning and turning
                business requirements into meaningful technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="reveal mt-14 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-6 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-6"
            >
              <span className="absolute right-4 top-4 text-xs text-gray-700 transition-colors group-hover:text-cyan-400/60">
                0{index + 1}
              </span>

              <h3 className="break-words text-2xl font-bold tracking-tight text-cyan-400 sm:text-3xl md:text-4xl">
                {item.value}
              </h3>

              <p className="mt-3 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
