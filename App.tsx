/* eslint-disable camelcase */
import "react-native-gesture-handler";
import React from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { paperTheme } from "./src/config/constants";

import Routes from "./src/routes";
import Home from "./src/pages/Home";

function App() {
  const [isFontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!isFontsLoaded) return <AppLoading />;

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style="auto" />
      {/* <Routes /> */}
      <Home />
    </PaperProvider>
  );
}

export default App;
