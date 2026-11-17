import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { categories, company } from "@/lib/site";

const navLink =
  "px-3 py-2 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-primary";
const navActive = { className: "text-primary" };

function SiteLogo() {
  return (
    <Link to="/" className="flex items-center" aria-label={`${company.name} home`}>
      <img
        src="/kanak-industries-logo.png"
        alt={company.name}
        width={64}
        height={64}
        className="h-16 w-16 object-contain"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const onProducts = useLocation({ select: (l) => l.pathname.startsWith("/products") });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-charcoal text-charcoal-muted md:block">
        <div className="container-site flex h-9 items-center justify-end gap-6 text-xs">
          <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-charcoal-foreground">
            <Mail className="h-3.5 w-3.5" /> {company.email}
          </a>
          <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-charcoal-foreground">
            <Phone className="h-3.5 w-3.5" /> {company.phone}
          </a>
        </div>
      </div>

      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <SiteLogo />

        <nav className="hidden items-center lg:flex" aria-label="Main">
          <Link to="/" className={navLink} activeProps={navActive} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/about" className={navLink} activeProps={navActive}>
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`${navLink} flex items-center gap-1 outline-none ${onProducts ? "text-primary" : ""}`}
            >
              Products <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72 p-2">
              {categories.map((c) => (
                <DropdownMenuItem key={c.slug} asChild className="cursor-pointer py-2 text-sm">
                  <Link to="/products" hash={c.slug}>
                    {c.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer py-2 text-sm font-semibold text-primary">
                <Link to="/products">View all products</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/industries" className={navLink} activeProps={navActive}>
            Industries
          </Link>
          <Button asChild variant="quote" className="mx-2">
            <Link to="/quote">Request a Quote</Link>
          </Button>
          <Link to="/contact" className={navLink} activeProps={navActive}>
            Contact
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden [&_svg]:size-6" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
            <SheetTitle className="font-display text-lg">Menu</SheetTitle>
            <nav className="mt-6 flex flex-col text-base" aria-label="Mobile">
              <Link to="/" onClick={close} className="border-b border-border py-3 font-medium">
                Home
              </Link>
              <Link to="/about" onClick={close} className="border-b border-border py-3 font-medium">
                About
              </Link>
              <div className="border-b border-border py-3">
                <Link to="/products" onClick={close} className="font-medium">
                  Products
                </Link>
                <ul className="mt-2 space-y-1 pl-3">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/products"
                        hash={c.slug}
                        onClick={close}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/industries" onClick={close} className="border-b border-border py-3 font-medium">
                Industries
              </Link>
              <Link to="/contact" onClick={close} className="border-b border-border py-3 font-medium">
                Contact
              </Link>
              <Button asChild variant="quote" size="xl" className="mt-6">
                <Link to="/quote" onClick={close}>
                  Request a Quote
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
