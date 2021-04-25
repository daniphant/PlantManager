import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import SignUp from "../pages/SignUp";
import AllGood from "../pages/AllGood";

import { colors } from "../config/constants";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
  >
    <StackRoutes.Screen name="Welcome" component={Welcome} />
    <StackRoutes.Screen name="SignUp" component={SignUp} />
    <StackRoutes.Screen name="AllGood" component={AllGood} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
