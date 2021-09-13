import { Stack, Avatar, Text, Box } from "@chakra-ui/react";

export const TitledAvatar = ({ name, title, src, ...props }) => {
  return (
    <Box {...props}>
      <Stack direction="column" align="center" justify="center">
        <Avatar size="2xl" name={name} src={src} />
        <Box align="center">
          <Text fontSize="2xl" textStyle="h1">
            {name}
          </Text>
          <Text textStyle="h2">{title}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
