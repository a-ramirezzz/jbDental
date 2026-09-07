"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";
import { ArrowIcon } from "@/components/ui/arrow-icon";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const desktop = window.matchMedia("(min-width: 1200px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header ref={header} className={`site-header${scrolled ? " is-scrolled" : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={`${site.name}, inicio`} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt={site.name} width={3531} height={2969} sizes="80px" className="brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button-primary header-appointment" href={site.appointmentHref} onClick={() => setOpen(false)}>
          Agendar cita <ArrowIcon />
        </a>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={open ? "m6 6 12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil" hidden={!open}>
        <div className="container">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => { setOpen(false); toggle.current?.focus(); }}>{item.label}</a>)}
        </div>
      </nav>
    </header>
  );
}
