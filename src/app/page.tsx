import { Hero } from "@/components/home/hero";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <Hero />
      </main>
    </>
  );
}
