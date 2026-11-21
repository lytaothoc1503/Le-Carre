import type { Lang } from "@/lib/site";

export type BedKind = "double" | "twin";
export type ViewKind = "river" | "city" | "either";

export type RoomLayout = {
  id: string;
  name: { vi: string; en: string };
  image: string;
  width: number;
  height: number;
  alt: { vi: string; en: string };
  sizeM2: number;
  guests: number;
  bed: BedKind | "unlisted";
  bedLabel: { vi: string; en: string };
  view: ViewKind | "unlisted";
  viewLabel: { vi: string; en: string };
  bookingUrl: string;
  detailUrl: string;
};

/** Specs published on lecarre.vn, the site linked from the hotel's Facebook page. No rates. */
export const roomLayouts: RoomLayout[] = [
  {
    id: "vista-twin",
    name: { vi: "Grand Deluxe Vista Twin", en: "Grand Deluxe Vista Twin" },
    image: "/media/room-vista-twin.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Grand Deluxe Vista Twin tại Le Carré Huế, giường đơn và dải giường đỏ son",
      en: "Grand Deluxe Vista Twin at Le Carré Huế, twin beds and a lacquer-red runner",
    },
    sizeM2: 23,
    guests: 2,
    bed: "twin",
    bedLabel: { vi: "2 giường đơn 1,2 × 2 m", en: "2 single beds, 1.2 × 2 m" },
    view: "river",
    viewLabel: { vi: "Sông Hương", en: "Perfume River" },
    bookingUrl: "https://lecarre.vn/booking?product_id=7&room-type=5082934",
    detailUrl: "https://lecarre.vn/rooms-suites/deluxe/grand-deluxe-vista-twin-room",
  },
  {
    id: "vista-double",
    name: { vi: "Grand Deluxe Vista Double", en: "Grand Deluxe Vista Double" },
    image: "/media/room-vista-double.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Grand Deluxe Vista Double tại Le Carré Huế",
      en: "Grand Deluxe Vista Double at Le Carré Huế",
    },
    sizeM2: 19,
    guests: 2,
    bed: "double",
    bedLabel: { vi: "1 giường queen 1,6 × 2 m", en: "1 queen bed, 1.6 × 2 m" },
    view: "river",
    viewLabel: { vi: "Sông Hương", en: "Perfume River" },
    bookingUrl: "https://lecarre.vn/booking?product_id=6&room-type=5082933",
    detailUrl: "https://lecarre.vn/rooms-suites/deluxe/grand-deluxe-vista-double-room",
  },
  {
    id: "cozy-double",
    name: { vi: "Deluxe Cozy Double", en: "Deluxe Cozy Double" },
    image: "/media/room-cozy-double.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Deluxe Cozy Double tại Le Carré Huế",
      en: "Deluxe Cozy Double at Le Carré Huế",
    },
    sizeM2: 21,
    guests: 3,
    bed: "double",
    bedLabel: { vi: "1 giường queen 1,6 × 2 m", en: "1 queen bed, 1.6 × 2 m" },
    view: "unlisted",
    viewLabel: { vi: "Không ghi view", en: "View not listed" },
    bookingUrl: "https://lecarre.vn/booking?product_id=5&room-type=5082930",
    detailUrl: "https://lecarre.vn/rooms-suites/deluxe/deluxe-cozy-double-room",
  },
  {
    id: "cozy-twin",
    name: { vi: "Deluxe Cozy Twin", en: "Deluxe Cozy Twin" },
    image: "/media/room-cozy-twin.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Deluxe Cozy Twin tại Le Carré Huế",
      en: "Deluxe Cozy Twin at Le Carré Huế",
    },
    sizeM2: 24,
    guests: 2,
    bed: "twin",
    bedLabel: { vi: "2 giường đơn 1,2 × 2 m", en: "2 single beds, 1.2 × 2 m" },
    view: "unlisted",
    viewLabel: { vi: "Không ghi view", en: "View not listed" },
    bookingUrl: "https://lecarre.vn/booking?product_id=4&room-type=5082931",
    detailUrl: "https://lecarre.vn/rooms-suites/deluxe/deluxe-cozy-twin-room",
  },
  {
    id: "studio",
    name: { vi: "Le Carré Studio Suite", en: "Le Carré Studio Suite" },
    image: "/media/room-studio.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Le Carré Studio Suite",
      en: "Le Carré Studio Suite",
    },
    sizeM2: 22,
    guests: 3,
    bed: "double",
    bedLabel: { vi: "1 giường queen 1,8 × 2 m", en: "1 queen bed, 1.8 × 2 m" },
    view: "unlisted",
    viewLabel: { vi: "Không ghi view", en: "View not listed" },
    bookingUrl: "https://lecarre.vn/booking?product_id=3&room-type=5082935",
    detailUrl: "https://lecarre.vn/rooms-suites/suites/le-carre-studio-suite",
  },
  {
    id: "signature",
    name: { vi: "Le Carré Signature Suite", en: "Le Carré Signature Suite" },
    image: "/media/room-signature.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Le Carré Signature Suite, bồn tắm và cửa kính",
      en: "Le Carré Signature Suite, with a soaking tub and glazed doors",
    },
    sizeM2: 40,
    guests: 3,
    bed: "unlisted",
    bedLabel: { vi: "Loại giường không ghi rõ", en: "Bed type not listed" },
    view: "either",
    viewLabel: { vi: "Phố hoặc sông", en: "City or river" },
    bookingUrl: "https://lecarre.vn/booking?product_id=2&room-type=5082936%2C5082937",
    detailUrl: "https://lecarre.vn/rooms-suites/suites/le-carre-signature-suite",
  },
  {
    id: "metro",
    name: { vi: "Premier Deluxe Metro Double", en: "Premier Deluxe Metro Double" },
    image: "/media/room-metro.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Premier Deluxe Metro Double tại Le Carré Huế",
      en: "Premier Deluxe Metro Double at Le Carré Huế",
    },
    sizeM2: 17,
    guests: 2,
    bed: "double",
    bedLabel: { vi: "1 giường queen 1,6 × 2 m", en: "1 queen bed, 1.6 × 2 m" },
    view: "city",
    viewLabel: { vi: "Thành phố", en: "City" },
    bookingUrl: "https://lecarre.vn/booking?product_id=1&room-type=5082932",
    detailUrl: "https://lecarre.vn/rooms-suites/deluxe/premier-deluxe-metro-room",
  },
];

export type RoomFilters = {
  guests: "all" | "1" | "2" | "3" | "4";
  bed: "all" | "double" | "twin";
  view: "all" | "river" | "city";
  size: "all" | "s" | "m" | "l";
};

export const defaultFilters: RoomFilters = {
  guests: "all",
  bed: "all",
  view: "all",
  size: "all",
};

function sizeBand(meters: number): RoomFilters["size"] {
  if (meters >= 40) return "l";
  if (meters >= 22) return "m";
  return "s";
}

export function visibleRooms(filters: RoomFilters): RoomLayout[] {
  return roomLayouts.filter((room) => {
    if (filters.guests !== "all" && room.guests < Number(filters.guests)) return false;
    if (filters.bed !== "all" && room.bed !== filters.bed) return false;
    if (filters.view === "river" && room.view !== "river" && room.view !== "either") return false;
    if (filters.view === "city" && room.view !== "city" && room.view !== "either") return false;
    if (filters.size !== "all" && sizeBand(room.sizeM2) !== filters.size) return false;
    return true;
  });
}

export function roomLine(room: RoomLayout, lang: Lang): string {
  const guests = lang === "vi" ? `${room.guests} khách` : `${room.guests} guests`;
  return `${room.sizeM2} m² · ${room.bedLabel[lang]} · ${guests} · ${room.viewLabel[lang]}`;
}
