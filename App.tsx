import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { paperTheme } from "./src/config/contants";

import Welcome from "./src/pages/Welcome";

function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style="auto" />
      <Welcome />
    </PaperProvider>
  );
}

export default App;
