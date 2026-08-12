import { Facebook, Instagram, Youtube } from "lucide-react";

import { Logo } from "./Logo";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:hello@kreving.com" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Vendor Registration", href: "#vendor-access" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <Logo />
            <p className="mt-3 font-display text-lg font-bold text-ink">Discover. Taste. Kreve.</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              A street-food discovery platform, launching soon.
            </p>
          </div>
          <nav aria-label="Footer" className="sm:justify-self-end">
            <ul className="grid gap-2.5">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 Kreving. All rights reserved.</p>
          <ul className="flex gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-border text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}