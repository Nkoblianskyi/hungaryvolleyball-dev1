import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/blog-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog és Cikkek',
  description:
    'Röplabdával kapcsolatos cikkek, elemzések és útmutatók. Böngésszen témák szerint és olvasson részletes tartalmakat.',
}

const categories = ['Összes', ...Array.from(new Set(articles.map((a) => a.category)))]

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-14 lg:pt-48 lg:pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Tartalmak
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-balance">
              Blog és Cikkek
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-sm">
              Röplabda technikáról, stratégiáról, egészségről és a sport kultúrájáról szóló cikkek.
            </p>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="divide-y divide-border">
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 hover:bg-muted/30 transition-colors duration-300 -mx-4 px-4"
              >
                <div className="lg:col-span-1 pt-1">
                  <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="lg:col-span-5 order-3 lg:order-2">
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-primary mb-4">
                    {article.category}
                  </p>
                  <h2 className="font-serif text-2xl lg:text-3xl font-light leading-snug group-hover:text-primary transition-colors duration-300 mb-4">
                    {article.title}
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-3 font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <span>Elolvasás</span>
                    <span className="block w-8 h-px bg-current" aria-hidden="true" />
                  </div>
                </div>

                <div className="lg:col-span-6 order-2 lg:order-3 relative aspect-[16/9] lg:aspect-auto lg:h-52 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
