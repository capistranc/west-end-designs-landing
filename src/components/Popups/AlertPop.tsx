import {
  Alert,
  AlertIcon,
  AlertTitle,
  HTMLChakraProps,
} from "@chakra-ui/react";

export function AlertPop(props: HTMLChakraProps<"div">) {
  return (
    <Alert h="1em" status="error" borderRadius="8" zIndex="3">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}
