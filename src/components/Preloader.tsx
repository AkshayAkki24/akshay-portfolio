
import { useEffect, useState } from 'react'

function Preloader() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setVisible(false)
    }, 700)

    const removeTimer = window.setTimeout(() => {
      setMounted(false)
    }, 1400)

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      aria-label="Loading portfolio"
      role="status"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#080d18] transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.08] shadow-lg shadow-cyan-500/10">
          <span className="text-2xl font-bold tracking-tight text-cyan-300">
            AM
          </span>
        </div>

        <p className="text-sm font-medium tracking-[0.25em] text-gray-300">
          AKSHAY MUTHYALA
        </p>

        <div className="mt-6 h-1 w-36 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[loader-progress_700ms_ease-in-out_forwards] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        <span className="mt-3 text-xs tracking-wide text-gray-500">
          Preparing your experience...
        </span>
      </div>
    </div>
  )
}

export default Preloader
