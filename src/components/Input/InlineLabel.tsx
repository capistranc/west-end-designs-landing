import { FormLabel } from "@chakra-ui/form-control";

export const InLineLabel = ({ children, ...props }) => {
  console.log(props.bg);

  return (
    <FormLabel
      display="inline"
      ml="0.5em"
      px="0.25em"
      mb="1em"
      position="absolute"
      zIndex="2"
      borderRadius="full"
      fontWeight="bold"
      top="-0.75em"
      {...props}
      bg={props.bg || "#1E1E1E"}
    >
      {children}
    </FormLabel>
  );
};
