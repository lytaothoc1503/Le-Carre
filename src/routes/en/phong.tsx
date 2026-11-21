import { createFileRoute } from "@tanstack/react-router";
import { RoomsPage } from "@/components/rooms-page";
import { absolute } from "@/lib/site";

export const Route = createFileRoute("/en/phong")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Le Carré Huế" },
      {
        name: "description",
        content:
          "Room list for Le Carré Huế. Category names, size, occupancy, bed type and view are still to be confirmed.",
      },
    ],
    links: [
      { rel: "canonical", href: absolute("/en/phong") },
      { rel: "alternate", hrefLang: "vi", href: absolute("/phong") },
      { rel: "alternate", hrefLang: "en", href: absolute("/en/phong") },
      { rel: "alternate", hrefLang: "x-default", href: absolute("/phong") },
    ],
  }),
  component: () => <RoomsPage lang="en" />,
});
