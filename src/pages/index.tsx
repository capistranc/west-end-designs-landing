import {
  Parallax5,
  section1,
  section2,
  section3,
  section4,
  section5,
} from "../layouts/Parallax5";

export default function Index({ allPostsData }) {
  const bgImages = [
    "url('/images/cliffEdge2.jpeg')",
    "url('/images/cliffStanding.jpeg')",
    "url('/images/cliffBottom.jpeg')",
  ];

  const sections = [section1, section2, section3, section4, section5].map(
    (section) => section()
  );

  return <Parallax5 sections={sections} bgImages={bgImages}></Parallax5>;
}
