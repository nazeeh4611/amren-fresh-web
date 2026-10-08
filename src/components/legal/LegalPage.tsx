import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-warm-white py-20 lg:py-28">
      <Container className="max-w-3xl">
        <Link href="/#top" className="text-sm font-medium text-forest hover:underline">
          ← Back to AMREN Fresh
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

        <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-ink [&_h2]:mt-8 [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-ink [&_p]:text-muted [&_li]:text-muted [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
          {children}
        </div>
      </Container>
    </main>
  );
}
