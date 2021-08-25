import {
  Services5,
  section1,
  section2,
  section3,
  section4,
  section5,
} from "../layouts/Services";

export default function Services({ allPostsData }) {
  let section1Component = section1();
  let section2Component = section2();
  let section3Component = section3();
  let section4Component = section4();
  let section5Component = section5();

  const sections = [
    section1Component,
    section2Component,
    section3Component,
    section4Component,
    section5Component,
  ];

  return <Services5 sections={sections}></Services5>;
}
