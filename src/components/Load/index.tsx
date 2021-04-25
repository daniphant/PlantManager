import React from "react";
import { Container, LoadWrapper } from "./styles";

import loadAnimation from "../../assets/load.json";

function Load() {
  return (
    <Container>
      <LoadWrapper source={loadAnimation} autoPlay loop />
    </Container>
  );
}

export default Load;
