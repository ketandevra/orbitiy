import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import {
  IconBell,
  IconBuilding,
  IconChart,
  IconDatabase,
  IconShield,
  IconUsers,
} from "./icons";

const features = [
  {
    icon: IconDatabase,
    title: "Single source of truth",
    description:
      "Every student record, fee transaction, and attendance mark lives in one database — updated in real time across departments.",
  },
  {
    icon: IconUsers,
    title: "Stakeholder portals",
    description:
      "Dedicated experiences for admins, teachers, students, and parents with permissions tailored to each role.",
  },
  {
    icon: IconChart,
    title: "Executive dashboards",
    description:
      "Principals and management see enrollment trends, collection rates, and academic performance at a glance.",
  },
  {
    icon: IconBuilding,
    title: "Multi-campus management",
    description:
      "Operate branches, shifts, and departments from one console with consolidated and branch-level reporting.",
  },
  {
    icon: IconBell,
    title: "Automated workflows",
    description:
      "Fee reminders, absence alerts, exam schedules, and approval chains run on rules you configure once.",
  },
  {
    icon: IconShield,
    title: "Enterprise security",
    description:
      "SOC 2–aligned practices, encryption at rest and in transit, audit logs, and role-based access controls.",
  },
];

export function Features() {
  return (
    <section id="platform" className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          label="Platform"
          title="Everything your campus needs to run smoothly"
          description="Replace disconnected tools with one integrated ERP designed for education institutions."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <feature.icon />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
