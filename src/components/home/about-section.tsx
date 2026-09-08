import Image from "next/image";
import { aboutContent } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="nosotros" className="about-section" aria-labelledby="about-title">
      <div className="container about-inner">
        <div className="about-copy reveal-block">
          <p className="eyebrow"><span aria-hidden="true" /> {aboutContent.eyebrow}</p>
          <h2 id="about-title">{aboutContent.heading}</h2>
          <p className="section-lead">{aboutContent.body}</p>
          <p className="section-support">{aboutContent.support}</p>
        </div>
        <div className="about-visual reveal-block">
          <figure className="about-photo-shell">
            <Image
              src="/sala-estar.JPG"
              alt="Sala de espera con sillas negras, espejo redondo, planta y paredes blancas."
              width={798}
              height={1280}
              sizes="(min-width: 1200px) 420px, (min-width: 900px) 38vw, (min-width: 600px) 70vw, calc(100vw - 40px)"
              className="about-photo"
            />
          </figure>
          <ul className="principles" aria-label="Principios de atención">
            {aboutContent.principles.map((principle) => (
              <li key={principle.label}>
                <span aria-hidden="true" />
                <div>
                  <h3>{principle.label}</h3>
                  <p>{principle.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
