
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Heart,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-white/10 bg-[#080808] px-5 pb-8 pt-14 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer Content */}
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight text-white transition-colors hover:text-cyan-400"
            >
              Akshay Muthyala
              <span className="text-cyan-400">.</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              Senior Java Full Stack Developer building reliable,
              scalable and meaningful software solutions.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/AkshayAkki24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/akshay-kumar-muthyala-9271a2205"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="mailto:akshaymuthyala@gmail.com"
                aria-label="Send email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.name}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Let's Connect
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Have an opportunity, a project idea or just want to connect?
              I'd be happy to hear from you.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 sm:flex-row">

          <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-gray-500 sm:justify-start">
            © {currentYear} Akshay Muthyala.
            All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Crafted with
            <Heart
              size={13}
              className="fill-cyan-400 text-cyan-400"
            />
            and React
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            Back to top
            <ArrowUp
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
