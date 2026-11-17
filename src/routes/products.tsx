import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/site/PageIntro";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Steel, Alloys, Industrial Equipment & Coffee | Kanak Industries" },
      {
        name: "description",
        content: "Product categories sourced by Kanak Industries FZCO: steel, refractory materials, metal alloys, plant equipment, pumps and valves, electrical fittings and coffee.",
      },
      { property: "og:title", content: "Products | Kanak Industries FZCO" },
      { property: "og:description", content: "Seven product categories available on a quotation basis from our Dubai trading office." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Product categories">
        All products are supplied on a quotation basis. Share your specification and quantity to receive an offer.
      </PageIntro>
      <section className="container-site space-y-16 py-20">
        {categories.map((c, i) => (
          <article
            key={c.slug}
            id={c.slug}
            className="grid scroll-mt-32 items-center gap-8 md:grid-cols-2 md:gap-12"
          >
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              width={1024}
              height={768}
              className={`aspect-[4/3] w-full rounded-lg object-cover shadow-card ${i % 2 ? "md:order-2" : ""}`}
            />
            <div>
              <p className="eyebrow">Category {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-2xl font-extrabold text-charcoal md:text-3xl">{c.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.summary}</p>
              <Button asChild variant="quote" size="lg" className="mt-6">
                <Link to="/quote" search={{ category: c.slug }}>
                  Request a Quote <ArrowRight />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
      <QuoteCta />
    </>
  );
}
