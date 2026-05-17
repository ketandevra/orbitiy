import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { IconCheck } from "./icons";

const ENQUIRY_EMAIL = "orbitiysoftware@gmail.com";

const highlights = [
  "Personalised product walkthrough",
  "Pricing tailored to your institution",
  "Response within one business day",
];

function IconMail({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-slate-200 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,#eef2ff,transparent)]" />
      <Container className="relative">
        <SectionHeader
          label="Contact"
          title="Get in touch"
          description="Whether you need a demo, a custom quote, or have a general question — our team is ready to help your campus get started."
        />

        <div className="mx-auto mt-12 max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                  <IconMail className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-indigo-100">Email us directly</p>
                  <p className="text-base font-semibold text-white">We&apos;d love to hear from you</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8">
              <a
                href={`mailto:${ENQUIRY_EMAIL}`}
                className="group block rounded-xl border border-slate-200 bg-slate-50/80 p-5 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email address
                </p>
                <p className="mt-2 break-all text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-xl">
                  {ENQUIRY_EMAIL}
                </p>
              </a>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={`mailto:${ENQUIRY_EMAIL}`} size="lg" className="w-full sm:flex-1">
                  Send an email
                </Button>
                <Button
                  href={`mailto:${ENQUIRY_EMAIL}?subject=Orbitiy%20demo%20request`}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:flex-1"
                >
                  Request a demo
                </Button>
              </div>

              <ul className="mt-8 space-y-3 border-t border-slate-100 pt-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
