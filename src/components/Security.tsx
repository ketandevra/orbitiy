import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { IconShield } from "./icons";

const items = [
  {
    title: "Encryption",
    description: "AES-256 at rest, TLS 1.3 in transit for all data and communications.",
  },
  {
    title: "Access controls",
    description: "Granular role-based permissions with SSO and optional 2FA for staff.",
  },
  {
    title: "Audit trails",
    description: "Complete logs of who changed what — critical for compliance reviews.",
  },
  {
    title: "Data residency",
    description: "Hosted in India with daily backups and defined retention policies.",
  },
];

export function Security() {
  return (
    <section id="security" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              label="Security"
              title="Enterprise-grade protection for student data"
              description="Education institutions handle sensitive personal data. Orbitiy is built with security and compliance at the core — not as an afterthought."
              align="left"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["ISO 27001 aligned", "GDPR-ready", "99.9% uptime SLA"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  <IconShield className="h-3.5 w-3.5 text-indigo-600" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
