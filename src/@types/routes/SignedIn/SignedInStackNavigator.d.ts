import { NativeStackNavigationProp } from "@react-navigation/native-stack";

declare global {
  export type SignedInParamsList = {
    home: undefined;
  };

  export type SignedInStackNavigatorProps = NativeStackNavigationProp<
    SignedInParamsList,
    "home"
  >;
}
