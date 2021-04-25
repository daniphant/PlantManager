import React, { useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";

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

  const navigation = useNavigation();

  const handleContinueButtonPress = () => {
    navigation.navigate("AllGood");
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            onPress={handleContinueButtonPress}
            disabled={!name}
          >
            Continuar
          </ContinueButton>
        </KAV>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default SignUp;
