import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { IconCheck } from "./icons";

const showcases = [
  {
    label: "Admissions",
    title: "From inquiry to enrollment — without the paperwork chase",
    description:
      "Manage online applications, document verification, merit lists, and seat allocation in guided workflows your admissions team can trust.",
    points: [
      "Custom application forms per program",
      "Automated document checklist & verification",
      "Merit list generation and waitlist management",
    ],
    visual: "admissions",
  },
  {
    label: "Finance",
    title: "Fee collection that actually closes on time",
    description:
      "Configure fee heads, concessions, and instalments. Collect online, send smart reminders, and reconcile with accounting in minutes.",
    points: [
      "Flexible fee structures & concessions",
      "UPI, card, and net banking integrations",
      "Defaulter reports and receipt automation",
    ],
    visual: "finance",
  },
  {
    label: "Academics",
    title: "Attendance, exams, and report cards — connected",
    description:
      "Mark daily attendance, schedule exams, enter marks, and publish report cards — all linked to the same student profile parents see in the portal.",
    points: [
      "Biometric & manual attendance options",
      "Exam scheduling with hall ticket generation",
      "Configurable grading & report card templates",
    ],
    visual: "academics",
  },
];

export function ProductShowcase() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
      <Container>
        <SectionHeader
          label="Product"
          title="Purpose-built workflows for every department"
          description="Deep modules that work together — not bolted-on add-ons."
        />
        <div className="mt-20 space-y-24">
          {showcases.map((item, index) => (
            <div
              key={item.label}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-indigo-600">{item.label}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.description}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      <span className="text-slate-900">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ShowcasePanel type={item.visual} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ShowcasePanel({ type }: { type: string }) {
  if (type === "admissions") {
    return (
      <Panel>
        <Row header>
          <span>Application pipeline</span>
          <span className="text-indigo-600">142 active</span>
        </Row>
        {[
          ["Applied", "86", "w-[70%]"],
          ["Documents verified", "52", "w-[55%]"],
          ["Interview scheduled", "28", "w-[35%]"],
          ["Enrolled", "18", "w-[22%]"],
        ].map(([stage, count, width]) => (
          <div key={stage} className="border-t border-slate-200 px-5 py-4">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{stage}</span>
              <span className="text-slate-600">{count}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-50">
              <div className={`h-full rounded-full bg-indigo-600 ${width}`} />
            </div>
          </div>
        ))}
      </Panel>
    );
  }

  if (type === "finance") {
    return (
      <Panel>
        <Row header>
          <span>Term II fee collection</span>
          <span className="font-semibold text-emerald-600">94.2%</span>
        </Row>
        <div className="grid grid-cols-2 gap-4 border-t border-slate-200 p-5">
          <MiniStat label="Collected" value="₹1.82 Cr" />
          <MiniStat label="Outstanding" value="₹11.2 L" />
          <MiniStat label="Online payments" value="78%" />
          <MiniStat label="Reminders sent" value="156" />
        </div>
        <div className="border-t border-slate-200 px-5 py-4">
          <p className="text-xs font-medium text-slate-600">Recent transactions</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Rahul Sharma — Term II", "₹42,500"],
              ["Priya Nair — Transport", "₹8,200"],
              ["Batch deposit — Class X", "₹3,12,000"],
            ].map(([name, amt]) => (
              <li key={name} className="flex justify-between">
                <span>{name}</span>
                <span className="font-medium">{amt}</span>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    );
  }

  return (
    <Panel>
      <Row header>
        <span>Class XII-A — Attendance</span>
        <span className="text-indigo-600">Today: 94%</span>
      </Row>
      <div className="border-t border-slate-200 p-5">
        <div className="grid grid-cols-5 gap-2 text-center text-xs text-slate-600">
          {["Present", "Absent", "Late", "Leave", "Total"].map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-5 gap-2 text-center text-sm font-semibold">
          <span className="text-emerald-600">38</span>
          <span>2</span>
          <span>1</span>
          <span>0</span>
          <span>41</span>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-4">
        <p className="text-xs font-medium text-slate-600">Upcoming exams</p>
        <ul className="mt-3 divide-y divide-slate-200 text-sm">
          {[
            ["Physics — Unit test", "Mon, 10 Jun"],
            ["Chemistry — Practical", "Wed, 12 Jun"],
          ].map(([sub, date]) => (
            <li key={sub} className="flex justify-between py-2">
              <span>{sub}</span>
              <span className="text-slate-600">{date}</span>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
      {children}
    </div>
  );
}

function Row({
  children,
  header,
}: {
  children: React.ReactNode;
  header?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 text-sm text-slate-900 ${header ? "font-medium" : ""}`}
    >
      {children}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
      <p className="text-xs text-slate-600">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}
