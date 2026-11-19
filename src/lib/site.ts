import steel from "@/assets/cat-steel.jpg";
import coffee from "@/assets/cat-coffee.jpg";
import refractory from "@/assets/cat-refractory.jpg";
import alloys from "@/assets/cat-alloys.jpg";
import plant from "@/assets/cat-plant.jpg";
import pumps from "@/assets/cat-pumps.jpg";
import electrical from "@/assets/cat-electrical.jpg";

export const company = {
  name: "Kanak Industries FZCO",
  shortName: "Kanak Industries",
  established: 2013,
  addressLines: ["HDS Tower, Cluster F", "Al Thanyah Fifth, Jumeirah Lakes Towers", "Dubai, United Arab Emirates"],
  // Recipient for all enquiries: the Request a Quote form and every email link on the site use this address.
  email: "admin@kanak-industries.com",
  // Listing order everywhere phone details appear: mobile first, then the office landline.
  phone: "+971 52 559 8069",
  phoneHref: "tel:+971525598069",
  phone2: "+971 4 558 2958",
  phone2Href: "tel:+97145582958",
  // WhatsApp is on the mobile number only: the landline gets no WhatsApp link.
  whatsappHref: "https://wa.me/971525598069",
};

export type Category = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  alt: string;
};

// Order matters: Coffee must always be the last category.
export const categories: Category[] = [
  {
    slug: "steel",
    name: "Steel & Basic Steel Products",
    summary: "Structural sections, coils, plates, bars and rebar for construction and fabrication.",
    image: steel,
    alt: "Steel coils, plates and structural sections",
  },
  {
    slug: "refractory",
    name: "Refractory Materials",
    summary: "Fire bricks, castables and linings for furnaces, kilns and high-heat processes.",
    image: refractory,
    alt: "Refractory fire bricks for furnaces and kilns",
  },
  {
    slug: "alloys",
    name: "Metal Alloys",
    summary:
      "Ferroalloys (Ferro-silicon, Silicon Manganese and Ferro-manganese), Ferrous & non-ferrous billets & ingots and alloying materials for metallurgy.",
    image: alloys,
    alt: "Silver and bronze metal alloy ingots",
  },
  {
    slug: "plant-equipment",
    name: "Industrial Plant Machinery Equipment & Spare Parts",
    summary: "Machinery, gears, bearings and replacement parts for industrial plants.",
    image: plant,
    alt: "Industrial plant machinery, gears and spare parts",
  },
  {
    slug: "pumps-valves",
    name: "Pumps, Engines, Valves & Spares",
    summary: "Fluid-control equipment, engines and their spare parts.",
    image: pumps,
    alt: "Industrial pumps, valves and pipework",
  },
  {
    slug: "electrical",
    name: "Electrical Fittings",
    summary: "Cable glands, enclosures, breakers, trays and electrical accessories.",
    image: electrical,
    alt: "Electrical fittings, cable glands and breakers",
  },
  {
    slug: "coffee",
    name: "Coffee",
    summary: "Green coffee sourcing for roasters, processors and distributors.",
    image: coffee,
    alt: "Green coffee beans",
  },
];

// Order matters: Coffee is its own division and always shown last.
export const divisions = [
  {
    title: "Steel & Metallurgical Materials",
    body: "Steel products, refractory materials and metal alloys for construction, foundries and heavy industry.",
    items: ["Steel & basic steel products", "Refractory materials", "Metal alloys"],
    image: steel,
  },
  {
    title: "Industrial Plant Machinery Equipment & Spare Parts",
    body: "Sourcing of plant machinery and the spare parts that keep operations running.",
    items: ["Plant machinery & equipment", "Mechanical spares", "Replacement components"],
    image: plant,
  },
  {
    title: "Fluid-Control & Electrical Products",
    body: "Pumps, engines and valves with their spare parts, and electrical fittings for trade buyers.",
    items: ["Pumps, engines & valves", "Valve & pump spares", "Electrical fittings"],
    image: pumps,
  },
  {
    title: "Coffee",
    body: "Green Arabica and Robusta coffee for B2B buyers, including roasters, processors and distributors.",
    items: ["Green Arabica coffee", "Green Robusta coffee", "Bulk supply for trade buyers"],
    image: coffee,
  },
];

export const markets = [
  { name: "Africa", note: "East, West & Southern Africa" },
  { name: "Middle East", note: "GCC & wider region" },
  { name: "Europe", note: "Industrial & trade buyers" },
  { name: "Asia", note: "South & Southeast Asia" },
];

// Structured data for search engines: both numbers listed under "telephone", mobile first.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.name,
  foundingDate: String(company.established),
  email: company.email,
  telephone: [company.phone, company.phone2],
  address: {
    "@type": "PostalAddress",
    streetAddress: "HDS Tower, Cluster F, Al Thanyah Fifth",
    addressLocality: "Jumeirah Lakes Towers",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  areaServed: markets.map((m) => m.name),
};
