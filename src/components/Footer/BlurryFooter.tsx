import { BlurryBackground } from "..";
import { links, Footer } from "./";
import { useColorModeValue } from "@chakra-ui/react";

export const BlurryFooter = ({ ...props }) => {
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)), url('/images/catalinaLight.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.51)) , url('/images/catalinaDark.jpg')";
  const bgImage = useColorModeValue(bgImageLight, bgImageDark);

  const color = "white";

  return (
    <BlurryBackground bgImage={bgImage} color={color} mx="auto">
      <Footer zIndex="1" links={links} />
    </BlurryBackground>
  );
};
