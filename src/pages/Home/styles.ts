import styled from "styled-components/native";
import { colors, fonts } from "../../config/constants";

export const Container = styled.View``;

export const Body = styled.View`
  padding: 0px 20px;
`;

export const TextWrapper = styled.View``;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const ButtonList = styled.FlatList`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PlantWrapper = styled.View``;

export const PlantList = styled.FlatList``;
