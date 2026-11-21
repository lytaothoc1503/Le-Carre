/**
 * Site settings. Set bookingEngineUrl when the hotel confirms the engine.
 * Leave it empty until then. Components must read this file, not their own URL.
 */
export const siteSettings = {
  bookingEngineUrl: "https://lecarre.vn/booking",
  bookingParams: {
    checkIn: "checkin",
    checkOut: "checkout",
    guests: "adults",
  },
};

export function bookingEngineUrl(): string | null {
  const value = siteSettings.bookingEngineUrl.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function bookingDestination(stay: {
  checkIn: string;
  checkOut: string;
  guests: string;
}): string | null {
  const base = bookingEngineUrl();
  if (!base) return null;
  const url = new URL(base);
  const { checkIn, checkOut, guests } = siteSettings.bookingParams;
  if (stay.checkIn) url.searchParams.set(checkIn, stay.checkIn);
  if (stay.checkOut) url.searchParams.set(checkOut, stay.checkOut);
  if (stay.guests) url.searchParams.set(guests, stay.guests);
  return url.toString();
}
