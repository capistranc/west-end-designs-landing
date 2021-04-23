import styled from "@emotion/styled";
import { Flex, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const StickyContactUs = styled(Flex)`
  position: sticky;
  right: 0;
  z-index: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height 0.5s, line-height 0.5s;
  align-self: flex-end;
  bottom: 0;
`;

export default () => {
  return (
    <StickyContactUs>
      <NextLink href="/contact">
        <Button leftIcon={<EmailIcon />}> Contact Us</Button>
      </NextLink>
    </StickyContactUs>
  );
};
