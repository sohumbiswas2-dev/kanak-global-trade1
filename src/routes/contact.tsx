import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageIntro } from "@/components/site/PageIntro";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kanak Industries FZCO — JLT, Dubai" },
      {
        name: "description",
        content: `Contact Kanak Industries FZCO at HDS Tower, Cluster F, JLT, Dubai. Email ${company.email}, call ${company.phone} or ${company.phone2}.`,
      },
      { property: "og:title", content: "Contact Kanak Industries FZCO" },
      { property: "og:description", content: "Reach our Dubai trading office by email, phone or visit us in Jumeirah Lakes Towers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { icon: MapPin, label: "Office", content: company.addressLines.join(", "), href: undefined },
    { icon: Mail, label: "Email", content: company.email, href: `mailto:${company.email}` },
  ];
  return (
    <>
      <PageIntro eyebrow="Contact" title="Get in touch with our Dubai office">
        For product enquiries, please include the specification, quantity and destination.
      </PageIntro>
      <section className="container-site grid gap-6 py-20 md:grid-cols-3">
        {cards.map(({ icon: Icon, label, content, href }) => (
          <div key={label} className="rounded-lg border border-border bg-card p-8 shadow-card">
            <Icon className="h-6 w-6 text-primary" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
            {href ? (
              <a href={href} className="mt-2 block break-all text-lg font-semibold text-charcoal hover:text-primary">
                {content}
              </a>
            ) : (
              <p className="mt-2 text-lg font-semibold text-charcoal">{content}</p>
            )}
          </div>
        ))}
        <div className="rounded-lg border border-border bg-card p-8 shadow-card">
          <Phone className="h-6 w-6 text-primary" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Phone</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 text-lg font-semibold text-charcoal">
            <a href={company.phoneHref} className="hover:text-primary">
              {company.phone}
            </a>
            <span aria-hidden="true" className="text-muted-foreground/40">|</span>
            <a href={company.phone2Href} className="hover:text-primary">
              {company.phone2}
            </a>
          </div>
        </div>
      </section>
      <section className="container-site pb-20">
        <div className="flex flex-col items-start gap-4 rounded-lg bg-muted p-8 md:flex-row md:items-center md:justify-between">
          <p className="text-lg text-foreground">Ready with a requirement? Send us a structured enquiry.</p>
          <Button asChild variant="quote" size="xl">
            <Link to="/quote">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
