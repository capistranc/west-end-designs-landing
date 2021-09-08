import {
  Services5,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
} from "../layouts/Services";

export default function Services({ allPostsData }) {
  let section1Component = section1();
  let section2Component = section2();
  let section3Component = section3();
  let section4Component = section4();
  let section5Component = section5();
  let section6Component = section6();
  let section7Component = section7();
  let section8Component = section8();
  let section9Component = section9();
  let section10Component = section10();

  const sections = [
    section1Component,
    section2Component,
    section3Component,
    section4Component,
    section5Component,
    section6Component,
    section7Component,
    section8Component,
    section9Component,
    section10Component,
  ];

  return <Services5 sections={sections}></Services5>;
}
