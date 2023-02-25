import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator<SignedInParamsList>();

const SignedInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={() => null} />
    </Stack.Navigator>
  );
};

export default SignedInNavigator;
