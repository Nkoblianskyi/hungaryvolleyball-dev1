import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technika és Edzési Tippek',
  description:
    'Röplabda technikák és edzési tippek részletesen bemutatva. Fogadástól az ütésig, az alapoktól a haladó szintig.',
}

const techniques = [
  {
    number: '01',
    title: 'Fogadás',
    subtitle: 'Alap védekezési technika',
    description:
      'A fogadás az alulütéses érintés, amellyel az ellenfél szervájára vagy csatározására reagálunk. A kéz pozíciója: az alkarok párhuzamosan, összefont kezekkel, enyhén csúcsban tartva. A test a labda irányába fordul, a térdek hajlítottak, a súly az első lábfejre helyezve. A mozgás a lábakból indul, és a karok csupán irányítják a labdát.',
    tips: [
      'Mindig a labda alá kell mozogni, ne a kezekkel elnyúlni',
      'A térd hajlítása elengedhetetlen a rugalmas reakcióhoz',
      'Az előre dőlő testtartás segít a labda kontrollált felfelé küldésében',
    ],
  },
  {
    number: '02',
    title: 'Emelés',
    subtitle: 'A feladó alapmozgása',
    description:
      'Az emelés a felső kéziérintés, amellyel a feladó vagy bármely játékos a labdát precízen irányítja. A kezek fej fölé emelkednek, az ujjak nyitottak és ellazultak. A labda a kézujjak begyével kerül érintésbe, nem a tenyérrel. A csukló rugalmas mozgása adja az emelés puhaságát és pontosságát.',
    tips: [
      'Az ujjak egyforma feszességgel érintsék a labdát',
      'A testsúly a kezek mögül előre haladva segít az emelés irányának meghatározásában',
      'A kezek ne legyenek merevek, a csuklónak rugalmasan kell engedni',
    ],
  },
  {
    number: '03',
    title: 'Csatározás',
    subtitle: 'Erőteljes támadó érintés',
    description:
      'A csatározás (smash vagy spike) az egyik leghatásosabb pontszerzési lehetőség. A játékos nekifutásból ugrik, és a kitárt karjával a legmagasabb ponton üti meg a labdát erőteljesen lefelé. A csukló aktív legyintő mozdulata adja az ütés erejét és irányát, miközben a kéz lehúz a labda mögül.',
    tips: [
      'A nekifutás lendülete az ugrás erejét növeli',
      'A labdát mindig a domináns kézzel kell a legmagasabb ponton elütni',
      'A leszállás két lábon, hajlított térddel csökkenti a sérülésveszélyt',
    ],
  },
  {
    number: '04',
    title: 'Szerválás',
    subtitle: 'A labdamenet kezdete',
    description:
      'A szervával indul minden labdamenet. Az alapvető alulütéses szervától a haladó lebegő szervának és az ugrószervának számos formája létezik. Mindegyik közös eleme a stabil testtartás, a labdadobás pontossága és a karérintés ereje, iránya és időzítése.',
    tips: [
      'Alulütéses szervánál a labdát a domináns kéz ütőirányába tartani, nem ejteni',
      'A lebegő szervánál minimális forgást adjon a labdának az ütés',
      'Szervahiba esetén mindig értékelni kell: biztonságos vagy pontos lett volna szükséges',
    ],
  },
  {
    number: '05',
    title: 'Blokkolás',
    subtitle: 'Védekezés a hálónál',
    description:
      'A blokkolás a háló melletti érintés, amellyel az ellenfél csatározását akadályozzuk meg. A játékos a hálóhoz közel áll, majd időzítve ugrik, és a karjait a háló fölé nyújtja. A kezek az ellenfél felé fordulnak, a csukló megfeszített, a labdát lefelé irányítják vissza az ellenfél pályájára.',
    tips: [
      'Az ugrás időzítése legyen egy félütemnyi késéssel az ellenfélen',
      'A kezek a lehető legmagasabb pozícióba kerüljenek a hálótér fölé',
      'Kettős blokknál a két játékos kezei között ne legyen rés',
    ],
  },
  {
    number: '06',
    title: 'Védekezés',
    subtitle: 'Talajközelből és terülve',
    description:
      'A védekezés a labda megmentését jelenti, amikor az már közel a talajhoz jár. A tipikus védekezési mozdulatokat talajközelből, guggolásból, gurulásból vagy terülve végzik. A cél mindig az, hogy a labda ne érjen talajt, és a csapat legyen képes folytatni a labdamenetet.',
    tips: [
      'A talajközelből való védekezéskor az alkarokkal, nem a csukló belső oldalával érintse a labdát',
      'A gurulás megtanulása megvédi az ízületeket és természetesebb mozgást tesz lehetővé',
      'A védekezési pozíciót folyamatosan tartani kell, nem csak akkor, ha a labda "felé jön"',
    ],
  },
]

const trainingTips = [
  {
    title: 'Felmelegítés és nyújtás',
    content:
      'Minden edzés és mérkőzés előtt elengedhetetlen az alapos felmelegítés. Legalább 10-15 percen át emeljük meg a pulzusszámot könnyű futással vagy ugrókötéllel, majd végezzük el az ízületek mozgatását. Az edzés utáni nyújtás csökkenti az izomláz mértékét és fejleszti a rugalmasságot.',
  },
  {
    title: 'Egyéni technikai edzés',
    content:
      'Az egyéni technikai elem fejlesztése falhoz, edzőpartnerrel vagy edzőgéppel lehetséges. Napi rendszeres, de rövid idejű fókuszált ismétlés sokkal hatásosabb a ritkán végzett hosszú gyakorlatoknál. Érdemes minden edzésen egy-egy technikai elemet kiemelt figyelemmel gyakorolni.',
  },
  {
    title: 'Ugróerő és robbanékonyság',
    content:
      'A röplabdában az ugróerő alapvető fontosságú a csatározásnál és a blokkolásnál. Guggoló ugrások, mélybeugrások és egyoldalú ugrások rendszeres végzése fokozza a robbanékonyságot. A lábizomerő fejlesztése hosszú távon javítja mind a csatározás magasságát, mind a talajfogást és az irányváltásokat.',
  },
  {
    title: 'Kondicionális edzés',
    content:
      'A röplabda mérkőzések akár egy-két óráig is tarthatnak, ezért az állóképesség fejlesztése nem elhanyagolható. Az intervall futás, a köredzés és az uszoda-edzések mind hozzájárulnak az általános kondicionális szint emeléséhez, ami a mérkőzések döntő pillanataiban a különbséget jelenti.',
  },
]

export default function TechnikaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/techniques-main.jpg"
            alt="Röplabda technika"
            fill
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Technika
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-balance max-w-3xl">
            Technika és Edzési Tippek
          </h1>
          <div className="mt-10 max-w-2xl">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              A röplabda technikai elemei az egyszerűtől a bonyolultig terjednek. Az alábbiakban bemutatjuk az alapvető mozdulatokat, tippekkel kiegészítve, hogy bárki fejleszthesse játékát.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-16">
            Alapvető technikai elemek
          </p>
          <div className="space-y-0 divide-y divide-border">
            {techniques.map((tech) => (
              <div
                key={tech.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground">
                      {tech.number}
                    </span>
                    <span className="block h-px w-6 bg-border" aria-hidden="true" />
                  </div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-light mb-1">{tech.title}</h2>
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-primary">
                    {tech.subtitle}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                    {tech.description}
                  </p>
                  <div className="border-l-2 border-primary pl-5 space-y-3">
                    {tech.tips.map((tip, i) => (
                      <p key={i} className="font-sans text-sm text-foreground leading-relaxed">
                        {tip}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training tips */}
      <section className="py-20 lg:py-32 border-t border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 lg:mb-20">
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-5">
              Felkészülés
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-light max-w-2xl leading-[1.15]">
              Edzési tippek és módszerek
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border border border-border">
            {trainingTips.map((tip) => (
              <div key={tip.title} className="p-8 lg:p-10">
                <h3 className="font-serif text-xl lg:text-2xl font-light mb-5">{tip.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
