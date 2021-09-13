import {
  Flex,
  Heading,
  Box,
  Text,
  Link,
  Spacer,
  Image,
  SimpleGrid,
  SimpleGridProps,
  Icon,
  FlexProps,
  BoxProps,
  IconProps,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import React, { useRef } from "react";
import { TimedCarousel } from "../../components/Motion/TimedCarousel";
import { SlideListItem } from "../../components/Motion";
import { MdMoneyOff, MdAllInclusive, MdDescription } from "react-icons/md";

export const section2 = () => {
  const listData = [
    {
      header: "Web Design & Development",
      subText: `Have peace of mind knowing that experts are building your website, so that you don't have to. Our websites are made to run flawlesly on mobile devices, tablets, and PC.`,
    },
    {
      header: "Manage your content",
      subText: `Figuring out how to explain your business can be hard, and with us you don't have too. Our inhouse team of SEO Copywriters will write all the content for you.`,
    },
    {
      header: "Lightning fast load times",
      subText: (
        <>
          Whether you are using the latest iPhone or an old flip phone, our
          websites load <u>fast</u>. Our statically rendered website designs
          guarantee this.
        </>
      ),
    },
    {
      header: "Improve your click count",
      subText: `More views means more customers. We will make sure your website reaches more eyes by utilizing the power of Google Analytics and modern SEO strategies.`,
    },
    {
      header: "Improve Customer Conversion",
      subText: `First impressions are important. We all know this. By having a professionaly made website your customers will be confident in your business.`,
    },
    {
      header: "24/7 Customer Service",
      subText: `If you have any questions call us. No automated response. Talk to one of us directly.`,
    },
  ];

  const iconData = [
    {
      CardIcon: MdMoneyOff,
      header: "$0 DOWN",
      subText: `$0 Down to start. We sell our software as a services on a
    subscription based plan starting from as little as $150 a month.`,
    },
    {
      CardIcon: MdDescription,
      header: "NO CONTRACT!",
      subText: `We don't believe in trapping people in contracts. We believe that the quality of our content should be enough to keep you as a customer. 
  
    Cancel anytime for any reason.`,
    },
    {
      CardIcon: MdAllInclusive,
      header: "UNLIMITED UPDATES",
      subText: `Updates to the content of the website will be quick and easy. We respond to all update requests in a timely manner`,
    },
  ];

  function renderContent() {
    return (
      <Flex direction="column" h="100%" w="100%" mb="8">
        <Flex
          p="4"
          direction="row"
          justify="flex-start"
          align="flex-start"
          mb="4rem"
          className="stickyHeader"
          h="100%"
          w="100%"
        >
          <Heading variant="h2" fontWeight="light" color="white">
            What We Do
          </Heading>
        </Flex>

        <Flex direction="column" h="100%" w="100%">
          <Flex justify="center" px="20" p="4" marginBottom="8">
            <Heading color="white" size="3xl">
              Premium Web Designs
            </Heading>
          </Flex>

          <Flex
            p="2" //4 spacing units is 1rem in chakra
            flexDirection={["column", "column", "row", "row"]}
            color="white"
            // h="100%"
            // w="100%"
            justify="space-around"
            align="space-around"
          >
            <Flex
              flex="1"
              flexDirection={["column", "column", "row", "row"]}
              p="1em"
              align="center"
              justify="center"
            >
              <TimedCarousel
                iconData={iconData}
                minHeight="36em"
                maxHeight="100vh"
                maxWidth="32em"
              />
            </Flex>

            <Flex
              flex="2"
              direction="column"
              borderLeft={{
                base: "none",
                md: "2px solid rgba(255,255,255, 0.5)",
              }}
              borderTop={{
                base: "2px solid rgba(255,255,255, 0.5)",
                md: "none",
              }}
              pl="4"
              pt="4"
            >
              <Heading as="h4"> SEO Optimized for Mobile Devices </Heading>
              <Text py="4" textStyle="subText" color="gray.300" maxWidth="56em">
                We produce websites that are built to run smoothly on mobile
                devices, tablets, and PCs. All while tailoring your content to
                maximize throughput from googles search algorithm. We tackle SEO
                Optimization from both ends, through website architecture and
                content backlinking.
              </Text>

              <SimpleGrid columns={[1, 1, 2, 2]} gap="6" mt="8" maxWidth="56em">
                {listData.map((item, i) => {
                  return <SlideListItem my="1" {...item} key={i} delay={i} />;
                })}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Box bg="#1E1E1E" minHeight="100vh" height="100%" width="100%">
      {renderContent()}
    </Box>
  );
};
