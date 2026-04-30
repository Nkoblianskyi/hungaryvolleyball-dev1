import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie-irányelvek',
  description: 'A hungaryvolleyball.com cookie-kezelési irányelvei.',
}

const lastUpdated = new Date().toLocaleDateString('hu-HU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export default function CookieIranyelvekPage() {
  return (
    <>
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Jogi dokumentum
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-light leading-[1.1] mb-6">
            Cookie-irányelvek
          </h1>
          <p className="font-sans text-xs text-muted-foreground tracking-wide">
            Utolsó frissítés: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 lg:col-start-3 space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Mi az a cookie?</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  A cookie (süti) egy kis szöveges fájl, amelyet a weboldal az Ön böngészőjében helyez el, amikor meglátogatja az oldalt. A cookie-k segítségével a weboldal megjegyzi az Ön beállításait és preferenciáit, javítva ezzel a felhasználói élményt.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Milyen cookie-kat használunk?</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-5">
                    <h3 className="font-serif text-lg font-light mb-2">Szükséges cookie-k</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Ezek a cookie-k az oldal alapvető működéséhez elengedhetetlenek. Ide tartoznak például a cookie-hozzájárulás tárolásához szükséges cookie-k. Ezek nélkül az oldal nem tud megfelelően működni, és nem tilthatók le.
                    </p>
                  </div>
                  <div className="border-l-2 border-border pl-5">
                    <h3 className="font-serif text-lg font-light mb-2">Analitikai cookie-k</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Ezek a cookie-k segítenek megérteni, hogyan használják a látogatók az oldalt. Az összegyűjtött adatok névtelenek és nem személyazonosíthatók. Kizárólag az oldal teljesítményének javítása a céljuk.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Cookie-k kezelése</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Az oldalra érkezéskor megjelenő sávon elfogadhatja vagy elutasíthatja a nem szükséges cookie-kat. A böngészőjében is beállíthatja a cookie-kezelési preferenciáit. Fontos tudni, hogy a cookie-k teljes letiltása esetén az oldal egyes funkciói nem fognak megfelelően működni.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Cookie-k tárolási ideje</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  A cookie-hozzájárulásra vonatkozó cookie 12 hónapig van érvényes. Ezt követően a hozzájárulást újra be kell gyűjteni. Egyéb cookie-k tárolási ideje változó, a munkamenet végéig érvényes vagy hosszabb távú lehet, az adott cookie típusától függően.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Kapcsolat</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Ha kérdése van a cookie-irányelvekkel kapcsolatban, kérjük, vegye fel velünk a kapcsolatot a{' '}
                  <a
                    href="mailto:info@hungaryvolleyball.com"
                    className="text-foreground underline underline-offset-2 hover:text-primary transition-colors duration-300"
                  >
                    info@hungaryvolleyball.com
                  </a>{' '}
                  e-mail-címen, vagy a{' '}
                  <a
                    href="/rolunk"
                    className="text-foreground underline underline-offset-2 hover:text-primary transition-colors duration-300"
                  >
                    kapcsolatfelvételi oldalon
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
