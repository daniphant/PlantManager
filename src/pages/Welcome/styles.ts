import styled from "styled-components/native";

import { Button } from "react-native-paper";
import { Dimensions } from "react-native";

import { colors, fonts } from "../../config/contants";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const PaddingWrapper = styled.View`
  flex: 1;
  padding: 0px 20px;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: 800;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 38px;
`;

export const WelcomeImg = styled.Image`
  height: ${Dimensions.get("window").width * 0.7};
`;

export const FootNote = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const ContinueButton = styled(Button)`
  background-color: ${colors.green};
  border-radius: 6px;
`;
