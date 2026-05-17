import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your academic structure, fee heads, boards, and user roles in a structured onboarding workshop.",
  },
  {
    step: "02",
    title: "Migration",
    description:
      "Import student, staff, and financial data from spreadsheets or legacy systems with validation at every step.",
  },
  {
    step: "03",
    title: "Training",
    description:
      "Role-specific training for admins, teachers, and accountants — with documentation and video guides.",
  },
  {
    step: "04",
    title: "Go-live",
    description:
      "Phased rollout by module with dedicated support during your first full academic cycle.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          label="Implementation"
          title="Go live in weeks, with a team beside you"
          description="A proven onboarding playbook used by institutions across India."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step}>
              <span className="text-sm font-semibold text-indigo-600">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
