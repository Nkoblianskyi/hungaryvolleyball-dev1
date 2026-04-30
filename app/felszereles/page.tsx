import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Felszerelés és Felszerelések',
  description:
    'Röplabda felszerelések és eszközök részletes bemutatása. Mindent, amit a pályán és az edzésen használnak.',
}

const categories = [
  {
    number: '01',
    title: 'A labda',
    description:
      'A röplabda egyik legfontosabb eleme maga a labda. A fedett pályás változat és a strandröplabda labdája eltérő jellemzőkkel bír. A fedett pályás labda általában kisebb és keményebb, belső nyomása magasabb, felülete sima bőr vagy műbőr. A strandröplabda valamivel nagyobb, belső nyomása alacsonyabb, hogy a szélben is jól kontrollálható legyen. A labda tömege és kerülete szigorúan szabályozott, hogy minden mérkőzésen egységes körülmények legyenek.',
    details: [
      'Kerülete: 65–67 cm',
      'Tömege: 260–280 gramm',
      'Belső nyomás: 0,300–0,325 kg/cm²',
      'Felülete: természetes vagy szintetikus anyag',
    ],
  },
  {
    number: '02',
    title: 'Cipők',
    description:
      'A röplabdacipő az egyik legszemélyre szabottabb eszköz. A jó röplabdacipő alacsony profilú, erős oldaltámasztékkal rendelkezik, és a parkettán, valamint más beltéri padlókon kiváló tapadást nyújt. Az ütközési erők elnyelése szintén fontos tényező, különösen a sorozatos ugrások és leszállások után. Strandröplabdához általában mezítláb játszanak, de speciális homokos pályára tervezett cipők is léteznek.',
    details: [
      'Beltéri, nem jelölő talp stúdiópadlóhoz',
      'Erős sarok- és bokatámasztás',
      'Légáteresztő felsőrész az optimális hőszabályozáshoz',
      'Könnyű szerkezet a gyors irányváltásokhoz',
    ],
  },
  {
    number: '03',
    title: 'Térdvédő',
    description:
      'A térdvédő az egyik leggyakrabban használt védőfelszerelés röplabdában. A talajközelből való védekezés, a gurulások és a hirtelen térdeléssel végzett mentők egyaránt terhelik a térd területét. A jó térdvédő rugalmas, csúszásmentes belsőfelületű, és megfelelő csillapítást nyújt anélkül, hogy korlátozná a mozgást. Anyaga általában neoprén, gelérnyes vagy habszivacsból készül.',
    details: [
      'Ütéscsillapító középső rész',
      'Rugalmas szárnyak az ízületek szabad mozgásáért',
      'Légáteresztő anyag hosszabb viselési komforthoz',
      'Mosható és tartós kivitel',
    ],
  },
  {
    number: '04',
    title: 'Hálórendszer',
    description:
      'A röplabdaháló az egyik legfontosabb pályaelem. A háló magassága nemek és korosztályok szerint eltér: felnőtt férfi kategóriában 2,43 méter, felnőtt női kategóriában 2,24 méter a szabályos magasság. A háló anyaga erős, UV-álló fonalból készül, szélén fehér szegéllyel, amely vizuálisan jelzi a hálótér határát. Az antenák a háló két végén jelzik a pálya szélességét.',
    details: [
      'Felnőtt férfi magasság: 2,43 m',
      'Felnőtt női magasság: 2,24 m',
      'Szélesség: 9–10 méter',
      'Szegély: fehér, 5–8 cm széles',
    ],
  },
  {
    number: '05',
    title: 'Sportruházat',
    description:
      'A röplabdaöltözék általában könnyed, légáteresztő anyagból készül, amelynek célja a mozgásszabadság és a hőszabályozás biztosítása. A csapatok rendszerint egységes mezben játszanak, ahol a mezszám és a felirat kötelező elem. A libero játékos mindig eltérő színű mezt visel, hogy könnyen azonosítható legyen a pályán. Az edzési ruházat kevésbé kötött, de a funkcionalitás és a komfort ott is kiemelten fontos.',
    details: [
      'Könnyű, funkcionális anyag',
      'Szabad mozgást nem korlátozó fazon',
      'Libero eltérő színű meze szabályos',
      'Mezszám 1–20 kötelező versenyruházaton',
    ],
  },
  {
    number: '06',
    title: 'Egyéb kiegészítők',
    description:
      'A röplabdázóknak számos egyéb kiegészítő is rendelkezésre áll, amelyek az edzést és a versenyzést kényelmesebbé és hatékonyabbá teszik. A csuklóvédők és szorítók a nyirkos kézből való megcsúszást előzik meg. A bokarögzítők a bokasérülések kockázatát csökkentik. Az edzőhálók és edzőgépek az egyéni technikai edzést teszik lehetővé önállóan is.',
    details: [
      'Csuklórögzítő és szorítók fogáshoz',
      'Bokarögzítők sérülések megelőzéséhez',
      'Edzőháló egyéni gyakorláshoz',
      'Labdakosarak és -hálók edzési segédeszközök',
    ],
  },
]

export default function FelszerelesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-0 lg:pt-44 overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Felszerelés
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-balance">
              Röplabda Felszerelés
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed lg:pb-2">
              A megfelelő felszerelés a jó játékélmény és a teljesítmény alapja. Ez az oldal részletesen bemutatja a röplabdához szükséges eszközöket és azok legfontosabb jellemzőit.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[21/7] overflow-hidden">
          <Image
            src="/images/equipment-main.jpg"
            alt="Röplabda felszerelés"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Equipment list */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-0 divide-y divide-border">
            {categories.map((cat) => (
              <div
                key={cat.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground">
                      {cat.number}
                    </span>
                    <span className="block h-px w-6 bg-border" aria-hidden="true" />
                  </div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-light">{cat.title}</h2>
                </div>

                <div className="lg:col-span-8">
                  <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                    {cat.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 py-3 border-b border-border/50"
                      >
                        <span
                          className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                          aria-hidden="true"
                        />
                        <p className="font-sans text-sm text-foreground leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 lg:py-24 border-t border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-5">
              Megjegyzés
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-light leading-[1.2] mb-6">
              Felszerelés vásárlásáról
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Ez az oldal általános tájékoztató jellegű ismereteket tartalmaz a röplabda felszerelésekről. Az egyes termékek kiválasztásánál mindig vegye figyelembe játékszintjét, fizikai adottságait és személyes preferenciáit. Szaküzletekben dolgozó szakértők segíthetnek a megfelelő eszközök megtalálásában.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
