import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { colors } from "../../config/contants";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: 800;
  color: ${colors.heading};
`;

export const WelcomeImg = styled.Image``;

export const FootNote = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
`;

export const ContinueButton = styled(Button)`
  background-color: ${colors.green};
  border-radius: 6px;
`;
