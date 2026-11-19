import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Factory, Globe2, Gauge, ShieldCheck, Ship } from "lucide-react";

import heroImage from "@/assets/hero-port.jpg";
import { Button } from "@/components/ui/button";
import { categories, company, divisions, markets } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanak Industries FZCO — International Trading & Industrial Supply, Dubai" },
      {
        name: "description",
        content:
          "Dubai-based trading company since 2013: steel, refractory materials, metal alloys, industrial machinery, pumps and valves, electrical fittings and coffee for buyers across Africa, the Middle East, Europe and Asia.",
      },
      { property: "og:title", content: "Kanak Industries FZCO — International Trading & Industrial Supply" },
      {
        property: "og:description",
        content:
          "Steel, metallurgical materials, industrial equipment and coffee — sourcing and supply for business buyers across global markets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const divisionIcons = [Factory, Gauge, ShieldCheck, Coffee];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal">
        <img
          src={heroImage}
          alt="Steel coils and containers at an international cargo port"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site py-24 md:py-36">
          <p className="eyebrow">Dubai · Since {company.established}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] text-charcoal-foreground sm:text-5xl md:text-6xl">
            International Trading &amp; Industrial Supply Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-foreground/85 md:text-xl">
            Steel, metallurgical materials, industrial equipment and coffee — connecting business buyers
            with sourcing and supply opportunities across global markets.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="quote" size="xl">
              <Link to="/quote">
                Request a Quote <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">About the company</p>
          <h2 className="mt-3 text-3xl font-extrabold text-charcoal md:text-4xl">
            A Dubai trading partner for industrial and commodity buyers
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-7">
          <p>
            Established in {company.established} and based in Jumeirah Lakes Towers, Dubai,{" "}
            <span className="font-semibold text-foreground">{company.name}</span> is a B2B international
            trading company. We help business buyers source steel, metallurgical materials, industrial
            equipment, spare parts and coffee.
          </p>
          <p>
            From our base in the UAE, we serve customers across Africa, the Middle East, Europe and Asia —
            handling enquiries, coordinating suppliers and supporting each order through to delivery.
          </p>
          <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-muted-foreground">Established</dt>
              <dd className="font-display text-3xl font-extrabold text-charcoal">{company.established}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Headquarters</dt>
              <dd className="font-display text-3xl font-extrabold text-charcoal">Dubai</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Regions served</dt>
              <dd className="font-display text-3xl font-extrabold text-charcoal">4</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-site">
          <p className="eyebrow">Business divisions</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-charcoal md:text-4xl">
            Our focused divisions
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {divisions.map((d, i) => {
              const Icon = divisionIcons[i] ?? Factory;
              return (
                <article
                  key={d.title}
                  className="group relative isolate flex flex-col overflow-hidden rounded-lg border border-border bg-charcoal p-8 shadow-card"
                >
                  <img
                    src={d.image}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-charcoal/60" />
                  <div className="absolute inset-0 -z-10 bg-card-overlay" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-background/90 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-bold text-charcoal-foreground/75">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-charcoal-foreground">{d.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal-foreground/85">{d.body}</p>
                  <ul className="mt-6 space-y-2 border-t border-charcoal-foreground/20 pt-5 text-sm">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-charcoal-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Featured categories</p>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal md:text-4xl">What we source and supply</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            All products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article
              key={c.slug}
              className={`group relative isolate flex min-h-80 flex-col justify-end overflow-hidden rounded-lg bg-charcoal shadow-card ${
                i === 0 ? "sm:col-span-2 sm:min-h-96" : i === categories.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={c.image}
                alt={c.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-card-overlay" />
              <div className="p-6 md:p-7">
                <h3 className={`font-bold text-charcoal-foreground ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-foreground/80">{c.summary}</p>
                <Link
                  to="/quote"
                  search={{ category: c.slug }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-charcoal-foreground"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Markets */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container-site">
          <div className="flex items-center gap-3">
            <Globe2 className="h-5 w-5 text-primary" />
            <p className="eyebrow">Markets served</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-charcoal-foreground/10 md:grid-cols-4">
            {markets.map((m) => (
              <div key={m.name} className="bg-charcoal p-6 md:p-8">
                <p className="font-display text-2xl font-extrabold text-charcoal-foreground md:text-3xl">{m.name}</p>
                <p className="mt-2 text-sm text-charcoal-muted">{m.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-charcoal-foreground/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-3 text-charcoal-foreground">
              <Ship className="h-5 w-5 text-primary" />
              Tell us your product, specification and destination port.
            </p>
            <Button asChild variant="quote" size="xl">
              <Link to="/quote">
                Request a Quote <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
