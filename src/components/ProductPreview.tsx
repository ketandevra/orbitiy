import { Logo } from "./Logo";

export function ProductPreview() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-indigo-100 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
        <div className="flex border-b border-slate-200 bg-slate-50">
          <div className="hidden w-52 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
            <div className="mb-6">
              <Logo size="xs" />
            </div>
            <nav className="space-y-1 text-sm">
              {[
                { label: "Dashboard", active: true },
                { label: "Students", active: false },
                { label: "Admissions", active: false },
                { label: "Fees", active: false },
                { label: "Attendance", active: false },
                { label: "Examinations", active: false },
                { label: "Reports", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-md px-3 py-2 ${item.active ? "bg-indigo-50 font-medium text-indigo-600" : "text-slate-600"}`}
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
              <div>
                <p className="text-xs font-medium text-slate-600">Campus overview</p>
                <p className="text-sm font-semibold text-slate-900">Springfield International School</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden h-8 w-48 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs text-slate-500 sm:flex sm:items-center">
                  Search students, staff…
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-600">
                  AD
                </div>
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-3">
              <MetricCard label="Total students" value="4,218" delta="+3.2% vs last term" positive />
              <MetricCard label="Fee collected" value="₹2.41 Cr" delta="94.2% of target" positive />
              <MetricCard label="Attendance today" value="96.4%" delta="12 classes below 90%" positive={false} />
            </div>
            <div className="grid gap-4 border-t border-slate-200 p-5 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium text-slate-600">Weekly attendance trend</p>
                <div className="mt-4 flex h-32 items-end justify-between gap-2">
                  {[72, 85, 91, 88, 94, 96, 93].map((h, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-sm bg-indigo-600/80"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[10px] text-slate-500">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 lg:col-span-2">
                <p className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600">
                  Pending actions
                </p>
                <ul className="divide-y divide-slate-200 text-sm text-slate-900">
                  {[
                    ["Fee defaulters", "23 students"],
                    ["Leave approvals", "8 requests"],
                    ["Exam marks pending", "Class XII-A"],
                  ].map(([title, meta]) => (
                    <li key={title} className="flex items-center justify-between px-4 py-3">
                      <span>{title}</span>
                      <span className="text-xs text-slate-600">{meta}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  delta,
  positive,
}: {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-medium text-slate-600">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
      <p className={`mt-1 text-xs ${positive ? "text-emerald-600" : "text-amber-600"}`}>
        {delta}
      </p>
    </div>
  );
}
