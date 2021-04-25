import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

function EnvironmentButton({ title, active }: EnvironmentButtonProps) {
  return (
    <Container active={active}>
      <Title active={active}>{title}</Title>
    </Container>
  );
}

export default EnvironmentButton;
