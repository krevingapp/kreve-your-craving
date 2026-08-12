import { useState, type FormEvent } from "react";
import { z } from "zod";

import { Reveal } from "./Reveal";
import { submitWaitlist, type WaitlistKind } from "@/lib/waitlist";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  city: z.string().trim().min(2, "Please enter your city").max(80, "City is too long"),
});

type Errors = Partial<Record<"name" | "email" | "city" | "form", string>>;

export function WaitlistSection() {
  const [kind, setKind] = useState<WaitlistKind>("foodie");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("loading");
    try {
      await submitWaitlist({ ...parsed.data, kind });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("idle");
      setErrors({ form: "Something went wrong. Please try again." });
    }
  }

  return (
    <section id="early-access" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="rounded-[2rem] border border-border bg-background p-6 shadow-lift sm:p-10">
          <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
            Early access
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Be there before the first bite.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Kreving is coming soon. Be among the first people to discover the best street food
            around you.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-secondary p-1" role="group" aria-label="Signup type">
            {(["foodie", "vendor"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setKind(option)}
                aria-pressed={kind === option}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  kind === option ? "bg-brand text-brand-foreground" : "text-muted-foreground"
                }`}
              >
                {option === "foodie" ? "Food lover" : "Vendor"}
              </button>
            ))}
          </div>

          {status === "done" ? (
            <p
              role="status"
              className="mt-8 rounded-2xl border border-mustard/50 bg-mustard/15 px-5 py-6 text-base font-semibold text-ink"
            >
              You're on the list! We'll let you know when Kreving launches.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-4">
              <Field name="name" label="Name" placeholder="Your name" error={errors.name} />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                error={errors.email}
              />
              <Field name="city" label="City" placeholder="Your city" error={errors.city} />
              {errors.form && <p className="text-sm font-medium text-destructive">{errors.form}</p>}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-soft transition-transform duration-200 hover:scale-[1.01] active:scale-95 disabled:opacity-60"
              >
                {status === "loading" ? "Joining…" : "Join Early Access"}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal
          id="vendor-access"
          delay={100}
          className="mt-6 grid gap-4 rounded-[2rem] border border-border bg-cream p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8"
        >
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-ink">Are you a street-food vendor?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get early access and be among the first vendors on Kreving.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setKind("vendor");
              setStatus("idle");
              document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Join as a Vendor
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      {error && (
        <p id={`${name}-error`} className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}