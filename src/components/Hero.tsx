import { ProductPreview } from "./ProductPreview";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { IconCheck } from "./icons";

const highlights = [
  "Admissions to alumni in one system",
  "Role-based access for every stakeholder",
  "Built for CBSE, ICSE, state & university boards",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-16 pb-20 lg:pt-20 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#eef2ff,transparent)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm">
            <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
              New
            </span>
            <span className="text-slate-700">Parent portal 2.0 — now with fee plans &amp; messaging</span>
          </div> */}
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            The operating system for modern campuses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Orbitiy connects admissions, academics, finance, and communication
            in one secure platform — so your team runs the institution, not
            spreadsheets.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact" size="lg">
              Contact us
            </Button>
            <Button href="#platform" variant="secondary" size="lg">
              See the platform
            </Button>
          </div>
          <ul className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <IconCheck className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ProductPreview />
      </Container>
    </section>
  );
}
