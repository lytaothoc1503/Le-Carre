import { createFileRoute } from "@tanstack/react-router";
import { RoomsPage } from "@/components/rooms-page";
import { alternates } from "./index";

export const Route = createFileRoute("/phong")({
  head: () => ({
    meta: [
      { title: "Phòng & Suite — Le Carré Huế" },
      {
        name: "description",
        content:
          "Danh sách phòng Le Carré Huế. Tên hạng, diện tích, số khách, loại giường và view đang chờ xác nhận.",
      },
    ],
    links: alternates("/phong").map((link) =>
      link.rel === "canonical" ? { ...link, href: "https://lecarre.vn/phong" } : link,
    ),
  }),
  component: () => <RoomsPage lang="vi" />,
});
