import { Box } from "@chakra-ui/react";

export function AirbnbExample() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      bg="tomato"
      w="100%"
      p={4}
      color="white"
      borderWidth="10px"
      borderRadius="lg"
      overflow="hidden"
    >
      This is the Box
    </Box>
  );
}
