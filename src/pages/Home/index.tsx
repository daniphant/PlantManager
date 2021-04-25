import React, { Fragment, useEffect, useState } from "react";

import Header from "../../components/Header";
import Load from "../../components/Load";
import {
  fetchEnvironmentNames,
  Environment,
} from "../../services/useCases/environmentsUseCase";
import { fetchPlantData, Plant } from "../../services/useCases/plantsUseCase";

import EnvironmentButton from "./EnvironmentButton";
import PlantCard from "./PlantCard";

import {
  Body,
  ButtonList,
  Container,
  PlantList,
  Subtitle,
  TextWrapper,
  Title,
} from "./styles";

function Home() {
  const [environments, setEnvironments] = useState<Environment[]>();
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>("all");
  const [plants, setPlants] = useState<Plant[]>();
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>();
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    (async () => {
      const data = await fetchPlantData();
      setPlants(data);
      setFilteredPlants(data);
      setLoading(false);
    })();
  }, []);

  const handleEnvironmentSelection = (env: string): void => {
    setSelectedEnvironment(env);

    if (env === "all") return setFilteredPlants(plants);

    // #TODO: Melhorar performance se der
    const filtered = plants?.filter(plant => plant.environments.includes(env));

    setFilteredPlants(filtered);
  };

  if (loading) return <Load />;

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
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              onPress={() => handleEnvironmentSelection(item.key)}
              active={selectedEnvironment === item.key}
            />
          )}
        />

        <PlantList
          showsVerticalScrollIndicator={false}
          data={filteredPlants}
          renderItem={({ item }) => <PlantCard data={item} />}
          numColumns={2}
        />
      </Body>
    </Container>
  );
}

export default Home;
