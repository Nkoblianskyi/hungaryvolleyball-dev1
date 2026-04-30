import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Magyar Röplabda Története',
  description:
    'Fedezze fel a röplabda magyarországi históriáját a korai kezdetektől napjainkig. Mérföldkövek, fejlődési szakaszok és a sport társadalmi vetülete.',
}

const timeline = [
  {
    era: '1920-as évek',
    title: 'Az első lépések',
    content:
      'A röplabda az 1920-as évek elején érkezett Magyarországra, elsősorban a Közép-Európában terjedő tornasport mozgalmak és az iskolai testnevelés közvetítésével. Az új sportot kezdetben az iskolák és a munkáskörök tornaszakosztályai karolták fel, ahol a csapatszellem és a közösségi játék volt a fő vonzerő. Az első játszók rögtönzött, nem szabványosított pályákon játszottak, de az egyszerű szabályok és az elérhető felszerelés gyorsan terjedést tett lehetővé.',
  },
  {
    era: '1930-as évek',
    title: 'Szervezett keretek',
    content:
      'Az 1930-as évekre a röplabda szervezett formát öltött Magyarországon. Szabadidős egyesületek és sport szekciók alakultak, amelyek rendszeres összejöveteleket tartottak, és belső versenyeket szerveztek. A pályadimenziókat és az alapvető szabályokat egységesíteni kezdték, ami lehetővé tette az egyesületek közötti mérkőzések megrendezését. Az edzési módszerek még kezdetlegesek voltak, de a sport iránt való lelkesedés egyre szélesebb réteget mozgatott meg.',
  },
  {
    era: '1940-es évek',
    title: 'A háború árnyékában',
    content:
      'A második világháború nehézségei ellenére a röplabda nem tűnt el a magyar sportéletből. A sporttevékenység ugyan visszaesett, de a megszakítás csak részleges volt. A háború utáni újjáépítés időszakában a tömegsport különleges szerepet kapott: az újjáalakuló sport szervezetek a közösségi élet és az egészséges életmód előmozdítójának tekintették a röplabdát. A négyes évek végére az újrainduló bajnoki rendszer alapjait fektették le.',
  },
  {
    era: '1950-es évek',
    title: 'Versenyrendszer és növekedés',
    content:
      'Az 1950-es évek a magyar röplabda rendszeres versenyrendszerének kialakulását hozták el. Bajnokságokat szerveztek különböző szinteken, és a fedett pályás versenyrendszer stabilizálódott. A tömegsport és az élsport párhuzamosan fejlődött: miközben az iskolákban és munkahelyeken sokan kezdtek röplabdázni, a versenyzői elit egyre magasabb szintű képzésben részesült. A testnevelési főiskolákon edzőképzés is megindult.',
  },
  {
    era: '1960-as és 1970-es évek',
    title: 'Csúcsidőszak és technikai fejlődés',
    content:
      'Ezek az évtizedek hozták a magyar röplabda egyik legjelentősebb fejlődési korszakát. A játéktechnika és az edzési módszerek modernizálódtak, a versenyzők szaksajtóból és külföldi tapasztalatokból merítve fejlesztették tudásukat. Egységes edzési elvek terjedtek el, és a korosztályos versenyzés révén a fiatal tehetségek is korán szereztek versenyélményeket. Az ország több területén aktív röplabdaközpontok alakultak ki.',
  },
  {
    era: '1980-as évek',
    title: 'Professzionalizálódás',
    content:
      'Az 1980-as évekre a röplabda egyre professzionálisabb jelleget öltött. Az edzési infrastruktúra fejlődött, a szakemberképzés rendszeresebbé vált, és a versenyzői életpályák hosszabbá és tudatosabbá váltak. Az élsport finanszírozása is szervezett mederbe terelődött, ami stabilabb alapot adott a magas szintű versenyzésnek. Ebben az időszakban a módszertani irodalom is gazdagodott.',
  },
  {
    era: '1990-es évek',
    title: 'Strandröplabda és megújulás',
    content:
      'A kilencvenes évek két szempontból is fordulópontot jelentett. Egyrészt a strandröplabda gyors tempóban terjedt el, és nyári rendezvények keretében széles réteget vonzott a sporthoz. Másrészt a megváltozott gazdasági és társadalmi körülmények között a röplabda szervezeti kereteinek is alkalmazkodniuk kellett. A strandröplabda a kétfős játékformátumával friss energiát és fiatal rajongókat hozott a sportnak.',
  },
  {
    era: '2000-es évektől napjainkig',
    title: 'Jelenkori fejlődés',
    content:
      'A huszonegyedik század első évtizedei a röplabda megújulását hozták Magyarországon. Az utánpótlás-nevelés, a tömegsport és az élsport egymást kiegészítve fejlődnek. Az internet és a digitális tartalmak lehetővé tették a sport népszerűsítését és az edzési anyagok terjesztését. A strandröplabda és a fedett pályás változat egyaránt aktív résztvevőket és érdeklődőket vonz, a sport pedig továbbra is fontos szerepet tölt be a magyarországi sportéletben.',
  },
]

export default function TortenetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/history-main.jpg"
            alt="Magyar röplabda története"
            fill
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Történet
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-balance max-w-3xl">
            A Magyar Röplabda Története
          </h1>
          <div className="mt-10 max-w-2xl">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              A röplabda több mint száz éve van jelen Magyarország sportéletében. Ez az oldal végigvezeti Önt a sport fejlődésének legfontosabb állomásain, a korai kezdetektől napjainkig.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-0 divide-y divide-border">
            {timeline.map((item, i) => (
              <div
                key={item.era}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-14 lg:py-20"
              >
                <div className="lg:col-span-4 flex flex-row lg:flex-col items-start gap-4 lg:gap-3">
                  <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground w-6 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary mb-1">
                      {item.era}
                    </p>
                    <h2 className="font-serif text-2xl lg:text-3xl font-light">{item.title}</h2>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="py-20 lg:py-28 border-t border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-5">
              Összefoglalás
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light leading-[1.2] text-balance mb-8">
              Egy évszázados út
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              A röplabda magyarországi history a kitartás, a fejlődés és a közösség históriája. A sport évtizedeken át alkalmazkodott a változó körülményekhez, miközben megőrizte alapvető értékeit: a csapatmunkát, a technikai tudást és a sportszerűséget.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
