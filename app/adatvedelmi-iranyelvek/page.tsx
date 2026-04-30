import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek',
  description: 'A hungaryvolleyball.com adatvédelmi irányelvei és tájékoztatója.',
}

const lastUpdated = new Date().toLocaleDateString('hu-HU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export default function AdatvedelmiIranyelvekPage() {
  return (
    <>
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Jogi dokumentum
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-light leading-[1.1] mb-6">
            Adatvédelmi irányelvek
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
                <h2 className="font-serif text-2xl font-light mb-4">Bevezetés</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  A hungaryvolleyball.com elkötelezett az Ön személyes adatainak védelme mellett. Ez az adatvédelmi tájékoztató ismerteti, hogy milyen adatokat gyűjtünk, hogyan használjuk fel azokat, és milyen jogai vannak Önnek az adatai kapcsán. A tájékoztató összhangban van az Európai Unió általános adatvédelmi rendeletével (GDPR).
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Adatkezelő</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Az adatkezelő a hungaryvolleyball.com weboldal üzemeltetője. Elérhetőség: info@hungaryvolleyball.com. A weboldal a hungaryvolleyball.com domain alatt érhető el.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Gyűjtött adatok köre</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-5">
                    <h3 className="font-serif text-lg font-light mb-2">Kapcsolatfelvételi adatok</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Amennyiben a kapcsolatfelvételi formot kitölti, az alábbi adatokat kezeljük: teljes neve, e-mail-címe, és az Ön által megadott üzenet tartalma. Ezeket kizárólag a megkeresés megválaszolása céljából dolgozzuk fel.
                    </p>
                  </div>
                  <div className="border-l-2 border-border pl-5">
                    <h3 className="font-serif text-lg font-light mb-2">Technikai adatok</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Az oldal látogatásakor automatikusan rögzíthetünk bizonyos technikai adatokat, mint például az IP-cím, a böngésző típusa, a látogatás időpontja és az Ön által megtekintett oldalak. Ezek az adatok kizárólag statisztikai és biztonsági célokat szolgálnak.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Adatkezelés célja és jogalapja</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  A kapcsolatfelvételi adatok kezelésének jogalapja az Ön hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont). Hozzájárulását bármikor visszavonhatja, ez azonban nem érinti a visszavonás előtt végzett adatkezelés jogszerűségét. A technikai adatok kezelésének jogalapja a jogos érdek (GDPR 6. cikk (1) bekezdés f) pont).
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Adattárolás és adatbiztonság</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  A kapcsolatfelvételi adatokat a megkeresés megválaszolásához szükséges ideig, de legfeljebb 1 évig tároljuk. Megfelelő technikai és szervezési intézkedésekkel gondoskodunk az adatok biztonságáról, az illetéktelen hozzáférés, módosítás, közlés, törlés vagy megsemmisítés ellen.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Az Ön jogai</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Hozzáférés joga', desc: 'Tájékoztatást kérhet arról, hogy milyen személyes adatait kezeljük.' },
                    { title: 'Helyesbítés joga', desc: 'Kérheti a pontatlan vagy hiányos adatok kijavítását.' },
                    { title: 'Törlés joga', desc: 'Kérheti adatai törlését, ha azok kezelésére már nincs szükség.' },
                    { title: 'Adathordozhatóság joga', desc: 'Kérheti adatai géppel olvasható formátumban való kiadását.' },
                    { title: 'Tiltakozás joga', desc: 'Tiltakozhat adatai kezelése ellen, ha azt jogos érdek alapján végezzük.' },
                  ].map((right) => (
                    <div key={right.title} className="flex items-start gap-4 py-3 border-b border-border/50">
                      <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-sans text-sm font-medium text-foreground mb-1">{right.title}</p>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Panasz benyújtása</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Ha úgy véli, hogy az adatkezelés nem felel meg a hatályos jogszabályoknak, panaszt nyújthat be a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH), amelynek elérhetőségei a naih.hu oldalon találhatók.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Kapcsolat</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Adatvédelmi kérdéseivel forduljon hozzánk az{' '}
                  <a
                    href="mailto:info@hungaryvolleyball.com"
                    className="text-foreground underline underline-offset-2 hover:text-primary transition-colors duration-300"
                  >
                    info@hungaryvolleyball.com
                  </a>{' '}
                  e-mail-címen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
