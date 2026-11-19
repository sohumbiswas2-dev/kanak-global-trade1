import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { PageIntro } from "@/components/site/PageIntro";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categories, company } from "@/lib/site";

type QuoteSearch = { category?: string };

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): QuoteSearch => {
    const value = search["category"];
    return typeof value === "string" && categories.some((c) => c.slug === value) ? { category: value } : {};
  },
  head: () => ({
    meta: [
      { title: "Request a Quote | Kanak Industries FZCO" },
      {
        name: "description",
        content: "Send a quotation enquiry to Kanak Industries FZCO for steel, refractory materials, metal alloys, industrial machinery, pumps and valves, electrical fittings or coffee.",
      },
      { property: "og:title", content: "Request a Quote | Kanak Industries FZCO" },
      { property: "og:description", content: "Tell us your product, specification, quantity and destination to receive a quotation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quote,
});

function Quote() {
  const { category } = Route.useSearch();
  const [selected, setSelected] = useState(category ?? "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const catName = categories.find((c) => c.slug === selected)?.name ?? "General enquiry";
    const lines = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Country: ${data.get("country")}`,
      `Category: ${catName}`,
      `Quantity: ${data.get("quantity")}`,
      "",
      `Requirement:`,
      `${data.get("message")}`,
    ];
    const subject = `Quotation enquiry — ${catName}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <>
      <PageIntro eyebrow="Request a Quote" title="Tell us what you need">
        Fill in your requirement and we'll open an email to our team, ready to send. We reply with availability and a
        quotation.
      </PageIntro>
      <section className="container-site py-16 md:py-20">
        <form onSubmit={handleSubmit} className="mx-auto grid max-w-3xl gap-6 rounded-lg border border-border bg-card p-6 shadow-card md:grid-cols-2 md:p-10">
          <Field id="name" label="Full name" required />
          <Field id="company" label="Company" required />
          <Field id="email" label="Email" type="email" required />
          <Field id="phone" label="Phone" type="tel" />
          <Field id="country" label="Country / destination" required />
          <div className="space-y-2">
            <Label htmlFor="category">Product category</Label>
            <select
              id="category"
              name="category"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <Field id="quantity" label="Approximate quantity" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message">Requirement & specification</Label>
            <Textarea id="message" name="message" rows={6} required placeholder="Grade, size, standard, packaging, delivery terms…" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" variant="quote" size="xl" className="w-full md:w-auto">
              Send enquiry
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Or email us directly at{" "}
              <a href={`mailto:${company.email}`} className="font-medium text-primary hover:underline">
                {company.email}
              </a>
              .
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </Label>
      <Input id={id} name={id} type={type} required={required} className="h-11 text-base" />
    </div>
  );
}
