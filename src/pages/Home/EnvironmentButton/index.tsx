import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Environment } from "../../../services/useCases/environmentsUseCase";

import { Container, Title } from "./styles";

interface EnvironmentButtonProps extends RectButtonProps {
  active?: boolean;
  data: Environment;
  onPress: any;
}

function EnvironmentButton({ title, active, onPress }: EnvironmentButtonProps) {
  return (
    <Container active={active} onPress={onPress}>
      <Title active={active}>{title}</Title>
    </Container>
  );
}

export default EnvironmentButton;
