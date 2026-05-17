import { Logo } from "./Logo";
import { Container } from "./ui/Container";

const footerLinks = {
  Product: [
    { label: "Platform", href: "#platform" },
    { label: "Modules", href: "#modules" },
    { label: "Security", href: "#security" },
    { label: "Integrations", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Orbitiy is the modern ERP for schools and colleges — unifying
              operations, academics, and finance on one secure platform.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold text-slate-900">{category}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Orbitiy</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms of Service
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}
