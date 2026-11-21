import { t } from "@/lib/copy";
import { type RoomLayout } from "@/lib/rooms";
import type { Lang } from "@/lib/site";

export function RoomCard({ room, lang }: { room: RoomLayout; lang: Lang }) {
  const c = t(lang);

  return (
    <article className="flex h-full flex-col">
      <a href={room.detailUrl} className="block overflow-hidden rounded-2xl">
        <picture>
          <source type="image/avif" srcSet={room.image.replace(".webp", ".avif")} />
          <img
            src={room.image}
            alt={room.alt[lang]}
            width={room.width}
            height={room.height}
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full object-cover transition duration-500 hover:scale-105"
          />
        </picture>
      </a>
      <div className="flex flex-1 flex-col pt-4">
        <h3 className="font-serif text-2xl text-ink">{room.name[lang]}</h3>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <span>
            <i className="fa-solid fa-expand me-1" aria-hidden="true" />
            {room.sizeM2} m²
          </span>
          <span>
            <i className="fa-solid fa-bed me-1" aria-hidden="true" />
            {room.bedLabel[lang]}
          </span>
          <span>
            <i className="fa-solid fa-user me-1" aria-hidden="true" />
            {lang === "vi" ? `${room.guests} khách` : `${room.guests} guests`}
          </span>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={room.bookingUrl}
            className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-semibold text-ink"
          >
            {c.book}
          </a>
          <a href={room.detailUrl} className="inline-flex min-h-11 items-center text-sm text-wood underline">
            {c.seeRoom}
          </a>
        </div>
      </div>
    </article>
  );
}
