import { Parallax5 } from "../layouts";
import {
  component1,
  component2,
  component3,
  component4,
  component5,
} from "../components/Parallax5";

export default function Index({ allPostsData }) {
  const bgImages = [
    "url('/images/cliffEdge2.jpeg')",
    "url('/images/cliffStanding.jpeg')",
    "url('/images/cliffBottom.jpeg')",
  ];

  const components = [
    component1,
    component2,
    component3,
    component4,
    component5,
  ];

  return <Parallax5 components={components} bgImages={bgImages}></Parallax5>;
}
