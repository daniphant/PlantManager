import React, { useState } from "react";
import { Platform } from "react-native";

import {
  Container,
  ContinueButton,
  Emoji,
  Form,
  KAV,
  Label,
  NameInput,
} from "./styles";

function SignUp() {
  const [name, setName] = useState<string>();

  return (
    <Container>
      <KAV behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Form>
          <Label>
            <Emoji>{name ? "😄" : "😃"}</Emoji>
            {"\n"}Nos conte seu nome!
          </Label>
          <NameInput
            label="Como devemos te chamar?"
            value={name}
            onChangeText={(val: string) => setName(val)}
          />
        </Form>
        <ContinueButton
          theme={{ colors: { primary: "#fff" } }}
          onPress={() => console.log("this")}
          disabled={!name}
        >
          Continuar
        </ContinueButton>
      </KAV>
    </Container>
  );
}

export default SignUp;
