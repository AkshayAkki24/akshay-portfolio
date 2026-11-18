
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import NotFound from './components/NotFound'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

    if (pathname === '/resume') {
    return <Resume />
  }

  if (pathname !== '/') {
    return <NotFound />
  }

  // Main portfolio
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />

      {/* <footer className="flex flex-col justify-between gap-4 border-t border-white/10 px-6 py-8 text-sm text-gray-500 md:px-16 sm:flex-row">
        <p>© 2026 Akshay Muthyala. All rights reserved.</p>
        <p>Designed & Built with React, Tailwind CSS and GSAP.</p>
      </footer> */}
    </main>
  )
}

export default App
