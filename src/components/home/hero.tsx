import Image from "next/image";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { site } from "@/lib/site";
import { AppointmentButton } from "@/components/appointment/appointment-button";

export function Hero() {
  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span aria-hidden="true" /> Cuidado dental cercano y profesional</p>
        <h1 id="hero-title">Tu sonrisa merece <span>atención especializada.</span></h1>
        <p className="hero-description">Cuidamos tu salud dental con atención personalizada, un espacio cómodo y un enfoque profesional en cada consulta.</p>
        <div className="hero-actions">
          <AppointmentButton className="button button-primary">Agendar cita <ArrowIcon /></AppointmentButton>
          <a className="button button-secondary" href={site.servicesHref}>Conocer servicios</a>
        </div>
        <div className="trust-note">
          <span className="trust-symbol" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 20s-8-4.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 10-8 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
          </span>
          <p>Atención personalizada en un<br className="trust-break" /> espacio pensado para ti.</p>
        </div>
      </div>
      <figure className="hero-visual">
        <div className="photo-frame">
          <Image src="/recepcion.JPG" alt="Recepción del consultorio con escritorio blanco, sillas negras y un muro de madera con iluminación cálida."
            fill sizes="(min-width: 1440px) 552px, (min-width: 900px) 43vw, (min-width: 600px) 70vw, calc(100vw - 40px)" loading="eager" fetchPriority="high" className="hero-photo" />
        </div>
        <span className="photo-line" aria-hidden="true" />
        <figcaption className="photo-caption"><span aria-hidden="true" className="caption-mark">JB</span><div><span className="caption-eyebrow">NUESTRO ESPACIO</span><p>Siéntete en confianza.</p></div></figcaption>
      </figure>
    </section>
  );
}
