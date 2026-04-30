import type { Metadata } from 'next'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Rólunk',
  description:
    'Ismerje meg a Hungary Volleyball projektet és lépjen kapcsolatba velünk.',
}

export default function RolunkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Rólunk
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-balance max-w-3xl">
            Kik vagyunk mi
          </h1>
        </div>
      </section>

      {/* About content + contact */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* About text */}
            <div className="lg:col-span-5">
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-6">
                A projektről
              </p>
              <div className="space-y-5 text-muted-foreground">
                <p className="font-sans text-base leading-relaxed">
                  A Hungary Volleyball egy átfogó, magyar nyelvű tájékoztató oldal, amely a magyarországi röplabdakultúrát mutatja be minden érdeklődőnek.
                </p>
                <p className="font-sans text-base leading-relaxed">
                  Célunk, hogy megbízható és könnyen hozzáférhető forrást biztosítsunk a sport történetéről, technikai elemeiről, szabályairól, felszereléseiről és aktualitásairól.
                </p>
                <p className="font-sans text-base leading-relaxed">
                  Az oldalon található tartalmak általános tájékoztató jellegűek, és nem kötődnek egyetlen szervezethez, klubhoz vagy vállalathoz sem. Független forrásként kizárólag a sport bemutatása és népszerűsítése a célunk.
                </p>
                <p className="font-sans text-base leading-relaxed">
                  Ha kérdése, észrevétele vagy javaslata van, szívesen fogadjuk üzenetét az alábbi kapcsolatfelvételi form segítségével.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground mb-3">
                  E-mail
                </p>
                <a
                  href="mailto:info@hungaryvolleyball.com"
                  className="font-sans text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  info@hungaryvolleyball.com
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7">
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-8">
                Kapcsolatfelvétel
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
