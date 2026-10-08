import { productGroups } from "@/data/products";

const produce = productGroups
  .filter((group) => group.id === "fruits" || group.id === "vegetables")
  .flatMap((group) => group.items ?? []);

export function ProduceTicker() {
  // Rendered twice so the -50% translate loops seamlessly.
  const row = [...produce, ...produce];

  return (
    <div className="overflow-hidden border-y border-forest-darker bg-lime py-3 text-forest-darker" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {row.map((name, i) => (
          <span key={i} className="flex items-center font-condensed text-2xl sm:text-3xl">
            <span className="px-5">{name}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0">
              <path d="M7 0l1.6 5.4L14 7l-5.4 1.6L7 14l-1.6-5.4L0 7l5.4-1.6z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
