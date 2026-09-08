type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.6 21v-8h2.8l.42-3.2H13.6V7.75c0-.93.27-1.56 1.62-1.56H17V3.33c-.31-.04-1.37-.13-2.6-.13-2.57 0-4.33 1.52-4.33 4.32V9.8H7.16V13h2.91v8h3.53Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.38 7.4L3.6 20.25l1.18-4.29A8.4 8.4 0 1 1 20.4 11.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.35 7.7c.2-.45.4-.46.72-.47h.6c.18 0 .38.07.48.35l.72 1.77c.08.22.04.4-.1.58l-.54.67c-.16.18-.13.35-.03.54.68 1.2 1.67 2.16 2.89 2.8.2.1.38.1.53-.08l.75-.86c.18-.2.37-.25.6-.16l1.72.8c.25.12.42.24.45.43.04.2-.09 1.14-.55 1.66-.45.52-1.15.8-1.92.8-.6 0-1.65-.28-2.92-.86-1.07-.49-2.24-1.25-3.25-2.3-.91-.95-1.68-2.08-2.1-3.12-.43-1.08-.04-2.03.15-2.44Z" fill="currentColor" />
    </svg>
  );
}
