import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function QuoteCta() {
  return (
    <section className="bg-primary">
      <div className="container-site flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-primary-foreground md:text-3xl">Have a sourcing requirement?</h2>
          <p className="mt-2 text-primary-foreground/90">Share the product, specification and destination — our team will respond with a quotation.</p>
        </div>
        <Button asChild variant="charcoal" size="xl">
          <Link to="/quote">
            Request a Quote <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
