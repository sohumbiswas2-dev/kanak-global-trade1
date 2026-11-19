import { describe, expect, it } from "vitest";

import { categories, company, divisions, organizationJsonLd } from "@/lib/site";

describe("Company content rules", () => {
  it("shows 2013 as the established year", () => {
    expect(company.established).toBe(2013);
  });

  it("sends enquiries to admin@kanak-industries.com", () => {
    expect(company.email).toBe("admin@kanak-industries.com");
  });

  it("keeps the mobile number first and correct", () => {
    expect(company.phone).toBe("+971 52 559 8069");
    expect(company.phoneHref).toBe("tel:+971525598069");
  });

  it("adds the office landline as a second clickable number", () => {
    expect(company.phone2).toBe("+971 4 558 2958");
    expect(company.phone2Href).toBe("tel:+97145582958");
  });

  it("keeps WhatsApp on the mobile number only", () => {
    expect(company.whatsappHref).toBe("https://wa.me/971525598069");
    expect(company.whatsappHref).not.toContain("97145582958");
  });

  it("lists both numbers under telephone in the JSON-LD", () => {
    expect(organizationJsonLd.telephone).toEqual(["+971 52 559 8069", "+971 4 558 2958"]);
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
