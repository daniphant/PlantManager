import React from "react";

import {
  Container,
  WelcomeImg,
  Header,
  FootNote,
  ContinueButton,
  PaddingWrapper,
} from "./styles";

import welcomeImg from "../../assets/watering.png";

function Welcome() {
  return (
    <Container>
      <PaddingWrapper>
        <Header>
          Gerencie{"\n"}suas plantas de{"\n"} forma fácil
        </Header>

        <WelcomeImg resizeMode="contain" source={welcomeImg} />

        <FootNote>
          Não esqueca mais de regar suas plantas.{"\n"}Nós cuidamos de lembrar
          você sempre que precisar.
        </FootNote>

        <ContinueButton
          theme={{ colors: { primary: "#fff" } }}
          onPress={() => console.log("this")}
        >
          Continuar
        </ContinueButton>
      </PaddingWrapper>
    </Container>
  );
}

export default Welcome;
