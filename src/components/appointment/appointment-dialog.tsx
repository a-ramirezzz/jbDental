"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { getWhatsAppHref, site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/social-icons";

type AppointmentContextValue = { openAppointmentDialog: (trigger?: HTMLElement) => void };
const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function AppointmentDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const originalOverflow = useRef("");

  const openAppointmentDialog = useCallback((trigger?: HTMLElement) => {
    triggerRef.current = trigger ?? (document.activeElement as HTMLElement | null);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    originalOverflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    dialog.showModal();

    const onClose = () => {
      document.documentElement.style.overflow = originalOverflow.current;
      setOpen(false);
      triggerRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
      document.documentElement.style.overflow = originalOverflow.current;
    };
  }, [open]);

  return (
    <AppointmentContext.Provider value={{ openAppointmentDialog }}>
      {children}
      <dialog
        ref={dialogRef}
        className="appointment-dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        aria-describedby="appointment-description"
        onCancel={(event) => { event.preventDefault(); closeDialog(); }}
        onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}
      >
        <div className="appointment-panel">
          <button type="button" className="dialog-close" aria-label="Cerrar selector de citas" onClick={closeDialog} autoFocus>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
          <div className="appointment-heading">
            <p className="dialog-eyebrow">AGENDA POR WHATSAPP</p>
            <h2 id="appointment-title">Elige un número para agendar</h2>
            <p id="appointment-description">Selecciona el contacto con el que deseas comunicarte por WhatsApp.</p>
          </div>
          <div className="appointment-options">
            {site.whatsappContacts.map((contact) => (
              <a key={contact.whatsappNumber} className="whatsapp-option" href={getWhatsAppHref(contact.whatsappNumber)} target="_blank" rel="noopener noreferrer" aria-label={`Agendar por WhatsApp al ${contact.formattedNumber}`}>
                <span className="whatsapp-mark"><WhatsAppIcon /></span>
                <span><small>Contactar por WhatsApp</small><strong>{contact.formattedNumber}</strong></span>
                <svg className="option-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 16 16 8m-6 0h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </AppointmentContext.Provider>
  );
}

export function useAppointmentDialog() {
  const context = useContext(AppointmentContext);
  if (!context) throw new Error("useAppointmentDialog must be used within AppointmentDialogProvider");
  return context;
}
