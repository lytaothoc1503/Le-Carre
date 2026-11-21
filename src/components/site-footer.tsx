import { Link } from "@tanstack/react-router";
import { t } from "@/lib/copy";
import { bookingEngineUrl } from "@/content/settings";
import { ADDRESS, localize, type Lang } from "@/lib/site";

export function SiteFooter({ lang }: { lang: Lang }) {
  const c = t(lang);
  const engine = bookingEngineUrl();
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl">Le Carré Huế</p>
          <p className="mt-3 text-sm text-ivory/80">
            {ADDRESS.street}
            <br />
            {ADDRESS.ward}, {ADDRESS.city}
            <br />
            {ADDRESS.country}
          </p>
          <p className="mt-3 text-sm text-ivory/70">{c.opened}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-ivory/60 uppercase">{c.footerStay}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to={localize(lang, "/phong")} className="underline-offset-4 hover:underline">
                {c.navRooms}
              </Link>
            </li>
            <li>
              <a href="#dat-phong" className="underline-offset-4 hover:underline">
                {c.book}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-ivory/60 uppercase">{c.footerVisit}</p>
          <ul className="mt-3 space-y-2 text-sm text-ivory/85">
            <li>
              {c.phone}: {c.pending}
            </li>
            <li>
              {c.email}: {c.pending}
            </li>
            <li>
              {c.chat}: {c.pending}
            </li>
            <li>
              {c.social}: {c.socialNote}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-ivory/60 uppercase">{c.footerBook}</p>
          <ul className="mt-3 space-y-2 text-sm text-ivory/85">
            <li>
              {c.engine}:{" "}
              {engine ? (
                <a href={engine} className="underline">
                  {c.check}
                </a>
              ) : (
                c.pending
              )}
            </li>
            <li>{c.policiesNote}</li>
            <li>
              <a href="/sitemap.xml" className="underline-offset-4 hover:underline">
                {c.sitemap}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-ivory/60">
        {c.rights}
      </div>
    </footer>
  );
}
