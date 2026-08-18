import { MERCHANDISE } from "@/data/merchandise";
import { Button } from "@/ui/Button";
import { ProductCard } from "@/ui/ProductCard";
import { SectionHeading } from "@/ui/SectionHeading";

export function Merchandise() {
  return (
    <section id="merchandise" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading title="ALVION MERCH" subtitle="Wear the name. Represent the vision." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {MERCHANDISE.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href="#" variant="secondary">
          Shop All
        </Button>
      </div>
    </section>
  );
}
