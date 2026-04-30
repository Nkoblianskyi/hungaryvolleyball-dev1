'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/felszereles', label: 'Felszerelés' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/rolunk', label: 'Rólunk' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isHome = pathname === '/'
  const isTransparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-background/98 backdrop-blur-md border-b border-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className={`font-serif flex items-center gap-2 text-sm tracking-[0.22em] uppercase transition-colors duration-300 ${
              isTransparent
                ? 'text-background hover:text-background/70'
                : 'text-foreground hover:text-primary'
            }`}
            aria-label="Hungary Volleyball – Főoldal"
          >
            <Image src="/favicon.ico" alt="Hungary Volleyball" width={32} height={32} />
            <p className="sr-only">Hungary Volleyball</p>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Fő navigáció">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs tracking-[0.13em] uppercase transition-colors duration-300 pb-0.5 ${
                  isTransparent
                    ? pathname === link.href
                      ? 'text-background border-b border-background/70'
                      : 'text-background/70 hover:text-background'
                    : pathname === link.href
                    ? 'text-primary border-b border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-px transition-all duration-300 ${
                isTransparent ? 'bg-background' : 'bg-foreground'
              } ${mobileOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}
            />
            <span
              className={`block h-px transition-all duration-300 ${
                isTransparent ? 'bg-background' : 'bg-foreground'
              } ${mobileOpen ? 'w-0 opacity-0' : 'w-4'}`}
            />
            <span
              className={`block h-px transition-all duration-300 ${
                isTransparent ? 'bg-background' : 'bg-foreground'
              } ${mobileOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}
            />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background flex flex-col pt-20"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil navigáció"
        >
          <nav className="flex flex-col px-6 pt-8 gap-0">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-4xl py-4 border-b border-border transition-colors duration-200 ${
                  pathname === link.href ? 'text-primary' : 'text-foreground'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-10">
            <p className="font-sans text-xs tracking-[0.13em] uppercase text-muted-foreground">
              info@hungaryvolleyball.com
            </p>
          </div>
        </div>
      )}
    </>
  )
}
