import styled from "styled-components/native";

import { Button, TextInput } from "react-native-paper";
import { Dimensions } from "react-native";
import { colors, fonts } from "../../config/constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const KAV = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const NameInput = styled(TextInput)`
  margin: 32px;
  width: ${Dimensions.get("window").width * 0.8}px;
`;

export const ContinueButton = styled(Button)`
  background-color: ${colors.green};
  border-radius: 6px;
`;
