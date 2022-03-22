import { Box } from "@chakra-ui/react";

export const DiamondDecoratorTopDown = ({ ...props }) => {
  return (
    <Box {...props}>
      <Box
        _before={{
          position: "absolute",
          top: { base: "-6rem", xxl: "-8rem" },
          right: "0",

          transform: "skewY(6deg)",
          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          top: { base: "-6rem", xxl: "-8rem" },
          right: "0",

          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      ></Box>
      <Box
        _before={{
          position: "absolute",
          top: { base: "-6rem", xxl: "-8rem" },
          right: "0",

          transform: "skewY(-6deg)",
          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      />
    </Box>
  );
};
export const DiamondDecoratorBottomDown = ({ ...props }) => {
  return (
    <>
      <Box
        _before={{
          position: "absolute",
          bottom: { base: "-6rem", xxl: "-8rem" },
          left: "0",
          transform: "skewY(6deg)",
          h: "15rem",
          w: "50%",

          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: { base: "-6rem", xxl: "-8rem" },
          right: "0",
          transform: "skewY(-6deg)",
          h: "15rem",

          w: "50%",
          content: `""`,
          ...props,
        }}
      />
    </>
  );
};

export const DiamondDecoratorBottomBowTie = ({ ...props }) => {
  return (
    <>
      <Box
        _before={{
          position: "absolute",
          bottom: "0rem",
          right: "0",

          transform: "skewY(6deg)",
          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: "0rem",
          right: "0",

          transform: "skewY(-6deg)",
          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: "0rem",
          right: "0",

          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      ></Box>
    </>
  );
};

export const DiamondDecoratorBottomUp = ({ ...props }) => {
  return (
    <>
      <Box
        _before={{
          position: "absolute",
          bottom: "0rem",
          right: "0",

          transform: "skewY(6deg)",
          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: "0rem",
          right: "0",

          transform: "skewY(-6deg)",
          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: { base: "-6rem", xxl: "-8rem" },
          right: "0",

          bg: props.bg || props.bgColor,
          h: { base: "12rem", xxl: "16rem" },
          w: "100%",
          content: `""`,
          ...props,
        }}
      ></Box>
    </>
  );
};
