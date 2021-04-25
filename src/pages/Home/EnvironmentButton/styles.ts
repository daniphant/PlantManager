import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { colors, fonts } from "../../../config/constants";

interface ContainerProps {
  active?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  background-color: ${colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;
  ${({ active }) => {
    if (active) return `background-color: ${colors.green_light};`;
  }};
`;

interface TitleProps {
  active?: boolean;
}

export const Title = styled.Text<TitleProps>`
  font-size: 16px
    ${({ active }) => {
      if (active)
        return `color: ${colors.green_dark}; font-family: ${fonts.heading};`;
      return `color: ${colors.heading}; font-family: ${fonts.text};`;
    }};
`;
