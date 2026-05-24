'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react'

// Custom lag-delayed pointer cursor
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Add custom cursor class to body for hide default cursor
    document.body.classList.add('custom-cursor-active')

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  // Trail lag logic
  useEffect(() => {
    let animFrame: number
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        // Lag constant (0.15 for smooth drag)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        }
      })
      animFrame = requestAnimationFrame(updateTrail)
    }
    animFrame = requestAnimationFrame(updateTrail)
    return () => cancelAnimationFrame(animFrame)
  }, [position])

  if (!visible) return null

  return (
    <>
      {/* Outer glowing lag ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[99999] mix-blend-screen hidden md:block"
        animate={{
          x: trail.x - 16,
          y: trail.y - 16,
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          backgroundColor: hovered ? 'rgba(0, 212, 255, 0.15)' : 'rgba(0, 0, 0, 0)',
          borderColor: hovered ? '#7c3aed' : '#00d4ff',
          boxShadow: hovered 
            ? '0 0 20px rgba(124, 58, 237, 0.6)' 
            : '0 0 10px rgba(0, 212, 255, 0.3)'
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-md shadow-cyan-400/50"
        style={{ left: position.x, top: position.y }}
      />
    </>
  )
}

// Full screen initials vector drawing preloader
export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-[999999] flex flex-col items-center justify-center"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* SVG Logo Initials Vector Draw */}
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 text-cyan-400 fill-none stroke-current stroke-[2]"
            >
              <motion.path
                d="M 25 15 L 25 85 M 25 15 L 50 15 C 65 15, 65 45, 50 45 L 25 45 M 40 45 L 60 85"
                className="draw-path"
                stroke="#00d4ff"
              />
              <motion.path
                d="M 75 15 L 75 85 M 75 45 L 90 15 M 75 45 L 90 85"
                className="draw-path"
                stroke="#7c3aed"
                style={{ animationDelay: '0.4s' }}
              />
            </svg>

            {/* Glowing background halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-center"
          >
            <h2 className="text-xl font-bold font-syne tracking-[0.2em] text-white">
              ROHAN KIRDAK
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-2 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Floating Capsule Navbar with Glassmorphism
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999] px-4 md:px-8 py-4 transition-all duration-300">
        <div
          className={`max-w-6xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? 'glass-card border-white/10 shadow-lg shadow-black/40 backdrop-blur-md bg-slate-950/60 py-2'
              : 'border border-transparent bg-transparent'
          }`}
        >
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <span className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all font-syne">
              R
            </span>
            <span className="font-syne font-bold text-lg tracking-wider text-white relative">
              KIRDAK
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 cursor-pointer group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA/Social Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-semibold text-white bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-inner"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-slate-950/80 z-[1000] flex md:hidden items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-sm glass-card border-white/10 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Blur accent */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-white/5 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center gap-6 mt-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-bold font-syne text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full border-t border-white/10 pt-6 mt-4 flex justify-center gap-4"
                >
                  <a
                    href="https://github.com/hustlerss"
                    target="_blank"
                    className="p-3 bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 rounded-full transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohan-kirdak-240810254"
                    target="_blank"
                    className="p-3 bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 rounded-full transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Obsidian/Glass Footer Redesign
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-[#030014] py-12 px-6 md:px-12 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -bottom-24 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold font-syne tracking-wider text-white mb-3">
              ROHAN KIRDAK
            </h3>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6 font-light">
              Crafting premium high-end full-stack applications with beautiful designs, flawless performance, and modern technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rohankirdak"
                target="_blank"
                className="p-2.5 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-400 rounded-xl transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-kirdak-240810254"
                target="_blank"
                className="p-2.5 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-400 rounded-xl transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rohankirdak8756@gmail.com"
                className="p-2.5 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-400 rounded-xl transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase mb-4 font-syne">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white hover:underline decoration-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline decoration-cyan-400 transition-colors">
                  About Journey
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white hover:underline decoration-cyan-400 transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase mb-4 font-syne">
              Focus
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="font-light">Full-Stack MERN</li>
              <li className="font-light">Next.js Development</li>
              <li className="font-light">Modern UX Animation</li>
              <li className="font-light">Prisma Database Design</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Rohan Kirdak. Made with passion & precision. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 text-slate-400 hover:text-white rounded-full transition-all flex items-center gap-1 cursor-pointer"
          >
            Back to Top
            <span className="text-xs">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

// Glowing Scroll Progress Bar
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-[9999] shadow-[0_0_10px_rgba(0,212,255,0.7)]"
      style={{ width: `${progress}%` }}
    />
  )
}

export default Navbar
