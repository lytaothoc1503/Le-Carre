import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { BookingBar } from "@/components/booking-bar";
import { RoomCard } from "@/components/room-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { t } from "@/lib/copy";
import { defaultFilters, visibleRooms, type RoomFilters } from "@/lib/rooms";
import { pageSchema } from "@/lib/schema";
import { localize, type Lang } from "@/lib/site";

export function RoomsPage({ lang }: { lang: Lang }) {
  const c = t(lang);
  const [filters, setFilters] = useState<RoomFilters>(defaultFilters);
  const rooms = visibleRooms(filters);

  function set<K extends keyof RoomFilters>(key: K, value: RoomFilters[K]) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <JsonLd data={pageSchema(lang, "/phong")} />
      <SiteHeader lang={lang} path="/phong" />
      <main id="content" className="mx-auto max-w-6xl px-5 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={localize(lang, "/")} className="underline-offset-4 hover:underline">
            {lang === "vi" ? "Trang chủ" : "Home"}
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{c.navRooms}</span>
        </nav>
        <p className="mt-6 text-xs tracking-widest text-wood uppercase">{c.roomsKicker}</p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{c.roomsTitle}</h1>
        <p className="mt-4 max-w-2xl text-muted">{c.roomsBody}</p>
        <div className="mt-8">
          <BookingBar lang={lang} id="dat-phong" />
        </div>
        <form className="mt-8 grid gap-4 border border-line bg-paper p-4 sm:grid-cols-2 lg:grid-cols-4">
          <Filter label={c.filterGuests} value={filters.guests} onChange={(value) => set("guests", value as RoomFilters["guests"])}>
            <option value="all">{c.all}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Filter>
          <Filter label={c.filterBed} value={filters.bed} onChange={(value) => set("bed", value as RoomFilters["bed"])}>
            <option value="all">{c.all}</option>
            <option value="double">{c.bedDouble}</option>
            <option value="twin">{c.bedTwin}</option>
          </Filter>
          <Filter label={c.filterView} value={filters.view} onChange={(value) => set("view", value as RoomFilters["view"])}>
            <option value="all">{c.all}</option>
            <option value="river">{c.viewRiver}</option>
            <option value="city">{c.viewCity}</option>
          </Filter>
          <Filter label={c.filterSize} value={filters.size} onChange={(value) => set("size", value as RoomFilters["size"])}>
            <option value="all">{c.all}</option>
            <option value="s">{c.sizeS}</option>
            <option value="m">{c.sizeM}</option>
            <option value="l">{c.sizeL}</option>
          </Filter>
        </form>
        <div className="mt-4 flex items-center justify-between gap-4 text-sm">
          <p>{c.shown(rooms.length)}</p>
          <button
            type="button"
            className="min-h-11 px-2 underline-offset-4 hover:underline"
            onClick={() => setFilters(defaultFilters)}
          >
            {c.reset}
          </button>
        </div>
        {rooms.length === 0 ? (
          <div className="mt-8 border border-line bg-paper p-8">
            <h2 className="text-3xl">{c.emptyTitle}</h2>
            <p className="mt-3 max-w-xl text-muted">{c.emptyBody}</p>
          </div>
        ) : (
          <div className="mt-14 grid gap-x-12 gap-y-16 md:grid-cols-2">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} lang={lang} />
            ))}
          </div>
        )}
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}

function Filter({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-xs tracking-widest text-muted uppercase">{label}</span>
      <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
        {children}
      </select>
    </label>
  );
}
