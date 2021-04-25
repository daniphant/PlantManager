import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import {
  fetchEnvironmentNames,
  Environment,
} from "../../services/useCases/plantsUseCase";
import EnvironmentButton from "./EnvironmentButton";

import {
  Body,
  ButtonList,
  Container,
  Subtitle,
  TextWrapper,
  Title,
} from "./styles";

function Home() {
  const [environments, setEnvironments] = useState<Environment[]>();

  useEffect(() => {
    (async () => {
      const data = await fetchEnvironmentNames();
      setEnvironments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    })();
  }, []);

  return (
    <Container>
      <Header />

      <Body>
        <TextWrapper>
          <Title>Em qual ambiente</Title>
          <Subtitle>você quer colocar sua planta?</Subtitle>
        </TextWrapper>

        <ButtonList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "center" }}
          horizontal
          data={environments}
          renderItem={({ item }) => <EnvironmentButton title={item.title} />}
        />
      </Body>
    </Container>
  );
}

export default Home;
