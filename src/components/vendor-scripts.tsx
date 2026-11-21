import { useEffect } from "react";

const sources = [
  "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
];

function load(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing?.dataset.ready === "1") {
      resolve();
      return;
    }
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(src)), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.ready = "1";
      resolve();
    };
    script.onerror = () => reject(new Error(src));
    document.body.appendChild(script);
  });
}

/** jQuery, Owl Carousel and Bootstrap, in that order. */
export function VendorScripts() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const src of sources) {
        if (cancelled) return;
        await load(src);
      }
      document.documentElement.dataset.vendor = "ready";
      document.dispatchEvent(new Event("vendor-ready"));
    })().catch(() => {
      document.documentElement.dataset.vendor = "error";
    });
    return () => {
      cancelled = true;
    };
  }, []);
  return null;
}
