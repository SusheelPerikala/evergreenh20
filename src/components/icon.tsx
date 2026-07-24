import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "check"
  | "droplet"
  | "filter"
  | "home"
  | "leaf"
  | "menu"
  | "refresh"
  | "shield"
  | "spark"
  | "star"
  | "wrench";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  droplet: <path d="M12 2.5S5.5 9.2 5.5 14.4a6.5 6.5 0 0 0 13 0C18.5 9.2 12 2.5 12 2.5Z" />,
  filter: <><path d="M4 4h16l-6.2 7v6l-3.6 2v-8L4 4Z" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
  leaf: <><path d="M20 4C12 4 6 7.8 6 14c0 3 2 5 5 5 6.2 0 9-7 9-15Z" /><path d="M4 21c2-6 6-10 12-13" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  refresh: <><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M6.1 9A7 7 0 0 1 18 6l2 2" /><path d="M17.9 15A7 7 0 0 1 6 18l-2-2" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
  spark: <path d="m12 3-1.4 4.2A5 5 0 0 1 7.4 10L3 12l4.4 2a5 5 0 0 1 3.2 2.8L12 21l1.4-4.2a5 5 0 0 1 3.2-2.8l4.4-2-4.4-2a5 5 0 0 1-3.2-2.8L12 3Z" />,
  star: <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.4 6.3-.9L12 2.8Z" />,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5-5L7.5 3.5l3 3-4 4-3-3-2.2 2.2a4 4 0 0 0 5 5L16 24l8-8-9.3-9.7Z" />,
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function BrandMark() {
  return (
    <svg className="brand-mark" aria-hidden="true" viewBox="0 0 32 32" fill="none">
      <path d="M16 3.5S7.8 12 7.8 19a8.2 8.2 0 0 0 16.4 0C24.2 12 16 3.5 16 3.5Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12.2 21c2.2-4.8 5.1-7.8 8.6-9.3M14.2 17.2l-2.7-.7M17.2 14.2l.4-2.7M16.4 16.2l2.7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
