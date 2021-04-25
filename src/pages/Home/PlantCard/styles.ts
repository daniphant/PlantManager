import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { colors, fonts } from "../../../config/constants";

export const Container = styled(RectButton)`
  flex: 1;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0px;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const PlantLogo = styled(SvgFromUri)``;
