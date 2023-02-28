import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Home } from "~/screens/Home";

const Stack = createNativeStackNavigator<SignedInParamsList>();

const SignedInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default SignedInNavigator;
