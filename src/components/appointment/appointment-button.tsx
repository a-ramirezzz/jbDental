"use client";

import type { MouseEvent, ReactNode } from "react";
import { useAppointmentDialog } from "./appointment-dialog";

export function AppointmentButton({ children, className }: { children: ReactNode; className?: string }) {
  const { openAppointmentDialog } = useAppointmentDialog();
  return <button type="button" className={className} onClick={(event: MouseEvent<HTMLButtonElement>) => openAppointmentDialog(event.currentTarget)}>{children}</button>;
}
