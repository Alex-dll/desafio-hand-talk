import { NativeStackNavigationProp } from "@react-navigation/native-stack";

declare global {
  export type SignInStackParamsList = {
    login: undefined;
  };

  export type SignInStackNavigatorProps = NativeStackNavigationProp<
    SignInStackParamsList,
    "login"
  >;
}
