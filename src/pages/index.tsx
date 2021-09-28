import {
  Parallax5,
  section0,
  section1,
  section2,
  section3,
  section4,
} from "../layouts/Parallax5";

import { useBreakpointValue } from "@chakra-ui/media-query";
export default function Index({ allPostsData }) {
  let device = "mobile";

  device = useBreakpointValue({
    base: "mobile",
    md: "browser",
    xl: "hq",
  });

  let bgImages = [
    `url('/images/${device}/cliffEdge.jpeg')`,
    `url('/images/${device}/cliffStanding.jpeg')`,
    `url('/images/${device}/cliffBottom.jpeg')`,
  ];

  const sections = [section0, section1, section2, section3, section4].map(
    (section) => section(),
  );

  return <Parallax5 sections={sections} bgImages={bgImages}></Parallax5>;
}
