import { TasteHeader } from "./TasteHeader";
import { TasteFooter } from "./TasteFooter";

export function TasteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="taste-theme min-h-[100dvh] flex flex-col">
      <TasteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <TasteFooter />
    </div>
  );
}
