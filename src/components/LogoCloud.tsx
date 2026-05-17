import { Container } from "./ui/Container";

const institutions = [
  "Delhi Public Academy",
  "St. Xavier's College",
  "National Model School",
  "Greenfield University",
  "Heritage International",
  "Cambridge Junior College",
];

export function LogoCloud() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-12">
      <Container>
        <p className="text-center text-sm font-medium text-slate-600">
          Trusted by 500+ schools and colleges across India
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {institutions.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-center text-sm font-semibold text-slate-700"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
