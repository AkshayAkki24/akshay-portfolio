
import {
  Mail,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const email = 'akshaymuthyala@gmail.com'

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
          Get In Touch
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Main Message */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs text-cyan-400">
              <Sparkles size={14} />
              Open to meaningful opportunities
            </div>

            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.1] tracking-tight">
              Have a project
              <span className="text-gray-500"> in mind?</span>
              <br />
              Let's talk.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8">
              I'm interested in discussing software engineering,
              Java backend development, full-stack opportunities,
              and meaningful technology projects.
            </p>

            {/* Email Button */}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)] sm:mt-10 sm:w-auto"
            >
              <Mail size={18} />
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>

            <p className="mt-4 text-xs text-gray-500">
              Let's connect and build something meaningful.
            </p>
          </div>

          {/* Contact Information Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/20 sm:p-8 lg:p-10">

            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <MessageCircle size={21} />
              </div>

              <h3 className="text-lg font-semibold sm:text-xl">
                Contact Information
              </h3>
            </div>

            <div className="space-y-7">

              {/* Email */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                  Email Address
                </p>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full items-center gap-2 break-all text-sm text-white transition-colors hover:text-cyan-400 sm:text-base"
                >
                  {email}
                  <ArrowUpRight size={16} className="shrink-0" />
                </a>
              </div>

              {/* Social Profiles */}
              <div className="border-t border-white/10 pt-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                  Social Profiles
                </p>

                <div className="flex flex-wrap gap-3">

                  <a
                    href="https://github.com/AkshayAkki24"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit GitHub profile"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/akshay-kumar-muthyala-9271a2205"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="border-t border-white/10 pt-6">
                <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                  Location
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-300 sm:text-base">
                  <MapPin size={17} className="shrink-0 text-cyan-400" />
                  Hyderabad, India
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
