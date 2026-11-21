import { useEffect } from "react";

const sources = [
  "/vendor/jquery/jquery.min.js",
  "/vendor/owl/owl.carousel.min.js",
  "/vendor/bootstrap/bootstrap.bundle.min.js",
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
