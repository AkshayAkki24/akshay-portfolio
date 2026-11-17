
import { ArrowLeft, Download, ExternalLink, Eye } from 'lucide-react'

const resumePath = '/Akshay_Muthyala_Senior_Java_Developer_Resume.pdf'

function Resume() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 pb-10 pt-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Top navigation */}
        <div className="mb-10 flex items-center justify-between">
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Portfolio
          </a>

          <span className="text-sm font-semibold tracking-wide text-white">
            Akshay Muthyala <span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* Resume heading */}
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-300">
              <Eye size={14} />
              Resume Preview
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My <span className="text-cyan-400">Resume</span>
            </h1>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Senior Java Full Stack Developer · 5+ Years Experience
            </p>
          </div>

          {/* Resume actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all hover:border-cyan-400 hover:text-cyan-400"
            >
              Open PDF
              <ExternalLink size={16} />
            </a>

            <a
              href={resumePath}
              download="Akshay_Muthyala_Senior_Java_Developer_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* PDF preview */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30">
          <iframe
            src={`${resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Akshay Muthyala - Senior Java Full Stack Developer Resume"
            className="h-[75vh] min-h-[600px] w-full"
          />
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-gray-500">
          Prefer a copy? Use the Download Resume button above.
          If the preview does not load, open the PDF in a new tab.
        </p>

      </div>
    </main>
  )
}

export default Resume
