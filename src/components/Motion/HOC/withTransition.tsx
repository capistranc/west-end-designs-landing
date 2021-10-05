import { motion } from "framer-motion";
import { MotionBox } from "../index";

const withTransition = (OriginalComponent) => {
  return () => (
    <>
      <OriginalComponent />
      <MotionBox
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width="100%"
        background="#066bb8"
        transform="origin: left"
      />
      <MotionBox
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width="100%"
        background="#066bb8"
        transform="origin: right"
      />
    </>
  );
};

export default withTransition;
