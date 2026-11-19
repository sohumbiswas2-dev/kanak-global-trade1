import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { categories, company } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-deep text-charcoal-muted">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-lg font-extrabold text-charcoal-foreground">KANAK INDUSTRIES FZCO</p>
          <p className="mt-3 text-sm leading-relaxed">
            International trading and industrial supply, based in Dubai since {company.established}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <address className="not-italic leading-relaxed">
                {company.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-3 break-all hover:text-charcoal-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="flex flex-wrap items-center gap-x-2">
                <a href={company.phoneHref} className="hover:text-charcoal-foreground">
                  {company.phone}
                </a>
                <span aria-hidden="true" className="text-charcoal-foreground/30">|</span>
                <a href={company.phone2Href} className="hover:text-charcoal-foreground">
                  {company.phone2}
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-foreground">Products</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/products" hash={c.slug} className="hover:text-charcoal-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-charcoal-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-charcoal-foreground">About</Link></li>
            <li><Link to="/industries" className="hover:text-charcoal-foreground">Industries</Link></li>
            <li><Link to="/quote" className="hover:text-charcoal-foreground">Request a Quote</Link></li>
            <li><Link to="/contact" className="hover:text-charcoal-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Product information is indicative. Availability and specifications confirmed on quotation.</p>
        </div>
      </div>
    </footer>
  );
}
