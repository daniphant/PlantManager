import styled from "styled-components/native";

import { Button } from "react-native-paper";
import { colors, fonts } from "../../config/constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 64px;
  margin-bottom: 40px;
`;

export const PaddingWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const TextWrapper = styled.View``;

export const KAV = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled(Button)`
  margin-top: 40px;
  background-color: ${colors.green};
  border-radius: 6px;
`;

export const Header = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: 800;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-bottom: 10px;
  line-height: 38px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;
