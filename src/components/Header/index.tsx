export const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact Us" },
];

import { StickyNavHeader } from "./StickyNavHeader";
import { MorphingNavBar } from "./MorphingNavBar";

export * from "./BannerHeader";
export * from "./Banner";

export const Header = ({ active = null }) => {
  return <StickyNavHeader active={active} links={links} />;
};
