import React from "react";
import { useNavigation } from "@react-navigation/core";

import welcomeImg from "../../assets/watering.png";

import {
  Container,
  WelcomeImg,
  Header,
  FootNote,
  ContinueButton,
  PaddingWrapper,
} from "./styles";

function Welcome() {
  const navigation = useNavigation();

  const handleContinueButtonPress = () => {
    navigation.navigate("SignUp");
  };

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
          onPress={handleContinueButtonPress}
        >
          Continuar
        </ContinueButton>
      </PaddingWrapper>
    </Container>
  );
}

export default Welcome;
