import Image from "next/image";
import { facilitiesContent } from "@/lib/site";

type FacilityImage = (typeof facilitiesContent.images)[number];

function FacilityFigure({ image }: { image: FacilityImage }) {
  return (
    <figure className={`facility-item facility-${image.variant}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={"loading" in image ? image.loading : "lazy"}
        sizes={image.variant === "featured"
          ? "(min-width: 1200px) 700px, (min-width: 768px) 58vw, calc(100vw - 40px)"
          : "(min-width: 1200px) 320px, (min-width: 768px) 32vw, calc(100vw - 40px)"}
        className="facility-photo"
      />
      <figcaption>{image.label}</figcaption>
    </figure>
  );
}

export function FacilitiesSection() {
  return (
    <section id="instalaciones" className="facilities-section" aria-labelledby="facilities-title">
      <div className="container">
        <div className="facilities-heading reveal-block">
          <p className="eyebrow"><span aria-hidden="true" /> {facilitiesContent.eyebrow}</p>
          <h2 id="facilities-title">{facilitiesContent.heading}</h2>
          <p>{facilitiesContent.description}</p>
        </div>
        <div className="facilities-gallery reveal-block" aria-label="Fotografías del consultorio">
          {facilitiesContent.images.map((image) => <FacilityFigure key={image.src} image={image} />)}
        </div>
      </div>
    </section>
  );
}
