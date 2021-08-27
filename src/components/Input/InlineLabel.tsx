import { FormLabel } from "@chakra-ui/form-control";

export const InLineLabel = ({ children, ...props }) => (
  <FormLabel
    display="inline"
    ml="0.5em"
    px="0.25em"
    mb="1em"
    position="absolute"
    bg={props.bg || "#1E1E1E"}
    zIndex="2"
    borderRadius="full"
    fontWeight="bold"
    top="-0.75em"
    {...props}
  >
    {children}
  </FormLabel>
);
