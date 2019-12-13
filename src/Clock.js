import React from "react";
import styled from "@emotion/styled";
import { Box, Flex } from "@chakra-ui/core";

const Clock = ({ degreesA, degreesB }) => (
  <Container>
    <Hand transform={`rotate(${degreesA}deg)`}>
      <Half />
      <Half />
    </Hand>
    <Hand transform={`rotate(${degreesB}deg)`}>
      <Half />
      <Half />
    </Hand>
  </Container>
);

export default Clock;

const Container = styled(Flex)`
  position: relative;
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  justify-content: center;
  margin: 1px;
  box-shadow: inset 1px 1px 3px 1px #ddd;
`;

const Hand = styled(Box)`
  width: 2px;
  height: 100%;
  position: absolute;
  transition: 5000ms all;
`;

const Half = styled(Box)`
  width: 100%;
  height: 50%;

  :first-of-type {
    background: black;
    box-shadow: 1px 1px 3px #ccc;
  }
  :last-of-type {
    background: transparent;
  }
`;
