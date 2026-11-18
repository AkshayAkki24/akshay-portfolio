
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  MapPin,
  Trophy,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Education() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="education"
      className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="reveal mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-400 sm:mb-5 sm:text-sm">
            My Journey
          </p>

          <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-bold leading-tight tracking-tight">
            Education &
            <span className="text-gray-500"> Recognition.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            My academic foundation, professional achievements and
            commitment to continuous technical learning.
          </p>
        </div>

        {/* Education & Recognition */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">

          {/* Education Card */}
          <article className="reveal group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-7 lg:p-8">

            <div className="mb-8 flex items-start justify-between sm:mb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                <GraduationCap size={27} strokeWidth={1.7} />
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-gray-500 sm:text-xs">
                Education
              </span>
            </div>

            <p className="mb-3 text-xs uppercase tracking-wider text-cyan-400">
              Postgraduate Degree
            </p>

            <h3 className="mb-3 text-xl font-semibold leading-snug transition-colors group-hover:text-cyan-400 sm:text-2xl">
              Master of Computer Applications
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-400 sm:text-base">
              University College of Science, Saifabad
            </p>

            <div className="mb-5 flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
              <MapPin size={16} className="text-cyan-400" />
              Hyderabad, India
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <span className="text-xs text-gray-500 sm:text-sm">
                Academic Performance
              </span>

              <span className="text-lg font-bold text-cyan-400">
                7.8 CGPA
              </span>
            </div>
          </article>

          {/* Recognition Card */}
          <article className="reveal group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-7 lg:p-8">

            <div className="mb-8 flex items-start justify-between sm:mb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                <Award size={27} strokeWidth={1.7} />
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-gray-500 sm:text-xs">
                Achievement
              </span>
            </div>

            <p className="mb-3 text-xs uppercase tracking-wider text-cyan-400">
              Professional Recognition
            </p>

            <h3 className="mb-3 text-xl font-semibold leading-snug transition-colors group-hover:text-cyan-400 sm:text-2xl">
              Employee of the Month
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-400 sm:text-base">
              Recognized for timely delivery of sprint commitments
              and contributions toward project goals.
            </p>

            <div className="mb-5 flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
              <Trophy size={16} className="text-cyan-400" />
              AMPS Healthcare
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <span className="text-xs text-gray-500 sm:text-sm">
                Recognition Date
              </span>

              <span className="font-semibold text-cyan-400">
                November 2022
              </span>
            </div>
          </article>
        </div>

        {/* Professional Learning */}
        <article className="reveal group mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:mt-6 sm:p-7 lg:p-8">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <div className="flex min-w-0 items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                <BookOpen size={27} strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <p className="mb-3 text-[10px] uppercase tracking-widest text-cyan-400 sm:text-xs">
                  Professional Learning
                </p>

                <h3 className="mb-3 text-lg font-semibold leading-snug transition-colors group-hover:text-cyan-400 sm:text-xl md:text-2xl">
                  Master Spring Boot 3 and Spring Framework 6 with Java
                </h3>

                <p className="text-sm leading-7 text-gray-400">
                  Completed a professional development course through Udemy,
                  strengthening knowledge of Spring Boot and the Spring ecosystem.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['Spring Boot 3', 'Spring Framework 6', 'Java'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400 sm:self-center">
              <Sparkles size={15} className="text-cyan-400" />
              Continuous Learning
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Education
