import { absolute, CONTACT, localize, SITE_NAME, SITE_ORIGIN, type Lang } from "@/lib/site";

const HOTEL_ID = `${SITE_ORIGIN}/#hotel`;

const faqs = {
  vi: [
    {
      q: "Le Carré Huế ở đâu?",
      a: "Tại 44–54 Lê Lợi, phường Thuận Hóa, TP. Huế, gần sông Hương, phố đi bộ đêm, cầu Trường Tiền và Đại Nội.",
    },
    {
      q: "Khách sạn có bao nhiêu phòng?",
      a: "50 phòng.",
    },
    {
      q: "Khách sạn có những tiện ích nào?",
      a: "Bể bơi, nhà hàng, bar và bữa sáng.",
    },
    {
      q: "Khách sạn khai trương năm nào?",
      a: "Năm 2025.",
    },
  ],
  en: [
    {
      q: "Where is Le Carré Huế?",
      a: "At 44–54 Lê Lợi, Thuận Hóa ward, Huế, near the Perfume River, the night walking street, Tràng Tiền Bridge and the Imperial City.",
    },
    {
      q: "How many rooms does the hotel have?",
      a: "50 rooms.",
    },
    {
      q: "Which facilities does the hotel have?",
      a: "A swimming pool, a restaurant, a bar and breakfast.",
    },
    {
      q: "When did the hotel open?",
      a: "In 2025.",
    },
  ],
} as const;

export function faqItems(lang: Lang) {
  return faqs[lang];
}

function hotelNode() {
  return {
    "@type": ["Hotel", "LocalBusiness"],
    "@id": HOTEL_ID,
    name: SITE_NAME,
    url: absolute("/"),
    telephone: CONTACT.phoneTel,
    email: CONTACT.email,
    sameAs: [CONTACT.facebook, CONTACT.tiktok],
    description:
      "Boutique hotel of 50 rooms at 44–54 Lê Lợi, Thuận Hóa ward, Huế. A modern address for Hue’s heritage.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "44–54 Lê Lợi",
      addressLocality: "Huế",
      addressRegion: "Thừa Thiên Huế",
      addressCountry: "VN",
    },
    numberOfRooms: 50,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Swimming pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
      { "@type": "LocationFeatureSpecification", name: "Breakfast", value: true },
    ],
  };
}

function breadcrumbNode(lang: Lang, path: "/" | "/phong") {
  const page = absolute(localize(lang, path));
  const homeName = lang === "vi" ? "Trang chủ" : "Home";
  const roomsName = lang === "vi" ? "Phòng & Suite" : "Rooms & Suites";
  const homeUrl = absolute(localize(lang, "/"));
  const items = [{ name: homeName, item: homeUrl }];
  if (path === "/phong") {
    items.push({ name: roomsName, item: page });
  }
  return {
    "@type": "BreadcrumbList",
    "@id": `${page}#breadcrumb`,
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

function faqNode(lang: Lang) {
  return {
    "@type": "FAQPage",
    "@id": `${absolute(localize(lang, "/"))}#faq`,
    mainEntity: faqItems(lang).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** Hotel and LocalBusiness share one node. No AggregateRating until a verified count exists. */
export function pageSchema(lang: Lang, path: "/" | "/phong") {
  const graph: object[] = [hotelNode(), breadcrumbNode(lang, path)];
  if (path === "/") graph.push(faqNode(lang));
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
