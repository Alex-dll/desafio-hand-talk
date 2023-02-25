import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Login } from "../../screens/Login";

const Stack = createNativeStackNavigator<SignInStackParamsList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
