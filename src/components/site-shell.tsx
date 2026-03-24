import Link from "next/link";
import { navItems } from "@/lib/content";

type SiteShellProps = {
  activePath: string;
  children: React.ReactNode;
};

function Header({ activePath }: { activePath: string }) {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand-mark" href="/">
          <span className="brand-icon">M</span>
          <span>Mapeia.Online</span>
        </Link>

        <nav className="site-nav" aria-label="Principal">
          {navItems.map((item) => {
            const isActive = item.href === activePath;

            return (
              <Link
                key={item.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="button button-primary button-small" href="/aplicacao">
          Preencher aplicação
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-column">
          <div className="brand-mark">
            <span className="brand-icon">M</span>
            <span>Mapeia.Online</span>
          </div>
          <p className="footer-copy">
            Consultoria de processos para transformar conhecimento disperso em
            padrões claros, replicáveis e prontos para escalar.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-title">Navegação</p>
          {navItems.map((item) => (
            <Link key={item.href} className="footer-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <p className="footer-title">Contato</p>
          <a className="footer-link" href="https://github.com/produtiveme/mapeia.online">
            GitHub
          </a>
          <Link className="footer-link" href="/aplicacao">
            Aplicação
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ activePath, children }: SiteShellProps) {
  return (
    <>
      <Header activePath={activePath} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
