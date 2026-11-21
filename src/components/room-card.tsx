import { useRef } from "react";
import { t } from "@/lib/copy";
import { roomLine, type RoomLayout } from "@/lib/rooms";
import type { Lang } from "@/lib/site";

export function RoomCard({ room, lang }: { room: RoomLayout; lang: Lang }) {
  const c = t(lang);
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <article className="flex flex-col">
      <picture>
        <source type="image/avif" srcSet={room.image.replace(".webp", ".avif")} />
        <img
          src={room.image}
          alt={room.alt[lang]}
          width={room.width}
          height={room.height}
          loading="lazy"
          decoding="async"
          className="frame-editorial w-full object-cover"
        />
      </picture>
      <div className="flex flex-col pt-6 pb-2">
        <p className="text-xs tracking-widest text-wood uppercase">{room.sizeM2} m²</p>
        <h3 className="mt-3 font-serif text-4xl text-ink">{room.name[lang]}</h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{roomLine(room, lang)}</p>
        <button
          type="button"
          className="mt-6 inline-flex min-h-11 items-center self-start border-b border-ink text-sm hover:text-son"
          onClick={() => dialogRef.current?.showModal()}
        >
          {c.seeRoom}
        </button>
        <dialog
          ref={dialogRef}
          className="w-[min(32rem,calc(100%-2rem))] border border-line bg-paper p-6 text-ink backdrop:bg-scrim/50"
        >
          <h2 className="font-serif text-3xl">{c.seeRoom}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{c.detailLater}</p>
          <form method="dialog" className="mt-8">
            <button type="submit" className="min-h-11 bg-son px-5 text-sm font-medium text-paper">
              {c.close}
            </button>
          </form>
        </dialog>
      </div>
    </article>
  );
}
