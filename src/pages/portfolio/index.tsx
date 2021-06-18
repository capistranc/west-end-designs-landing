import Head from "next/head";
import Container from "../../components/Container";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/blog";
import NextLink from "next/link";
import { NextPage } from "next";
import {
  Box,
  Heading,
  Link,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

export const Portfolio: NextPage = () => {
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)) , url('/images/catalina.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url('/images/catalina.jpg')";

  const bgImage = useColorModeValue(bgImageLight, bgImageDark);
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section>
        <Box
          borderWidth={2}
          borderColor="purple.500"
          p={5}
          as="footer"
          className="my-footer"
        >
          <Heading size="lg">
            Hover the box...
            <Box
              as="footer"
              role="contentinfo"
              // className="my-footer"
              mx="auto"
              py="12"
              w="100%"
              // _before={{
              //   bgImage,
              //   bgPosition: "center",
              //   bgRepeat: "no-repeat",
              //   bgSize: "cover",
              // }}
              // _hover={{
              //   background: "white",
              //   color: "teal.500",
              // }}
              _before={{ background: "white", color: "teal.500" }}
              sx={{
                ".my-footer:hover &": {
                  color: "green.500",
                },
              }}
              px={{ base: "4", md: "8" }}
            >
              <Stack align="center" spacing="10" divider={<StackDivider />}>
                <Stack
                  d="flex"
                  direction={{ base: "column", lg: "row" }}
                  spacing={{ base: "10", lg: "28" }}
                  justify="center"
                >
                  <Box flex="1">
                    <Link href="mailto:capistranc@gmail.com">
                      WestEndDesigns@gmail.com
                    </Link>
                    <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
                  </Box>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: "10", md: "20" }}
                  ></Stack>
                </Stack>
                <Stack
                  direction={{ base: "column-reverse", md: "row" }}
                  justifyContent="space-between"
                  alignItems="center"
                ></Stack>
              </Stack>
              And I will turn green!
            </Box>
          </Heading>
        </Box>
      </section>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Portfolio;
