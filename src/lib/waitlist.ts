export type WaitlistKind = "foodie" | "vendor";

export interface WaitlistSignup {
  name: string;
  email: string;
  city: string;
  kind: WaitlistKind;
}

/**
 * Single integration point for the waitlist.
 *
 * Today this only records the signup in the browser so the pre-launch site can
 * run with no backend. To go live, replace the body with a call to your API /
 * database (the signature and error contract can stay exactly the same).
 */
export async function submitWaitlist(signup: WaitlistSignup): Promise<void> {
  if (typeof window === "undefined") return;
  const key = "kreving.waitlist";
  const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]") as WaitlistSignup[];
  existing.push(signup);
  window.localStorage.setItem(key, JSON.stringify(existing));
}