import { ReactNode } from "react";

export const img = (name: string, small = false) => `/images/interiors/${name}${small ? "-sm" : ""}.webp`;

export const Button = ({
  href,
  children,
  variant = "solid",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline" | "dark" | "light";
  className?: string;
}) => {
  const external = href.startsWith("http");
  const styles = {
    solid: "bg-brass text-charcoal hover:bg-charcoal hover:text-bone",
    outline: "border border-charcoal/80 text-charcoal hover:bg-charcoal hover:text-bone",
    dark: "bg-charcoal text-bone hover:bg-brass hover:text-charcoal",
    light: "border border-bone/60 text-bone hover:bg-bone hover:text-charcoal",
  }[variant];
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 font-body text-[13px] font-medium tracking-wide transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
};

/** Magazine-style running head: section number and name on a hairline, with a folio on the right. */
export const RunningHead = ({
  number,
  title,
  folio,
  tone = "light",
}: {
  number: string;
  title: string;
  folio?: string;
  tone?: "light" | "dark";
}) => (
  <div
    className={`flex items-baseline justify-between border-t pt-4 font-body text-xs ${
      tone === "dark" ? "border-bone/25 text-bone/60" : "border-charcoal text-charcoal/60"
    }`}
  >
    <span>
      <span className={tone === "dark" ? "text-bone" : "text-charcoal"}>{number}</span>
      <span className="mx-3">—</span>
      {title}
    </span>
    {folio && <span className="tabular-nums">{folio}</span>}
  </div>
);

export const Caption = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`font-body text-xs leading-relaxed text-charcoal/55 ${className}`}>{children}</p>
);

export const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43a9.37 9.37 0 0 1 9.43 9.44c0 5.2-4.23 9.42-9.44 9.42m8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02" />
  </svg>
);
