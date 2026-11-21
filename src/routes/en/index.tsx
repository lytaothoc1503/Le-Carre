import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { absolute } from "@/lib/site";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Le Carré Huế — The citadel’s heritage, at a modern pace" },
      {
        name: "description",
        content:
          "A 50-room boutique hotel at 44–54 Lê Lợi, Thuận Hóa ward, Huế. Pool, restaurant, bar and breakfast. Book direct.",
      },
    ],
    links: [
      { rel: "canonical", href: absolute("/en") },
      { rel: "alternate", hrefLang: "vi", href: absolute("/") },
      { rel: "alternate", hrefLang: "en", href: absolute("/en") },
      { rel: "alternate", hrefLang: "x-default", href: absolute("/") },
    ],
  }),
  component: () => <HomePage lang="en" />,
});
