
import { useEffect, useState, type FormEvent, type MouseEvent } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Sparkles,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
  X,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const email = 'akshaymuthyala@gmail.com'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

type ContactFormData = {
  from_name: string
  from_email: string
  subject: string
  message: string
  company: string
}

const initialFormData: ContactFormData = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
  company: '',
}

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [isSending, setIsSending] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Close modal using Escape and prevent background scrolling.
  useEffect(() => {
    if (!isModalOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSending) {
        setIsModalOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen, isSending])

  const openModal = () => {
    setSuccessMessage('')
    setErrorMessage('')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    if (isSending) return
    setIsModalOpen(false)
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSuccessMessage('')
    setErrorMessage('')

    // Basic honeypot spam check.
    if (formData.company.trim()) {
      setErrorMessage('Unable to submit this message.')
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        'Email service is not configured. Please try again later.',
      )
      return
    }

    setIsSending(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name.trim(),
          from_email: formData.from_email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        {
          publicKey,
        },
      )

      setSuccessMessage(
        'Your message has been sent successfully! Thank you for reaching out.',
      )

      setFormData(initialFormData)
    } catch (error) {
      console.error('EmailJS error:', error)

      setErrorMessage(
        'Something went wrong while sending your message. Please try again or email me directly.',
      )
    } finally {
      setIsSending(false)
    }
  }

  const inputClassName =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-white/[0.05]'

  return (
    <>
      <section
        id="contact"
        className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
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
                Let's build
                <span className="text-gray-500"> something</span>
                <br />
                meaningful.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8">
                I'm always interested in connecting with engineering
                professionals, discussing Java full-stack opportunities
                and exploring challenging software projects.
                If you have an opportunity or an idea, let's connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)]"
                >
                  <MessageCircle size={18} />
                  Let's Talk
                  <ArrowUpRight size={18} />
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  <Mail size={17} />
                  Email Me
                </a>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/20 sm:p-8 lg:p-10">

              {/* Card Heading */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">
                    Let's Connect
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Find me through these channels
                  </p>
                </div>
              </div>

              <div className="space-y-7">

                {/* Professional Profiles */}
                <div>
                  <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                    Professional Profiles
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href="https://github.com/AkshayAkki24"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit GitHub profile"
                      className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-cyan-400"
                    >
                      <FaGithub size={21} />
                      <span className="text-sm font-medium">GitHub</span>
                      <ArrowUpRight size={15} className="ml-auto" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/akshay-kumar-muthyala-9271a2205"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit LinkedIn profile"
                      className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-cyan-400"
                    >
                      <FaLinkedinIn size={21} />
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ArrowUpRight size={15} className="ml-auto" />
                    </a>
                  </div>
                </div>

                {/* Message Me Card */}
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                    Have Something to Say?
                  </p>

                  <button
                    type="button"
                    onClick={openModal}
                    className="group w-full rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-black">
                          <Mail size={21} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            Message Me
                          </p>

                          <p className="mt-1 text-xs text-gray-500 transition-all duration-300 group-hover:text-cyan-400">
                            <span className="group-hover:hidden">
                              Click to send me a message
                            </span>
                            <span className="hidden break-all group-hover:inline group-focus-visible:inline">
                              {email}
                            </span>
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={19}
                        className="shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                      />
                    </div>
                  </button>
                </div>

                {/* Location */}
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                    Location
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-300 sm:text-base">
                    <MapPin size={18} className="shrink-0 text-cyan-400" />
                    Hyderabad, India
                  </div>
                </div>

                {/* Availability */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    </span>

                    <span className="text-xs text-gray-400">
                      Open to professional conversations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          onClick={handleBackdropClick}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative my-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-[0_25px_100px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-200"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 p-5 sm:p-7">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-400">
                  <Sparkles size={13} />
                  Let's Connect
                </div>

                <h3
                  id="contact-modal-title"
                  className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  Send Me a Message
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
                  Fill in the details below. I'll get back to you as soon as possible.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={isSending}
                aria-label="Close contact form"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 disabled:opacity-50"
              >
                <X size={19} />
              </button>
            </div>

            {/* Modal Form */}
            <form
              onSubmit={handleSubmit}
              className="max-h-[calc(100dvh-180px)] space-y-5 overflow-y-auto p-5 sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="from_name"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Your Name
                  </label>

                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={formData.from_name}
                    onChange={handleChange}
                    maxLength={100}
                    required
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={formData.from_email}
                    onChange={handleChange}
                    maxLength={254}
                    required
                    className={inputClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-gray-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Job Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={150}
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-400"
                  >
                    Message
                  </label>

                  <span className="text-xs text-gray-600">
                    {formData.message.length}/3000
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={3000}
                  required
                  className={`${inputClassName} resize-y`}
                />
              </div>

              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSending ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                    <ArrowUpRight size={18} />
                  </>
                )}
              </button>

              {successMessage && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-400/[0.06] p-4 text-sm text-green-400"
                >
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  <p>{successMessage}</p>
                </div>
              )}

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/[0.06] p-4 text-sm text-red-400"
                >
                  <AlertCircle size={19} className="mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <p className="text-center text-xs leading-6 text-gray-500">
                Your message will be delivered directly to my email.
                <br />
                <a
                  href={`mailto:${email}`}
                  className="text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {email}
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact
