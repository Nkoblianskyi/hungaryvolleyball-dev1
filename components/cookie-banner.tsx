'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('hv_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('hv_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('hv_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Ez a weboldal cookie-kat használ a felhasználói élmény javítása érdekében.{' '}
          <Link
            href="/cookie-iranyelvek"
            className="text-foreground underline underline-offset-2 hover:text-primary transition-colors duration-300"
          >
            Cookie-irányelvek
          </Link>{' '}
          és{' '}
          <Link
            href="/adatvedelmi-iranyelvek"
            className="text-foreground underline underline-offset-2 hover:text-primary transition-colors duration-300"
          >
            Adatvédelmi irányelvek
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 px-4 border border-border hover:border-foreground"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs tracking-[0.12em] uppercase bg-foreground text-background hover:bg-primary transition-colors duration-300 py-2 px-5"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
