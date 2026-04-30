import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/felszereles', label: 'Felszerelés' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/rolunk', label: 'Rólunk' },
]

const legalLinks = [
  { href: '/cookie-iranyelvek', label: 'Cookie-irányelvek' },
  { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Large editorial brand block */}
        <div className="py-16 lg:py-24 border-b border-border">
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-foreground leading-none tracking-tight text-balance">
            Hungary<br />Volleyball
          </h2>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground max-w-sm">
            Átfogó forrás a magyarországi röplabdáról. Történet, technika, szabályok és aktuális tartalmak.
          </p>
          <a
            href="mailto:info@hungaryvolleyball.com"
            className="inline-block mt-5 font-sans text-xs tracking-[0.12em] text-primary hover:text-foreground transition-colors duration-300 border-b border-primary/40 hover:border-foreground pb-px"
          >
            info@hungaryvolleyball.com
          </a>
        </div>

        {/* Horizontal nav row */}
        <nav
          aria-label="Lábléc navigáció"
          className="py-10 border-b border-border"
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-xs tracking-[0.13em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground tracking-wide">
            &copy; {year} Hungary Volleyball. Minden jog fenntartva.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  )
}
