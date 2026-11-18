
import { useEffect, useState } from 'react'
import { ArrowUpRight, Eye, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

// const resumePath = '/Akshay_Muthyala_Senior_Java_Developer_Resume.pdf'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const closeMenu = () => setMenuOpen(false)

  // Close mobile menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])


// Highlight the section closest to the top navigation area
useEffect(() => {
  const updateActiveSection = () => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')

    const activationPoint = 140
    let currentSection = ''

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top

      if (sectionTop <= activationPoint) {
        currentSection = section.id
      }
    })

    // At the bottom of the page, always highlight Contact.
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5

    if (isAtBottom) {
      currentSection = 'contact'
    }

    if (currentSection) {
      setActiveSection(currentSection)
    }
  }

  updateActiveSection()

  window.addEventListener('scroll', updateActiveSection, {
    passive: true,
  })

  window.addEventListener('resize', updateActiveSection)

  return () => {
    window.removeEventListener('scroll', updateActiveSection)
    window.removeEventListener('resize', updateActiveSection)
  }
}, [])


  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#080808]/80 shadow-lg shadow-black/10 backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group text-lg font-bold tracking-tight text-white transition-colors hover:text-cyan-400 sm:text-xl"
        >
          Akshay Muthyala
          <span className="text-cyan-400 transition-colors group-hover:text-white">
            .
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((link) => {
            const section = link.href.replace('#', '')
            const isActive = activeSection === section

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(section)}
                className={`relative py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            )
          })}

          {/* Desktop Resume Download */}
          {/* Desktop Resume Link */}
            <a
            href="/resume"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
            Resume
            <Eye size={15} />
            </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black lg:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`grid overflow-hidden border-t border-white/[0.08] bg-[#080808]/95 transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] border-transparent opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5 sm:px-8">
            {navLinks.map((link, index) => {
              const section = link.href.replace('#', '')
              const isActive = activeSection === section

              return (
                <a
                  key={link.name}
                  href={link.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => {
                    setActiveSection(section)
                    closeMenu()
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-400/10 text-cyan-400'
                      : 'text-gray-300 hover:bg-white/[0.04] hover:text-cyan-400'
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 35}ms` : '0ms',
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </a>
              )
            })}

            {/* Mobile Resume Link */}
            <a
            href="/resume"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 px-4 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/10"
            >
            View Resume
            <Eye size={16} />
            </a>

            {/* Mobile CTA */}
            <a
              href="#contact"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300"
            >
              Let's Talk
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
