import {
  Parallax5,
  Section0,
  Section1,
  Section2,
  Section3,
  Section4,
} from "../layouts/Parallax5";

import { useBreakpointValue } from "@chakra-ui/media-query";
export default function Index({ allPostsData }) {
  const device = useBreakpointValue({
    base: "mobile",
    md: "browser",
    xl: "hq",
  });

  let bgImages = [
    `url('/images/${device || "mobile"}/cliffEdge.jpeg')`,
    `url('/images/${device || "mobile"}/cliffStanding.jpeg')`,
    `url('/images/${device || "mobile"}/cliffBottom.jpeg')`,
  ];

  const sections = [Section0, Section1, Section2, Section3, Section4].map(
    (Section) => <Section />,
  );

  return <Parallax5 sections={sections} bgImages={bgImages}></Parallax5>;
}
