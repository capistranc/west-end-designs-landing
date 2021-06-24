import React from "react";
import styled from "styled-components";
import MyPage from "./MyPage";

export const AnimeImage = ({ image, bg, ...props }) => {
  return (
    <Wrapper>
      <Background src={bg} alt="background" />
      <Title>useOnScreen Hook</Title>
      <MyPage image={image} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  display: grid;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
