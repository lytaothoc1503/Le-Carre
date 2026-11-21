export const SITE_NAME = "Le Carré Huế";

/** Canonical host used in hreflang and JSON-LD. Confirm if the live domain differs. */
export const SITE_ORIGIN = "https://lecarre.vn";

export const ADDRESS = {
  street: "44–54 Lê Lợi",
  ward: "phường Thuận Hóa",
  city: "TP. Huế",
  country: "Việt Nam",
};

export type Lang = "vi" | "en";

export function isLang(value: string): value is Lang {
  return value === "vi" || value === "en";
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "vi";
}

export function localize(lang: Lang, path: "/" | "/phong"): string {
  if (lang === "vi") return path;
  return path === "/" ? "/en" : "/en/phong";
}

export function absolute(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}
