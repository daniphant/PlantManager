import React from "react";

import profile from "../../assets/profile-example.png";

import { Container, TextWrapper, Hello, Name, ProfilePicture } from "./styles";

function Header() {
  const username;

  return (
    <Container>
      <TextWrapper>
        <Hello>Olá,{"\n"}</Hello>
        <Name>{username || "usuário"}</Name>
      </TextWrapper>

      <ProfilePicture source={profile} />
    </Container>
  );
}

export default Header;
