import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const modules = [
  { name: "Admissions", tag: "Enroll" },
  { name: "Student Information System", tag: "Core" },
  { name: "Academics & Timetable", tag: "Core" },
  { name: "Attendance", tag: "Daily ops" },
  { name: "Examinations", tag: "Assess" },
  { name: "Fees & Accounting", tag: "Finance" },
  { name: "HR & Payroll", tag: "Staff" },
  { name: "Library", tag: "Resources" },
  { name: "Transport & Hostel", tag: "Campus" },
  { name: "Inventory", tag: "Assets" },
  { name: "Communication", tag: "Engage" },
  { name: "Analytics & Reports", tag: "Insights" },
];

export function Modules() {
  return (
    <section id="modules" className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          label="Modules"
          title="Start with what you need. Scale when you're ready."
          description="Every module shares the same student and staff records — no duplicate data entry."
        />
        <div className="mt-14 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span>Module</span>
            <span className="hidden sm:block">Category</span>
            <span className="text-right">Status</span>
          </div>
          <ul className="divide-y divide-slate-200">
            {modules.map((mod) => (
              <li
                key={mod.name}
                className="grid grid-cols-3 items-center px-6 py-4 text-sm transition-colors hover:bg-slate-50"
              >
                <span className="font-medium text-slate-900">{mod.name}</span>
                <span className="hidden text-slate-600 sm:block">{mod.tag}</span>
                <span className="text-right">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    Included
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
