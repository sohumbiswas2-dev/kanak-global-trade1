import { createFileRoute } from "@tanstack/react-router";
import { Building2, Coffee, Droplets, Flame, Hammer, Zap } from "lucide-react";

import { PageIntro } from "@/components/site/PageIntro";
import { QuoteCta } from "@/components/site/QuoteCta";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served | Kanak Industries FZCO" },
      {
        name: "description",
        content: "Kanak Industries supports buyers in construction, steel and foundry, process plants, water and fluid handling, power and electrical, and food and beverage.",
      },
      { property: "og:title", content: "Industries Served | Kanak Industries FZCO" },
      { property: "og:description", content: "Sourcing and supply for construction, metallurgy, process industries, power and coffee trade buyers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Industries,
});

const industries = [
  { icon: Building2, name: "Construction & Infrastructure", body: "Steel sections, rebar and structural materials for projects and fabricators." },
  { icon: Flame, name: "Steel, Foundry & Metallurgy", body: "Refractory materials and metal alloys for furnaces, kilns and melt shops." },
  { icon: Hammer, name: "Manufacturing & Process Plants", body: "Plant equipment and spare parts to support maintenance and upgrades." },
  { icon: Droplets, name: "Water, Oil & Fluid Handling", body: "Pumps, engines and valves with their spare parts." },
  { icon: Zap, name: "Power & Electrical", body: "Electrical fittings and accessories for installations and contractors." },
  { icon: Coffee, name: "Food & Beverage Trade", body: "Green coffee for roasters, processors and distributors." },
];

function Industries() {
  return (
    <>
      <PageIntro eyebrow="Industries" title="Industries we serve">
        We work with business buyers across sectors where reliable sourcing of materials and equipment matters.
      </PageIntro>
      <section className="container-site grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ icon: Icon, name, body }) => (
          <article key={name} className="rounded-lg border border-border bg-card p-8 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-charcoal">{name}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </section>
      <QuoteCta />
    </>
  );
}
