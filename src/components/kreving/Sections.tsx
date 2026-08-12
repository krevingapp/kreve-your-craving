import {
  Bookmark,
  Compass,
  Flame,
  Gem,
  Heart,
  MapPin,
  MessageCircle,
  Camera,
  Share2,
  Store,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";

import chicken65 from "@/assets/food-chicken65.jpg";
import dosa from "@/assets/food-dosa.jpg";
import mirchi from "@/assets/food-mirchi.jpg";
import momos from "@/assets/food-momos.jpg";
import punugulu from "@/assets/food-punugulu.jpg";
import shawarma from "@/assets/food-shawarma.jpg";
import { Reveal } from "./Reveal";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

const CONCEPT_CARDS = [
  { icon: MapPin, title: "Discover local street food", text: "See what's cooking on the streets closest to you." },
  { icon: Gem, title: "Find hidden gems", text: "The tiny carts and corner stalls locals keep to themselves." },
  { icon: TrendingUp, title: "Explore trending spots", text: "Follow the queues, the smoke and the buzz." },
  { icon: Flame, title: "See what people are craving", text: "Live cravings from the community around you." },
  { icon: Share2, title: "Share food discoveries", text: "Put your favourite stall on everyone's map." },
];

export function WhatIsKreving() {
  return (
    <section id="discover" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What is Kreving"
          title="Your next craving is closer than you think."
          description="Kreving helps people discover amazing street food around them — from famous local favorites to hidden gems that deserve attention."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONCEPT_CARDS.map((card, i) => (
            <Reveal
              as="li"
              key={card.title}
              delay={i * 70}
              className="group rounded-3xl border border-border bg-background p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand/10 transition-colors group-hover:bg-brand">
                <card.icon className="size-5 text-brand transition-colors group-hover:text-brand-foreground" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={350}
            className="flex flex-col justify-center rounded-3xl bg-ink p-6 text-background"
          >
            <p className="font-display text-2xl leading-snug font-extrabold">
              Discover something delicious that you didn't know existed.
            </p>
            <span className="mt-4 text-sm text-background/70">Kreving — Find • Eat • Share</span>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  { no: "01", title: "Discover", text: "Find street food spots around you.", icon: Compass },
  { no: "02", title: "Explore", text: "See dishes, photos, ratings and food experiences.", icon: Camera },
  { no: "03", title: "Taste", text: "Visit the place and experience the food.", icon: Utensils },
  { no: "04", title: "Share", text: "Share your discovery with the Kreving community.", icon: Share2 },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="How it works" title="Four steps to your next favourite bite." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.no}
              delay={i * 80}
              className="relative rounded-3xl border border-border bg-background p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="font-display text-4xl font-extrabold text-mustard">{step.no}</span>
              <step.icon className="absolute top-6 right-6 size-5 text-brand" aria-hidden />
              <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const DISHES = [
  { name: "Spicy Chicken 65", area: "Old Market Lane", tag: "Trending", rating: "4.7", img: chicken65 },
  { name: "Crispy Dosa", area: "Corner Tiffin Street", tag: "Local favorite", rating: "4.8", img: dosa },
  { name: "Street-Style Momos", area: "Night Bazaar", tag: "Hidden gem", rating: "4.6", img: momos },
  { name: "Loaded Shawarma", area: "Riverside Walk", tag: "Trending", rating: "4.5", img: shawarma },
  { name: "Punugulu", area: "Lake View Cart", tag: "Hidden gem", rating: "4.9", img: punugulu },
  { name: "Mirchi Bajji", area: "Evening Bazaar", tag: "Local favorite", rating: "4.6", img: mirchi },
];

export function FoodDiscovery() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Food discovery"
          title="From famous bites to hidden gems."
          description="A glimpse of how food discovery will feel on Kreving. The dishes and places below are sample content created for this preview."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish, i) => (
            <Reveal
              as="li"
              key={dish.name}
              delay={(i % 3) * 80}
              className="group overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.img}
                  alt={`${dish.name} — sample street food photo`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-background/95 px-3 py-1 text-[0.7rem] font-bold tracking-wide text-ink uppercase">
                  {dish.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-ink">{dish.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="size-3.5 shrink-0 text-brand" aria-hidden />
                    <span className="truncate">{dish.area}</span>
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-mustard/20 px-2.5 py-1 text-xs font-bold text-ink">
                  ★ {dish.rating}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Sample content for illustration only — not real listings or registered vendors.
        </p>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Gem, title: "Discover Hidden Gems", text: "Find local food spots that don't always appear on traditional food platforms." },
  { icon: Camera, title: "Real Food Experiences", text: "Explore food through photos, reviews and community discoveries." },
  { icon: TrendingUp, title: "Explore What's Trending", text: "See what people around you are craving right now." },
  { icon: Store, title: "Support Local Vendors", text: "Help amazing local street-food businesses get discovered." },
];

export function WhyKreving() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why Kreving" title="Discovery first. Always." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {WHY.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 80}
              className="flex gap-4 rounded-3xl border border-border bg-background p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mustard/20">
                <item.icon className="size-5 text-ink" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const FOODIE_POINTS = [
  { icon: Compass, label: "Discover new food" },
  { icon: Bookmark, label: "Save places you want to try" },
  { icon: MapPin, label: "Explore nearby street food" },
  { icon: Share2, label: "Share your discoveries" },
  { icon: TrendingUp, label: "Follow food trends" },
  { icon: Heart, label: "Build your food journey" },
];

export function ForFoodies() {
  return (
    <section id="for-foodies" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="For food lovers"
            title="For people who live for their next bite."
            description="Kreving turns everyday cravings into a map of places worth going out of your way for."
          />
          <Reveal delay={120}>
            <a
              href="#early-access"
              className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-soft transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              Join the Foodie Waitlist
            </a>
          </Reveal>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {FOODIE_POINTS.map((point, i) => (
            <Reveal
              as="li"
              key={point.label}
              delay={i * 60}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-4 shadow-soft"
            >
              <point.icon className="size-5 shrink-0 text-brand" aria-hidden />
              <span className="min-w-0 text-sm font-semibold text-ink">{point.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const VENDOR_POINTS = [
  "Create your food profile",
  "Showcase your signature dishes",
  "Reach nearby food lovers",
  "Build your local presence",
  "Get discovered through community activity",
];

export function ForVendors() {
  return (
    <section id="for-vendors" className="bg-ink py-20 text-background sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.2em] text-mustard uppercase">
            For street-food vendors
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Your food deserves to be discovered.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-background/70">
            Kreving helps street-food vendors get discovered by people looking for their next great
            food experience.
          </p>
          <a
            href="#vendor-access"
            className="mt-8 inline-flex rounded-full bg-mustard px-7 py-3.5 text-base font-semibold text-mustard-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-95"
          >
            I'm a Food Vendor
          </a>
          <p className="mt-4 text-sm text-background/60">
            Become one of the first vendors on Kreving.
          </p>
        </Reveal>
        <ul className="grid gap-3">
          {VENDOR_POINTS.map((point, i) => (
            <Reveal
              as="li"
              key={point}
              delay={i * 70}
              className="flex items-center gap-4 rounded-2xl border border-background/10 bg-background/5 px-5 py-4"
            >
              <span className="font-display text-sm font-extrabold text-mustard">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-background/90">{point}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Community"
            title="Food tastes better when it's discovered together."
            description="A conceptual look at the Kreving feed — where every plate you loved becomes someone else's discovery."
          />
          <Reveal delay={100}>
            <ul className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-ink">
              {["Photos", "Reviews", "Food trails", "Local voices"].map((tag) => (
                <li key={tag} className="rounded-full bg-secondary px-4 py-2">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="mx-auto w-full max-w-sm">
          <figure className="overflow-hidden rounded-3xl border border-border bg-background shadow-lift">
            <figcaption className="flex items-center gap-3 border-b border-border px-4 py-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 font-display text-sm font-extrabold text-brand">
                AR
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-ink">Sample Foodie</span>
                <span className="block truncate text-xs text-muted-foreground">
                  Night Bazaar • concept post
                </span>
              </span>
            </figcaption>
            <img
              src={momos}
              alt="Concept feed post showing a plate of street-style momos"
              loading="lazy"
              width={768}
              height={768}
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-bold text-ink">Street-Style Momos</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-brand" aria-hidden /> Night Bazaar
              </p>
              <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Heart className="size-4 text-brand" aria-hidden /> 128
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="size-4" aria-hidden /> 24
                </span>
                <span className="ml-auto flex items-center gap-1.5">
                  <Users className="size-4" aria-hidden /> Concept
                </span>
              </div>
            </div>
          </figure>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Visual concept of the future Kreving app — not a live post.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function AppComingSoon() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Mobile app"
          title="Kreving is coming to your pocket."
          description="Discovery, saved spots and your food journey — designed mobile-first from day one."
        />
        <Reveal delay={100} className="mt-12 flex flex-wrap items-end justify-center gap-6">
          {[
            { label: "Discover nearby", accent: "bg-brand" },
            { label: "Your food journey", accent: "bg-mustard" },
          ].map((screen, i) => (
            <div
              key={screen.label}
              className={`w-44 rounded-[2rem] border-8 border-ink bg-background p-3 shadow-lift sm:w-52 ${i === 1 ? "mb-6" : ""}`}
            >
              <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-ink/20" />
              <div className={`h-24 rounded-2xl ${screen.accent}/15`} />
              <div className="mt-3 space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-secondary" />
                <div className="h-3 w-1/2 rounded-full bg-secondary" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-12 rounded-xl bg-secondary" />
                <div className="h-12 rounded-xl bg-secondary" />
              </div>
              <p className="mt-4 text-center text-[0.7rem] font-semibold text-muted-foreground">
                {screen.label}
              </p>
            </div>
          ))}
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-ink">
            Android — Coming Soon
          </span>
          <span className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-ink">
            iOS — Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}