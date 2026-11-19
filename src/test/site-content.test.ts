import { describe, expect, it } from "vitest";

import { categories, company, divisions } from "@/lib/site";

describe("Company content rules", () => {
  it("shows 2013 as the established year", () => {
    expect(company.established).toBe(2013);
  });

  it("sends enquiries to admin@kanak-industries.com", () => {
    expect(company.email).toBe("admin@kanak-industries.com");
  });

  it("uses +971 52 559 8069 for phone and WhatsApp links", () => {
    expect(company.phoneHref).toBe("tel:+971525598069");
    expect(company.whatsappHref).toBe("https://wa.me/971525598069");
  });

  it("lists product categories in the agreed order with Coffee last", () => {
    expect(categories.map((c) => c.slug)).toEqual([
      "steel",
      "refractory",
      "alloys",
      "plant-equipment",
      "pumps-valves",
      "electrical",
      "coffee",
    ]);
  });

  it("has four divisions with Coffee as its own last division", () => {
    expect(divisions.map((d) => d.title)).toEqual([
      "Steel & Metallurgical Materials",
      "Industrial Plant Machinery Equipment & Spare Parts",
      "Fluid-Control & Electrical Products",
      "Coffee",
    ]);
  });
});
