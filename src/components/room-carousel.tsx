import { useEffect } from "react";
import { RoomCard } from "@/components/room-card";
import { roomLayouts } from "@/lib/rooms";
import type { Lang } from "@/lib/site";

type JQueryCarousel = {
  fn: {
    owlCarousel?: (options: Record<string, unknown>) => void;
  };
  (element: Element): {
    hasClass: (name: string) => boolean;
    owlCarousel: (options: Record<string, unknown>) => void;
    trigger: (name: string) => void;
  };
};

export function RoomCarousel({ lang }: { lang: Lang }) {
  useEffect(() => {
    const node = document.querySelector(".rooms-suites-carousel");
    if (!node) return;

    const start = () => {
      const jq = (window as unknown as { jQuery?: JQueryCarousel }).jQuery;
      if (!jq?.fn.owlCarousel || !node.isConnected) return;
      const $node = jq(node);
      if ($node.hasClass("owl-loaded")) return;
      $node.owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        dots: false,
        navText: [
          "<span class='fa-solid fa-chevron-left' aria-hidden='true'></span>",
          "<span class='fa-solid fa-chevron-right' aria-hidden='true'></span>",
        ],
        responsive: {
          0: { items: 1.15 },
          768: { items: 2.15 },
          1100: { items: 3 },
        },
      });
    };

    if (document.documentElement.dataset.vendor === "ready") start();
    document.addEventListener("vendor-ready", start);
    return () => {
      document.removeEventListener("vendor-ready", start);
      const jq = (window as unknown as { jQuery?: JQueryCarousel }).jQuery;
      if (jq?.fn.owlCarousel && node.classList.contains("owl-loaded")) {
        jq(node).trigger("destroy.owl.carousel");
      }
    };
  }, [lang]);

  return (
    <div className="rooms-suites-carousel owl-carousel owl-theme mt-10">
      {roomLayouts.map((room) => (
        <div key={room.id} className="h-full px-1">
          <RoomCard room={room} lang={lang} />
        </div>
      ))}
    </div>
  );
}
