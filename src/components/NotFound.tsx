
import { ArrowLeft, Home } from 'lucide-react'

function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080d18] px-5 text-center">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[120px]"
      />

      <div className="relative z-10 max-w-xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Page not found
        </p>

        <h1 className="text-8xl font-bold tracking-tighter text-white sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
          Looks like you're lost.
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-7 text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to the portfolio.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
        >
          <Home size={18} />
          Back to Home
          <ArrowLeft size={18} className="rotate-180" />
        </a>

        <p className="mt-12 text-sm text-gray-600">
          Akshay Muthyala · Senior Java Full Stack Developer
        </p>
      </div>
    </main>
  )
}

export default NotFound
