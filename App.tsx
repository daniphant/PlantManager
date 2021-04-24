/* eslint-disable camelcase */
import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import { paperTheme } from "./src/config/constants";
import Welcome from "./src/pages/AllGood";

function App() {
  const [isFontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!isFontsLoaded) return <AppLoading />;

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style="auto" />
      <Welcome />
    </PaperProvider>
  );
}

export default App;
