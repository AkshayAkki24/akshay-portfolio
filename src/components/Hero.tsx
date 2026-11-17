
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight, Mail, Eye } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import profileImage from '../assets/akshay-profile.webp'

function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = heroRef.current

    if (!section) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        },
      )

      gsap.fromTo(
        '.hero-scene',
        { opacity: 0, scale: 0.85, x: 35 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.3,
          delay: 0.3,
          ease: 'power3.out',
        },
      )
    }, section)

    return () => ctx.revert()
  }, [])

  const email = 'akshaymuthyala@gmail.com'
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.15]"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-5 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-12">
        {/* Left: Introduction */}
        <div className="hero-content relative z-10 mx-auto w-full max-w-2xl text-center md:mx-0 md:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-sm text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for opportunities
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-400 sm:text-base">
            Hello, I'm Akshay
          </p>

          <h1 className="text-[clamp(2.8rem,6.5vw,5.8rem)] font-bold leading-[1.08] tracking-tight text-white">
            Building Digital Experiences
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              That Matter.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-400 sm:text-lg md:mx-0">
            I'm Akshay, a Java Full Stack Developer with 5+ years of
            experience building enterprise healthcare applications
            and reliable digital solutions.
          </p>

          {/* Action buttons */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            {/* Projects */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              Explore My Work
              <ArrowUpRight size={19} />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              <Mail size={18} />
              Get In Touch
            </a>

            {/* View Resume */}
            <a
            href="/resume"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/[0.06] px-6 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
            View Resume
            <Eye size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-7 flex items-center justify-center gap-4 md:justify-start">
            <span className="mr-2 text-sm text-gray-500">
              Connect with me
            </span>

            <a
              href="https://github.com/AkshayAkki24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-gray-300 transition-all hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/akshay-kumar-muthyala-9271a2205"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-gray-300 transition-all hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email"
              className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-gray-300 transition-all hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        {/* Right: Profile photograph */}
        <div className="hero-scene relative flex w-full items-center justify-center pt-6 pb-12 md:py-0">
          <div
            aria-hidden="true"
            className="absolute h-[70%] w-[70%] rounded-full bg-cyan-400/10 blur-[100px]"
          />

          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[390px] xl:max-w-[410px]">
            {/* Decorative frame */}
            <div className="absolute -inset-2 rotate-3 rounded-[2rem] border border-cyan-400/20" />
            <div className="absolute -inset-2 -rotate-3 rounded-[2rem] border border-blue-400/20" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101827] shadow-2xl shadow-cyan-950/30">
              <img
                src={profileImage}
                alt="Akshay Muthyala - Java Full Stack Developer"
                width={576}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="block aspect-[9/16] w-full object-cover object-center"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl sm:-bottom-5 sm:-left-7 sm:px-5 sm:py-4">
              <p className="text-2xl font-bold text-cyan-300 sm:text-3xl">
                5+
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Years Experience
              </p>
            </div>

            {/* Technology badge */}
            <div className="absolute -right-3 top-8 rounded-xl border border-cyan-400/20 bg-[#111827]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:-right-8 sm:px-4">
              <p className="text-sm font-medium text-cyan-300 sm:text-base">
                Java · Spring Boot
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
