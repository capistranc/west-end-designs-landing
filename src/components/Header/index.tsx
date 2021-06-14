import NavBar from "./NavBar";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact Us" },
];

const Header = (props) => {
  console.log(props);
  return <NavBar links={links} {...props}></NavBar>;
};

export default Header;
