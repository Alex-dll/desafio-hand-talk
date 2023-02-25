import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator<SignInStackParamsList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" component={() => null} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
