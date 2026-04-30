import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getRelatedArticles, articles } from '@/lib/blog-data'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: encodeURIComponent(a.slug) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(decodeURIComponent(slug))
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(decodeURIComponent(slug))
  if (!article) notFound()

  const related = getRelatedArticles(decodeURIComponent(slug), 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span className="block w-6 h-px bg-current" aria-hidden="true" />
              <span>Vissza a bloghoz</span>
            </Link>
          </div>
          <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary mb-5">
            {article.category}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-balance max-w-4xl mb-8">
            {article.title}
          </h1>
          <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
            {article.excerpt}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="space-y-6">
                {article.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-sans text-base lg:text-[17px] text-foreground leading-[1.85]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Kapcsolódó tartalmak
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light mb-12 lg:mb-16">
              További cikkek
            </h2>
            <div className="divide-y divide-border">
              {related.map((rel, i) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col sm:flex-row items-start gap-6 lg:gap-10 py-8 hover:bg-muted/40 transition-colors duration-300 -mx-4 px-4"
                >
                  <span className="font-sans text-xs tracking-[0.12em] text-muted-foreground w-8 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs tracking-[0.12em] uppercase text-primary mb-2">
                      {rel.category}
                    </p>
                    <h3 className="font-serif text-xl lg:text-2xl font-light leading-snug group-hover:text-primary transition-colors duration-300">
                      {rel.title}
                    </h3>
                  </div>
                  <span className="flex items-center gap-2 font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0">
                    <span>Olvasás</span>
                    <span className="block w-6 h-px bg-current" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
