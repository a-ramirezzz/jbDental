import { AboutSection } from "@/components/home/about-section";
import { FacilitiesSection } from "@/components/home/facilities-section";
import { Hero } from "@/components/home/hero";
import { SiteHeader } from "@/components/layout/site-header";
import { AppointmentDialogProvider } from "@/components/appointment/appointment-dialog";

export default function Home() {
  return (
    <AppointmentDialogProvider>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <FacilitiesSection />
      </main>
    </AppointmentDialogProvider>
  );
}
