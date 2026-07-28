import { Header } from "./header";
import { Footer } from "./footer";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page">
        <header>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        <div className="legal-content">{children}</div>
      </main>
      <Footer />
    </>
  );
}
