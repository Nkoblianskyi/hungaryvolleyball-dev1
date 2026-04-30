'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Kérjük, adja meg nevét.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Kérjük, adjon meg érvényes e-mail-címet.'
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Az üzenet legalább 10 karakterből kell álljon.'
    if (!agreed) e.agreed = 'Az adatvédelmi tájékoztató elfogadása szükséges.'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground mb-2"
          >
            Teljes név
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-border focus:border-primary outline-none font-sans text-sm text-foreground py-3 transition-colors duration-300 placeholder:text-muted-foreground/50"
            placeholder="Az Ön neve"
          />
          {errors.name && (
            <p className="mt-2 font-sans text-xs text-primary">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground mb-2"
          >
            E-mail-cím
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-border focus:border-primary outline-none font-sans text-sm text-foreground py-3 transition-colors duration-300 placeholder:text-muted-foreground/50"
            placeholder="pelda@email.com"
          />
          {errors.email && (
            <p className="mt-2 font-sans text-xs text-primary">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground mb-2"
          >
            Üzenet
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-b border-border focus:border-primary outline-none font-sans text-sm text-foreground py-3 transition-colors duration-300 placeholder:text-muted-foreground/50 resize-none"
            placeholder="Írja ide üzenetét..."
          />
          {errors.message && (
            <p className="mt-2 font-sans text-xs text-primary">{errors.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <span
              onClick={() => setAgreed(!agreed)}
              role="checkbox"
              aria-checked={agreed}
              tabIndex={0}
              onKeyDown={(e) => e.key === ' ' && setAgreed(!agreed)}
              className={`mt-0.5 w-4 h-4 shrink-0 border transition-colors duration-300 cursor-pointer flex items-center justify-center ${
                agreed
                  ? 'border-primary bg-primary'
                  : 'border-border group-hover:border-foreground'
              }`}
            >
              {agreed && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span className="font-sans text-sm text-muted-foreground leading-relaxed">
              Elolvastam és elfogadom az{' '}
              <a
                href="/adatvedelmi-iranyelvek"
                className="text-foreground underline underline-offset-2 hover:text-primary transition-colors duration-300"
              >
                adatvédelmi irányelveket
              </a>
              , és hozzájárulok adataim kezeléséhez a megkeresés céljából.
            </span>
          </label>
          {errors.agreed && (
            <p className="mt-2 font-sans text-xs text-primary">{errors.agreed}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="font-sans text-xs tracking-[0.15em] uppercase bg-foreground text-background hover:bg-primary transition-colors duration-300 py-4 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Küldés...' : 'Üzenet küldése'}
          </button>
        </div>
      </form>

      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Üzenet elküldve"
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-background border border-border max-w-md w-full p-10 lg:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-8 h-px bg-primary mb-6" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-light mb-4">Köszönjük üzenetét</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
              Üzenetét sikeresen megkaptuk. Hamarosan felvesszük Önnel a kapcsolatot a megadott e-mail-címen.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-3"
            >
              <span>Bezárás</span>
              <span className="block w-6 h-px bg-current" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
