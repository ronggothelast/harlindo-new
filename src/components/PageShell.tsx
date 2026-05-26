import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTA } from "./CTA";

interface PageShellProps {
  children: React.ReactNode;
  showCta?: boolean;
}

export function PageShell({ children, showCta = true }: PageShellProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="overflow-x-hidden w-full pt-24">
        {children}
        {showCta && <CTA />}
      </main>
      <Footer />
    </>
  );
}
