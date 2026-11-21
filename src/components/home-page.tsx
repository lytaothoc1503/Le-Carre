import { Link } from "@tanstack/react-router";
import { ExelySearch } from "@/components/exely-search";
import { RoomCard } from "@/components/room-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { t } from "@/lib/copy";
import { roomLayouts } from "@/lib/rooms";
import { faqItems, pageSchema } from "@/lib/schema";
import { localize, type Lang } from "@/lib/site";

export function HomePage({ lang }: { lang: Lang }) {
  const c = t(lang);
  return (
    <>
      <JsonLd data={pageSchema(lang, "/")} />
      <SiteHeader lang={lang} path="/" />
      <main id="content">
        <section className="relative min-h-screen bg-ivory">
          <picture>
            <source
              type="image/avif"
              srcSet="/media/hero-pool-800.avif 800w, /media/hero-pool-1280.avif 1280w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/media/hero-pool-800.webp 800w, /media/hero-pool-1280.webp 1280w"
              sizes="100vw"
            />
            <img
              src="/media/hero-pool-800.webp"
              alt={c.heroNote}
              width={1280}
              height={720}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end gap-5 px-5 pt-24 pb-28 md:pb-10">
            <div className="max-w-3xl text-white">
              <p className="text-xs tracking-[0.2em] uppercase">{c.eyebrow}</p>
              <h1 className="rise mt-3 text-4xl text-white sm:text-6xl">{c.heroTitle}</h1>
              <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-lg">{c.heroSub}</p>
            </div>
            <ExelySearch lang={lang} />
          </div>
        </section>

        <section aria-label={c.stayKicker} className="border-b border-line">
          <ul className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
            {c.trust.map((item) => (
              <li key={item.k} className="border-b border-line px-5 py-6 sm:border-r last:sm:border-r-0">
                <p className="font-serif text-2xl">{item.k}</p>
                <p className="mt-1 text-sm text-muted">{item.v}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-widest text-wood uppercase">{c.stayKicker}</p>
            <h2 className="mt-3 text-4xl">{c.stayTitle}</h2>
            <p className="mt-4 text-muted">{c.stayBody}</p>
          </div>
          <div className="mt-10 flex snap-x gap-6 overflow-x-auto pb-4">
            {roomLayouts.map((room) => (
              <div key={room.id} className="w-[82%] shrink-0 snap-start sm:w-80">
                <RoomCard room={room} lang={lang} />
              </div>
            ))}
          </div>
          <Link
            to={localize(lang, "/phong")}
            className="mt-8 inline-flex min-h-11 items-center border border-ink px-5 text-sm hover:bg-ink hover:text-paper"
          >
            {c.seeRooms}
          </Link>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2">
            <div className="lg:order-2">
              <picture>
                <source type="image/avif" srcSet="/media/pool-960.avif" />
                <img
                  src="/media/pool-960.webp"
                  alt={c.poolTitle}
                  width={960}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="frame-photo w-full"
                />
              </picture>
            </div>
            <div>
              <p className="text-xs tracking-widest text-wood uppercase">{c.poolKicker}</p>
              <h2 className="mt-3 text-4xl">{c.poolTitle}</h2>
              <p className="mt-4 text-muted">{c.poolBody}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2">
            <picture>
              <source type="image/avif" srcSet="/media/dining-960.avif" />
              <img
                src="/media/dining-960.webp"
                alt={c.dineTitle}
                width={960}
                height={640}
                loading="lazy"
                decoding="async"
                className="frame-photo w-full"
              />
            </picture>
            <div>
              <p className="text-xs tracking-widest text-wood uppercase">{c.dineKicker}</p>
              <h2 className="mt-3 text-4xl">{c.dineTitle}</h2>
              <p className="mt-4 text-muted">{c.dineBody}</p>
              <p className="mt-4 text-sm">{c.breakfast}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs tracking-widest text-wood uppercase">{c.meetKicker}</p>
          <h2 className="mt-3 max-w-xl text-4xl">{c.meetTitle}</h2>
          <p className="mt-4 max-w-2xl text-muted">{c.meetBody}</p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-wood uppercase">{c.placeKicker}</p>
            <h2 className="mt-3 text-4xl">{c.placeTitle}</h2>
            <p className="mt-4 text-muted">{c.placeBody}</p>
          </div>
          <iframe
            title={c.mapTitle}
            src="https://maps.google.com/maps?q=44-54%20L%C3%AA%20L%E1%BB%A3i%20Hu%E1%BA%BF&z=16&output=embed"
            className="min-h-72 w-full border border-line"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="faq-heading">
          <p className="text-xs tracking-widest text-wood uppercase">{lang === "vi" ? "Câu hỏi" : "Questions"}</p>
          <h2 id="faq-heading" className="mt-3 text-4xl">
            {lang === "vi" ? "Những gì đã xác nhận" : "What is confirmed"}
          </h2>
          <dl className="mt-10 max-w-3xl divide-y divide-line">
            {faqItems(lang).map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-serif text-2xl">{item.q}</dt>
                <dd className="mt-2 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
