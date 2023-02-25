import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator<SignInStackParamsList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="onBoarding"
    >
      <Stack.Screen name="onBoarding" component={() => null} />
      <Stack.Screen name="login" component={() => null} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
