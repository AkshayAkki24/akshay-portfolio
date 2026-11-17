
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement>() {
  const sectionRef = useRef<T>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    // Respect the user's reduced-motion preference.
    const mediaQuery = gsap.matchMedia()

    mediaQuery.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        const ctx = gsap.context(() => {
          const elements =
            gsap.utils.toArray<HTMLElement>('.reveal', section)

          if (!elements.length) return

          // Initial state
          gsap.set(elements, {
            autoAlpha: 0,
            y: 30,
          })

          // Animate elements as they enter the viewport.
          ScrollTrigger.batch(elements, {
            start: 'top 88%',
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                overwrite: true,
              })
            },
          })
        }, section)

        return () => ctx.revert()
      },
    )

    return () => mediaQuery.revert()
  }, [])

  return sectionRef
}
