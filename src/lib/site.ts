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
  established: 2012,
  addressLines: ["HDS Tower, Cluster F", "Al Thanyah Fifth, Jumeirah Lakes Towers", "Dubai, United Arab Emirates"],
  email: "frontdesk@kanak-industries.com",
  phone: "+971 56 645 9911",
  phoneHref: "tel:+971566459911",
};

export type Category = {
  slug: string;
  name: string;
  summary: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "steel",
    name: "Steel & Basic Steel Products",
    summary: "Structural sections, coils, plates, bars and rebar for construction and fabrication.",
    image: steel,
  },
  {
    slug: "coffee",
    name: "Coffee",
    summary: "Green coffee sourcing for roasters, processors and distributors.",
    image: coffee,
  },
  {
    slug: "refractory",
    name: "Refractory Materials",
    summary: "Fire bricks, castables and linings for furnaces, kilns and high-heat processes.",
    image: refractory,
  },
  {
    slug: "alloys",
    name: "Metal Alloys",
    summary: "Ferroalloys, non-ferrous ingots and alloying materials for metallurgy.",
    image: alloys,
  },
  {
    slug: "plant-equipment",
    name: "Industrial Plant Equipment & Spares",
    summary: "Machinery, gears, bearings and replacement parts for industrial plants.",
    image: plant,
  },
  {
    slug: "pumps-valves",
    name: "Pumps, Engines, Valves & Spares",
    summary: "Fluid-control equipment, engines and their spare parts.",
    image: pumps,
  },
  {
    slug: "electrical",
    name: "Electrical Fittings",
    summary: "Cable glands, enclosures, breakers, trays and electrical accessories.",
    image: electrical,
  },
];

export const divisions = [
  {
    title: "Steel & Metallurgical Materials",
    body: "Steel products, refractory materials and metal alloys for construction, foundries and heavy industry.",
    items: ["Steel & basic steel products", "Refractory materials", "Metal alloys"],
    image: steel,
  },
  {
    title: "Industrial Plant Equipment & Spare Parts",
    body: "Sourcing of plant machinery and the spare parts that keep operations running.",
    items: ["Plant equipment", "Mechanical spares", "Replacement components"],
    image: plant,
  },
  {
    title: "Fluid-Control, Electrical & Coffee",
    body: "Pumps, engines and valves, electrical fittings, and green coffee for trade buyers.",
    items: ["Pumps, engines & valves", "Electrical fittings", "Coffee"],
    image: pumps,
  },
];

export const markets = [
  { name: "Africa", note: "East, West & Southern Africa" },
  { name: "Middle East", note: "GCC & wider region" },
  { name: "Europe", note: "Industrial & trade buyers" },
  { name: "Asia", note: "South & Southeast Asia" },
];
