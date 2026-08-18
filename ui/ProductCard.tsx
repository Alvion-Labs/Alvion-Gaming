import Image from "next/image";
import type { ProductData } from "@/data/merchandise";
import { Button } from "@/ui/Button";

export function ProductCard({ product }: { product: ProductData }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60">
      <div className="relative h-56 bg-zinc-950">
        <Image
          src={product.image}
          alt={`${product.name} product preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        <p className="text-red-300">{product.price}</p>
        <Button href="#" variant="secondary" className="w-full">
          View Product
        </Button>
      </div>
    </article>
  );
}
