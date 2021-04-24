import React from "react";

import {
  Emoji,
  Container,
  KAV,
  Header,
  Subtitle,
  ConfirmButton,
  TextWrapper,
  PaddingWrapper,
} from "./styles";

function AllGood() {
  return (
    <Container>
      <KAV>
        <PaddingWrapper>
          <Emoji>😁</Emoji>
          <TextWrapper>
            <Header>Tudo certo! </Header>
            <Subtitle>
              Agora vamos te ajudar a cuidar da suas plantinhas com muito
              carinho
            </Subtitle>
          </TextWrapper>
          <ConfirmButton theme={{ colors: { primary: "#fff" } }}>
            Começar
          </ConfirmButton>
        </PaddingWrapper>
      </KAV>
    </Container>
  );
}

export default AllGood;
