import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Szabályok és Versenyformátumok',
  description:
    'A röplabda játékszabályai és versenyformátumai részletesen bemutatva. Fedett pályás és strandröplabda szabályok, pontozás, szettrend.',
}

const basicRules = [
  {
    title: 'A csapat és a pálya',
    content:
      'A röplabda két, egyenként hat főből álló csapat között zajlik. A pálya 18×9 méteres, amelyet a háló két egyenlő, 9×9 méteres félre oszt. A háló magassága felnőtt férfi kategóriában 2,43 méter, felnőtt nőknél 2,24 méter. A pályát az alapvonal és az oldalsó vonalak határolják, amelyek a pálya részét képezik, tehát a vonalon landoló labda beesőnek számít.',
  },
  {
    title: 'A labdamenet és érintések',
    content:
      'Minden labdamenet szervával kezdődik, amelyet a csapat kijelölt játékosa hajt végre az alap vonalak mögül. Minden csapatnak legfeljebb háromszor szabad érintenie a labdát, mielőtt átjátszaná a hálón. Egy játékos egymás után nem érintheti kétszer a labdát, kivéve a blokkolást, amelyet ezt követő érintésnek nem számítanak. A kézzel és csuklóig terjedő testtájékig kell a labdát érte elütni.',
  },
  {
    title: 'Pontozás és szettrendszer',
    content:
      'A modern röplabda Rally Point rendszerben zajlik, ami azt jelenti, hogy minden labdamenet után pontot kap valamelyik csapat, függetlenül attól, melyik szervált. Egy szett nyeréséhez 25 pont szükséges, legalább 2 pont különbséggel. Az ötödik döntő szett esetén a győzelemhez elegendő 15 pont is, szintén 2 pont különbséggel. A mérkőzést az nyeri, aki először szerez meg három szettet.',
  },
  {
    title: 'Hibák és büntetőpontok',
    content:
      'Hibát követ el a csapat, ha a labda a pályán kívülre esik, a hálón átér, négyszeri érintés történik, vagy az érintés szabálytalan. Szervahiba esetén az ellenfél kap pontot és szervál. Pályán belüli kézzel való érintés szabálytalan, ha az ujjak és tenyér helyett a csuklón belüli testrész érintkezik a labdával, kivéve a véletlen libero fogadásait. A füttyök és bírói döntések megszakíthatatlanok.',
  },
  {
    title: 'Pozíciók és rotáció',
    content:
      'A hat játékos körkörösen váltja pozícióját az óramutató járásával megegyező irányban minden alkalommal, amikor saját szervájuk után nyernek pontot. A játékosoknak szerváskor a saját pozíciójukban kell lenniük, a szervát követően szabadon mozoghatnak a pályán. Az első sorban három, a hátsó sorban három játékos tartózkodik, akik különböző feladatokat látnak el.',
  },
  {
    title: 'A libero szabályai',
    content:
      'A libero egy speciális védekező játékos, aki korlátlan számban cserélhető bármely hátsó soros játékossal. A libero eltérő színű mezt visel, és nem szerválhat, nem blokkolhat és nem üthet a hálóvonalról vagy fölé. Az emelés libero részéről csak akkor jogszerű, ha a feladó és az ezután következő csatározás megfelelnek a szabályoknak. A libero szerepe elsősorban a fogadás és a védekezés erősítése.',
  },
]

const formats = [
  {
    number: '01',
    title: 'Fedett pályás röplabda',
    subtitle: '6 vs 6',
    description:
      'A klasszikus, legismertebb forma. Hat játékos áll szemben egymással beltéri pályán, szintetikus vagy parkettaburkolatú talajon. A mérkőzések szettrendszerben zajlanak, általában legjobb háromból ötből formátumban. Ez a forma olimpiai sportág és a legtöbb versenyen ez a szabályrendszer érvényes.',
  },
  {
    number: '02',
    title: 'Strandröplabda',
    subtitle: '2 vs 2',
    description:
      'Homokos pályán, a szabadban két-két játékos méri össze tudását. A pálya kisebb, mint a fedett pályás változatnál, és a szabályok is némileg eltérnek. Az öltözet kötetlen, a hangulat barátságos, de a versenyformátumban ez is olimpiai sportág. A homokos talaj sokkal nagyobb fizikai terhelést jelent, mint a kemény padló.',
  },
  {
    number: '03',
    title: 'Négyesfogós röplabda',
    subtitle: '4 vs 4',
    description:
      'Kisebb csapatokkal, szabadban vagy tornateremben játszható, kisebb pályán. Főleg rekreációs és szabadidős eseményeken fordul elő, ahol a résztvevők száma korlátozott. Ideális gyors bevezetésre és olyan helyzetekre, ahol a teljes csapatlétszám nem áll rendelkezésre.',
  },
  {
    number: '04',
    title: 'Tornák és ligák',
    subtitle: 'Versenyformátumok',
    description:
      'A versenyek különböző formátumokban zajlanak. A ligákon belül a csapatok egymás ellen körmérkőzésen játszanak, majd a final four vagy kieséses rendszerben dől el a végső sorrend. A tornákon általában csoportkör és kieséses szakasz váltja egymást. A pontrendszer általában három pontot ad a győzelemért.',
  },
]

export default function SzabalyokPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Szabályok
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-balance">
              Szabályok és Versenyformátumok
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed lg:pb-2">
              A röplabda szabályrendszere logikus és jól felépített. Az alábbiakban részletesen bemutatjuk az alapvető játékszabályokat és a különböző versenyformátumokat.
            </p>
          </div>
        </div>
      </section>

      {/* Basic rules */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-14 lg:mb-20">
            Alapszabályok
          </p>
          <div className="space-y-0 divide-y divide-border">
            {basicRules.map((rule, i) => (
              <div
                key={rule.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-14"
              >
                <div className="lg:col-span-4 flex flex-row lg:flex-col items-start gap-4 lg:gap-3">
                  <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground w-6 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-light">{rule.title}</h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {rule.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 lg:py-32 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 lg:mb-20">
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-5">
              Játékformák
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-light max-w-2xl leading-[1.15]">
              Versenyformátumok és játékformák
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border divide-y lg:divide-y-0 divide-border">
            {formats.map((format, i) => (
              <div
                key={format.number}
                className={`p-8 lg:p-10 ${
                  i % 2 === 0 ? 'lg:border-r border-border' : ''
                } ${i < 2 ? 'lg:border-b border-border' : ''}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground">
                    {format.number}
                  </span>
                  <span className="font-sans text-xs tracking-[0.12em] uppercase text-primary">
                    {format.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-light mb-4">{format.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick reference */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-10">
            Gyors összefoglaló
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-border divide-x divide-y lg:divide-y-0 divide-border">
            {[
              { value: '6', label: 'Játékos csapatonként' },
              { value: '3', label: 'Max. érintés labdamenetenként' },
              { value: '25', label: 'Pont egy szetthez' },
              { value: '15', label: 'Pont az 5. szetthez' },
              { value: '5', label: 'Max. szett egy mérkőzésen' },
              { value: '1', label: 'Libero csapatonként' },
            ].map((item) => (
              <div key={item.label} className="p-6 lg:p-8 text-center">
                <p className="font-serif text-3xl lg:text-4xl font-light text-primary mb-2">
                  {item.value}
                </p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
