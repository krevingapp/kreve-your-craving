import { MapPin, Sparkles, Star } from "lucide-react";

import heroImage from "@/assets/hero-collage.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full bg-mustard/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 size-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-16 sm:px-6 md:pt-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-20 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-mustard/50 bg-mustard/15 px-3 py-1 text-xs font-bold tracking-[0.18em] text-ink uppercase">
            <Sparkles className="size-3.5 text-brand" aria-hidden />
            Coming Soon
          </span>

          <h1 className="mt-5 text-[2.6rem] leading-[1.03] font-extrabold text-ink sm:text-6xl lg:text-[4.25rem]">
            Discover. Taste.{" "}
            <span className="relative inline-block text-brand">
              Kreve.
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-mustard"
                preserveAspectRatio="none"
              >
                <path d="M2 8C50 2 150 2 198 7" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover the street food everyone is talking about — and the hidden gems waiting to be
            found.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#early-access"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lift transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              Join the Early Access
            </a>
            <a
              href="#for-vendors"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/10 bg-background px-7 py-3.5 text-base font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-secondary"
            >
              I'm a Food Vendor
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Built for people who plan their day around their next great bite.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-lift">
            <img
              src={heroImage}
              alt="Collage of street food: grilled skewers, a dosa on the griddle, steaming momos and a lit-up night food cart"
              width={1200}
              height={1408}
              className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[34rem]"
            />
          </div>

          <div className="float-slow absolute -top-4 -left-3 flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2 shadow-soft sm:left-6">
            <span className="grid size-8 place-items-center rounded-xl bg-brand/10">
              <MapPin className="size-4 text-brand" aria-hidden />
            </span>
            <span className="text-xs font-semibold text-ink">
              12 spots near you
              <span className="block text-[0.7rem] font-normal text-muted-foreground">
                Sample preview
              </span>
            </span>
          </div>

          <div
            className="float-slow absolute -bottom-5 right-2 flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2 shadow-soft"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="grid size-8 place-items-center rounded-xl bg-mustard/25">
              <Star className="size-4 text-ink" aria-hidden />
            </span>
            <span className="text-xs font-semibold text-ink">
              Trending tonight
              <span className="block text-[0.7rem] font-normal text-muted-foreground">
                Concept preview
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}