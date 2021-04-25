import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { colors, fonts } from "../../config/constants";

export const Container = styled.View`
  width: ${Dimensions.get("window").width}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const TextWrapper = styled.Text``;

export const Hello = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Name = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
  text-transform: capitalize;
`;

export const ProfilePicture = styled.Image`
  border-radius: 40px;
`;
