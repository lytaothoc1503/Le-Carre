import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { absolute } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Carré Huế — Di sản kinh thành, nhịp sống đương đại" },
      {
        name: "description",
        content:
          "Khách sạn boutique 50 phòng tại 44–54 Lê Lợi, phường Thuận Hóa, TP. Huế. Bể bơi, nhà hàng, bar và bữa sáng. Đặt phòng trực tiếp.",
      },
    ],
    links: alternates("/"),
  }),
  component: () => <HomePage lang="vi" />,
});

export function alternates(path: "/" | "/phong") {
  const vi = path === "/" ? "/" : "/phong";
  const en = path === "/" ? "/en" : "/en/phong";
  return [
    { rel: "canonical", href: absolute(vi) },
    { rel: "alternate", hrefLang: "vi", href: absolute(vi) },
    { rel: "alternate", hrefLang: "en", href: absolute(en) },
    { rel: "alternate", hrefLang: "x-default", href: absolute(vi) },
  ];
}
