import React from "react";
import { Plant } from "../../../services/useCases/plantsUseCase";

import { Container, PlantLogo, Title } from "./styles";

interface PlantCardProps {
  data: Plant;
}

function PlantCard({ data }: PlantCardProps) {
  return (
    <Container>
      <PlantLogo uri={data.photo} width={70} height={70} />
      <Title>{data.name}</Title>
    </Container>
  );
}

export default PlantCard;
