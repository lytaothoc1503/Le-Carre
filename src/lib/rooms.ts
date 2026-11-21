export type RoomLayout = {
  id: string;
  image: string;
  width: number;
  height: number;
  alt: { vi: string; en: string };
};

/** Layout samples only. No invented size, occupancy, bed, view or rate. */
export const roomLayouts: RoomLayout[] = [
  {
    id: "01",
    image: "/media/room-linen-960.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Ảnh minh họa phòng ngủ gam kem và gỗ tối, chưa phải ảnh phòng chính thức",
      en: "Illustrative bedroom in cream and dark wood, not an official room photo",
    },
  },
  {
    id: "02",
    image: "/media/room-window-960.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Ảnh minh họa góc phòng nhìn ra phố, chưa phải ảnh phòng chính thức",
      en: "Illustrative room corner toward the street, not an official room photo",
    },
  },
  {
    id: "03",
    image: "/media/room-linen-960.webp",
    width: 960,
    height: 640,
    alt: {
      vi: "Ảnh minh họa không gian ngủ thứ ba, dùng để duyệt bố cục",
      en: "Third illustrative sleeping space, used to review layout",
    },
  },
];

export type RoomFilters = {
  guests: "all" | "1" | "2" | "3" | "4";
  bed: "all" | "double" | "twin";
  view: "all" | "city" | "street";
  size: "all" | "s" | "m" | "l";
};

export const defaultFilters: RoomFilters = {
  guests: "all",
  bed: "all",
  view: "all",
  size: "all",
};

export function filtersAreOpen(filters: RoomFilters): boolean {
  return (
    filters.guests !== "all" ||
    filters.bed !== "all" ||
    filters.view !== "all" ||
    filters.size !== "all"
  );
}

/** Confirmed inventory has no classified attributes, so any active filter matches nothing. */
export function visibleRooms(filters: RoomFilters): RoomLayout[] {
  if (filtersAreOpen(filters)) return [];
  return roomLayouts;
}
