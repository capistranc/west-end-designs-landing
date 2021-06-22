import FooterContainer from "./Footer";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact Us" },
];

export const Footer = (props) => {
  return <FooterContainer links {...props} />;
};

export * from "./FooterHeading";
export * from "./SocialMediaLinks";
export * from "./Footer";
