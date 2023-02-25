import { NativeStackNavigationProp } from "@react-navigation/native-stack";

declare global {
  export type SignInStackParamsList = {
    onBoarding: undefined;
    login: undefined;
  };

  export type SignInStackNavigatorProps = NativeStackNavigationProp<
    SignInStackParamsList,
    "onBoarding"
  >;
}
