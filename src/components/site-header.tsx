import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { t } from "@/lib/copy";
import { localize, type Lang } from "@/lib/site";

export function SiteHeader({ lang, path }: { lang: Lang; path: "/" | "/phong" }) {
  const c = t(lang);
  const [open, setOpen] = useState(false);
  const other: Lang = lang === "vi" ? "en" : "vi";

  return (
    <>
    <header className="sticky top-0 z-40 bg-wine text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to={localize(lang, "/")} className="group min-h-11 leading-none">
          <img src="/brand-logo.svg" alt="Le Carré Huế" width={128} height={88} className="h-11 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label={c.navHome}>
          <Link to={localize(lang, "/")} className="min-h-11 leading-[2.75rem] text-paper">
            {c.navHome}
          </Link>
          <Link to={localize(lang, "/phong")} className="min-h-11 leading-[2.75rem] text-paper">
            {c.navRooms}
          </Link>
          <Link
            to={localize(other, path)}
            hrefLang={other}
            lang={other}
            className="min-h-11 leading-[2.75rem] tracking-widest text-paper/80 uppercase"
            aria-label={c.langLabel}
          >
            {c.langName}
          </Link>
          <a
            href="#dat-phong"
            className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-semibold text-ink"
          >
            {c.book}
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-white/30 text-paper"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
            <span className="sr-only">{open ? c.navClose : c.navMenu}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="site-menu" className="grid border-t border-white/15 px-5 py-3 md:hidden">
          <Link to={localize(lang, "/")} className="min-h-11 leading-[2.75rem]" onClick={() => setOpen(false)}>
            {c.navHome}
          </Link>
          <Link
            to={localize(lang, "/phong")}
            className="min-h-11 leading-[2.75rem]"
            onClick={() => setOpen(false)}
          >
            {c.navRooms}
          </Link>
          <Link to={localize(other, path)} className="min-h-11 leading-[2.75rem]" hrefLang={other}>
            {c.langName}
          </Link>
        </nav>
      ) : null}
    </header>
      <a
        href="#dat-phong"
        className="fixed inset-x-0 bottom-0 z-40 bg-wine px-4 pt-3 pb-3 md:hidden"
      >
        <span className="flex min-h-12 items-center justify-center rounded-full bg-gold text-base font-semibold text-ink">
          {c.book}
        </span>
      </a>
    </>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
