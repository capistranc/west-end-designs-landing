import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useOnScreen from "../../lib/hooks/useOnScreen";

const MyPage = ({ image }) => {
  const ref = useRef(null);

  useEffect(() => {}, []);
  const isVisible = useOnScreen(ref);
  console.log("isVisible", isVisible);

  return (
    <Wrapper ref={ref}>
      <Image isVisible={isVisible} src={image} />
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Image = styled.img`
  transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: ${(props) => (props.isVisible ? "static" : "none")};
  animation: ${(props) => props.isVisible && "scale 5s 1"};
  @keyframes scale {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
