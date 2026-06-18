import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { SkipToContent } from "@/components/ui/SkipToContent";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SkipToContent />
      <Navbar />
      {/* Offset for fixed navbar */}
      <div className="flex min-h-screen flex-col pt-[5.5rem] sm:pt-[6rem]">
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
