import { Box } from "@chakra-ui/react";

export const DiamondDecoratorTopDown = ({ ...props }) => {
  return (
    <Box className="DiamonDecoratorTopDown" {...props}>
      <Box
        _before={{
          position: "absolute",
          top: { base: "-6rem", xxl: "-8rem" },
          right: "0",

          transform: "skewY(5deg)",
          bg: props.bg || props.bgColor,
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
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
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
          content: `""`,
          ...props,
        }}
      ></Box>
      <Box
        _before={{
          position: "absolute",
          top: { base: "-6rem", xxl: "-8rem" },
          right: "0",

          transform: "skewY(-5deg)",
          bg: props.bg || props.bgColor,
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
          content: `""`,
          ...props,
        }}
      />
    </Box>
  );
};
export const DiamondDecoratorBottomDown = ({ ...props }) => {
  return (
    <Box className="DiamondDecoratorBottomDown" height="15rem">
      <Box
        _before={{
          position: "absolute",
          bottom: { base: "-6rem", xxl: "-8rem" },
          left: "0",
          transform: "skewY(5deg)",
          height: "15rem",
          width: "50%",

          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: { base: "-6rem", xxl: "-8rem" },
          right: "0",
          transform: "skewY(-5deg)",
          height: "15rem",

          width: "50%",
          content: `""`,
          ...props,
        }}
      />
    </Box>
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

          transform: "skewY(5deg)",
          bg: props.bg || props.bgColor,
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: "0rem",
          right: "0",

          transform: "skewY(-5deg)",
          bg: props.bg || props.bgColor,
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
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
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
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

          transform: "skewY(5deg)",
          bg: props.bg || props.bgColor,
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
          content: `""`,
          ...props,
        }}
      />
      <Box
        _before={{
          position: "absolute",
          bottom: "0rem",
          right: "0",

          transform: "skewY(-5deg)",
          bg: props.bg || props.bgColor,
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
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
          height: { base: "12rem", xxl: "16rem" },
          width: "100%",
          content: `""`,
          ...props,
        }}
      ></Box>
    </>
  );
};
