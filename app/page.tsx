import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/blog-data'

export const metadata = {
  title: 'Röplabda Magyarországon',
  description:
    'Fedezze fel a magyar röplabda világ gazdagságát, történetét, technikáját és szenvedélyét.',
}

const sections = [
  {
    number: '01',
    href: '/tortenet',
    title: 'Történet',
    description:
      'A röplabda útja Magyarországon a korai kezdetektől napjainkig. Fedezze fel a sport fejlődését és mérföldköveit.',
  },
  {
    number: '02',
    href: '/technika',
    title: 'Technika',
    description:
      'Alapvető mozdulatoktól a haladó fogásokig. Edzési tippek és technikai útmutatók minden szinten.',
  },
  {
    number: '03',
    href: '/szabalyok',
    title: 'Szabályok',
    description:
      'A versenyszerű röplabda szabályai és formátumai, részletesen és érthetően bemutatva.',
  },
]

export default function HomePage() {
  const latestArticles = articles.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.jpg"
            alt="Röplabda Magyarországon"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-background/70 mb-6">
              Röplabda Magyarországon
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-background leading-[1.05] text-balance mb-8">
              A röplabda szíve Magyarországon
            </h1>
            <p className="font-sans text-base leading-relaxed text-background/75 max-w-xl mb-12">
              Átfogó forrás mindazoknak, akiket érdekel a magyarországi röplabda kultúrája, technikája, szabályai és gazdag sporttörténelme.
            </p>
            <Link
              href="/tortenet"
              className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.15em] uppercase text-background hover:text-background/70 transition-colors duration-300"
            >
              <span>Felfedezés</span>
              <span className="block w-10 h-px bg-background/60" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 lg:right-10 z-10">
          <p className="font-sans text-xs tracking-[0.1em] uppercase text-background/40 writing-mode-vertical">
            hungaryvolleyball.com
          </p>
        </div>
      </section>

      {/* About volleyball in Hungary */}
      <section className="py-24 lg:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-5">
                A sportról
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light leading-[1.15] text-balance">
                Szenvedély, csapat és pálya
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-14">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="font-sans text-base">
                  A röplabda Magyarországon mélyen gyökerezik a sportéletben. A sport a huszadik század elején jelent meg az országban, és évtizedek alatt széles réteget hódított meg mind a versenyzők, mind a nézők körében.
                </p>
                <p className="font-sans text-base">
                  A hat fős csapatok hálóval elválasztott pályán mérik össze tudásukat, ahol az egyéni technika és a csapatmunka egymást erősíti. A fedett pályás változat mellett a strandröplabda is egyre szélesebb körben elterjedt, különösen a nyári hónapokban.
                </p>
                <p className="font-sans text-base">
                  Ez az oldal azoknak szól, akik szeretnének többet megtudni a sportról, legyen szó kezdőkről, tapasztalt játékosokról vagy a röplabda iránt érdeklődő szurkolókról.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-6">
                {[
                  { value: '6', label: 'Játékos csapatonként' },
                  { value: '3', label: 'Érintés labdamenetenként' },
                  { value: '25', label: 'Pont szettenkként' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl lg:text-4xl font-light text-primary">
                      {stat.value}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground mt-1 leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="py-24 lg:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-14 lg:mb-20">
            <h2 className="font-serif text-3xl lg:text-4xl font-light">Felfedezés</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-border">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group border-b lg:border-b-0 lg:border-r border-border last:border-0 px-0 lg:pr-10 lg:pl-0 py-10 lg:py-12 flex flex-col gap-5 hover:bg-muted/40 transition-colors duration-300 first:pl-0 [&:not(:first-child)]:lg:pl-10"
              >
                <span className="font-sans text-xs tracking-[0.15em] text-muted-foreground">
                  {section.number}
                </span>
                <span className="font-serif text-2xl lg:text-3xl font-light group-hover:text-primary transition-colors duration-300">
                  {section.title}
                </span>
                <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </span>
                <span className="mt-auto font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <span>Tovább</span>
                  <span className="block w-6 h-px bg-current" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-24 lg:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-14 lg:mb-20">
            <div>
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-3">
                Legújabb tartalmak
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-light">Blog</h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-3 font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span>Összes cikk</span>
              <span className="block w-8 h-px bg-current" aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-border">
            {latestArticles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col sm:flex-row items-start gap-6 lg:gap-12 py-10 hover:bg-muted/30 transition-colors duration-300 -mx-4 px-4"
              >
                <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-primary mb-3">
                    {article.category}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl font-light leading-snug group-hover:text-primary transition-colors duration-300 mb-3">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <div className="shrink-0 sm:pt-1 flex items-center gap-2 font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <span>Olvasás</span>
                  <span className="block w-6 h-px bg-current" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/blog"
              className="flex items-center gap-3 font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span>Összes cikk</span>
              <span className="block w-8 h-px bg-current" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment preview */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/equipment-main.jpg"
                alt="Röplabda felszerelés"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-5">
                Felszerelés
              </p>
              <h2 className="font-serif text-3xl lg:text-5xl font-light leading-[1.15] mb-6 text-balance">
                Minden, ami a pályán szükséges
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10">
                A megfelelő felszerelés meghatározza a játékélményt és a teljesítményt. Fedezze fel, milyen eszközök szükségesek a röplabdához, a labdától a cipőig.
              </p>
              <Link
                href="/felszereles"
                className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-300 border-b border-foreground hover:border-primary pb-1"
              >
                <span>Felszerelés megtekintése</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
