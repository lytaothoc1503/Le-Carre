import { useEffect, useState } from "react";
import { t } from "@/lib/copy";
import type { Lang } from "@/lib/site";

/**
 * Search form copied from the public embed on lecarre.vn.
 * Dates stay inside Exely. The link below shows only if the form does not load.
 */
export function ExelySearch({ lang, id = "dat-phong" }: { lang: Lang; id?: string }) {
  const c = t(lang);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let started = false;
    let timer = 0;
    let stop = 0;
    const start = () => {
      if (started) return;
      started = true;
      if (!document.getElementById("exely-boot")) {
        const script = document.createElement("script");
        script.id = "exely-boot";
        script.src = lang === "vi" ? "/exely-vi.js" : "/exely-en.js";
        script.async = true;
        document.body.appendChild(script);
      }
      const box = document.getElementById("be-search-form");
      timer = window.setInterval(() => {
        if (box && box.childElementCount > 0) setReady(true);
      }, 400);
      stop = window.setTimeout(() => window.clearInterval(timer), 8000);
    };
    let idleId = 0;
    const afterHero = () => {
      idleId = window.requestIdleCallback(start, { timeout: 1200 });
    };
    if (document.readyState === "complete") afterHero();
    else window.addEventListener("load", afterHero, { once: true });
    return () => {
      window.removeEventListener("load", afterHero);
      if (idleId) window.cancelIdleCallback(idleId);
      window.clearInterval(timer);
      window.clearTimeout(stop);
    };
  }, [lang]);

  return (
    <div id={id} className="bg-paper/95 p-3 text-ink">
      <div id="be-search-form" className="min-h-16" />
      {ready ? null : (
        <a
          href="https://lecarre.vn/booking"
          className="mt-2 inline-flex min-h-11 items-center text-sm text-wood underline"
        >
          {c.engineFallback}
        </a>
      )}
    </div>
  );
}
