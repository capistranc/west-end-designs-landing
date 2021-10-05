import { Flex, Heading, Box, Text, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { BorderedIconOffset } from "../../components/Icons/BorderedIconOffset";
import { theme } from "../../theme";
import { GiSmartphone } from "react-icons/gi";
import { IoIosMailUnread, IoIosMegaphone } from "react-icons/io";

export const CallWriteReview = ({ ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justify="space-evenly"
      align="center"
      direction={["column", "column", "row", "row"]}
      color={theme.fg2[colorMode]}
      {...props}
    >
      <Box my="8">
        <BorderedIconOffset icon={GiSmartphone} />
        <Heading variant="h2" mb="2">
          Call us
        </Heading>
        <Text>
          <b>Chris:</b>{" "}
          <NextLink href="tel:194975519"> +1 (949) 735 - 5619</NextLink>
        </Text>
        <Text>
          <b>Michael:</b>{" "}
          <NextLink href="tel:17149329998"> +1 (714) 932 - 9998</NextLink>
        </Text>
      </Box>

      <Box my="8">
        <BorderedIconOffset icon={IoIosMailUnread} />
        <Heading variant="h2" mb="2">
          Write Us
        </Heading>
        <Text>
          <b>Chris:</b>{" "}
          <NextLink href="mailto:chris@westendwebdesigns.com">
            chris@westendwebdesigns.com
          </NextLink>
        </Text>
        <Text>
          <b>Michael:</b>{" "}
          <NextLink href="michael@westendwebdesigns.com">
            michael@westendwebdesigns.com
          </NextLink>
        </Text>
      </Box>

      <Box my="8">
        <BorderedIconOffset icon={IoIosMegaphone} />{" "}
        <Heading variant="h2" mb="2">
          Review Us
        </Heading>
        <Text>
          <b>Google</b>{" "}
          <NextLink href="tel:194975519"> +1 (949) 735 - 5619</NextLink>
        </Text>
        <Text>
          <b>Yelp</b>{" "}
          <NextLink href="tel:17149329998"> +1 (714) 932 - 9998</NextLink>
        </Text>
      </Box>
    </Flex>
  );
};
