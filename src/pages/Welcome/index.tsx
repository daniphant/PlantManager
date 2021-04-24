import React from "react";

import {
  Container,
  WelcomeImg,
  Header,
  FootNote,
  ContinueButton,
} from "./styles";

import welcomeImg from "../../assets/watering.png";

function Welcome() {
  return (
    <Container>
      <Header>
        Gerencia{"\n"}suas plantas{"\n"}de forma fácil
      </Header>

      <WelcomeImg source={welcomeImg} />

      <FootNote>
        Não esqueca mais de regar suas plantas.{"\n"}Nós cuidamos de lembrar
        você sempre que precisar.
      </FootNote>

      <ContinueButton onPress={() => console.log("this")}>
        Continuar
      </ContinueButton>
    </Container>
  );
}

export default Welcome;
