import { useState, type FormEvent, type ReactNode } from "react";
import { bookingDestination } from "@/content/settings";
import { type Lang } from "@/lib/site";
import { t } from "@/lib/copy";

type Props = {
  lang: Lang;
  id?: string;
  tone?: "overlay" | "paper";
};

export function BookingBar({ lang, id = "dat-phong", tone = "paper" }: Props) {
  const c = t(lang);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setError(null);
    if (checkIn && checkOut && checkOut <= checkIn) {
      setError(c.datesInvalid);
      return;
    }
    const destination = bookingDestination({ checkIn, checkOut, guests });
    if (!destination) {
      setMessage(c.bookingMissing);
      return;
    }
    window.location.assign(destination);
  }

  const shell =
    tone === "overlay"
      ? "bg-paper/95 text-ink shadow-none"
      : "bg-paper text-ink";

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={`${shell} grid grid-cols-2 gap-2 border border-line p-3 sm:gap-3 sm:p-5 lg:grid-cols-4 lg:items-end`}
    >
      <Field label={c.arrive} name="checkin">
        <input
          id={`${id}-in`}
          name="checkin"
          type="date"
          value={checkIn}
          onChange={(event) => setCheckIn(event.target.value)}
          className="field"
        />
      </Field>
      <Field label={c.depart} name="checkout">
        <input
          id={`${id}-out`}
          name="checkout"
          type="date"
          value={checkOut}
          min={checkIn || undefined}
          onChange={(event) => setCheckOut(event.target.value)}
          className="field"
        />
      </Field>
      <Field label={c.guests} name="guests">
        <select
          id={`${id}-guests`}
          name="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          className="field"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {c.guestOption(n)}
            </option>
          ))}
        </select>
      </Field>
      <button
        type="submit"
        className="col-span-2 min-h-14 bg-son px-6 text-base font-semibold tracking-wide text-paper transition-colors hover:bg-son-deep lg:col-span-1"
      >
        {c.check}
      </button>
      {error ? (
        <p role="alert" className="col-span-2 text-sm text-son lg:col-span-4">
          {error}
        </p>
      ) : null}
      {message ? (
        <div role="status" className="col-span-2 space-y-1 text-sm text-muted lg:col-span-4">
          <p>{message}</p>
          <p>
            {c.arrive}: {checkIn || "—"} · {c.depart}: {checkOut || "—"} · {c.guests}: {guests}
          </p>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-xs tracking-widest text-muted uppercase">{label}</span>
      {children}
    </label>
  );
}
