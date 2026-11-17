import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { QuoteCta } from "@/components/site/QuoteCta";
import { company, divisions, markets } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kanak Industries FZCO — Dubai Trading Company Since 2012" },
      {
        name: "description",
        content: "Kanak Industries FZCO is a B2B international trading company in Jumeirah Lakes Towers, Dubai, established 2012.",
      },
      { property: "og:title", content: "About Kanak Industries FZCO" },
      { property: "og:description", content: "A Dubai-based B2B trading company serving Africa, the Middle East, Europe and Asia since 2012." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro eyebrow="About us" title="Trading and industrial supply from Dubai since 2012">
        {company.name} connects business buyers with sourcing and supply opportunities across global markets.
      </PageIntro>
      <section className="container-site grid gap-12 py-20 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Founded in {company.established} and headquartered in Jumeirah Lakes Towers, Dubai, we operate as a
            B2B trading company focused on industrial materials, equipment and selected commodities.
          </p>
          <p>
            Our role is to understand each buyer's requirement, source from suitable suppliers and coordinate
            the order — with every enquiry handled on a quotation basis.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-charcoal">Our divisions</h2>
          {divisions.map((d) => (
            <div key={d.title} className="border-l-4 border-primary pl-5">
              <h3 className="text-lg font-bold text-charcoal">{d.title}</h3>
              <p className="mt-1 text-muted-foreground">{d.body}</p>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">
            Markets served: {markets.map((m) => m.name).join(", ")}.
          </p>
        </div>
      </section>
      <QuoteCta />
    </>
  );
}
