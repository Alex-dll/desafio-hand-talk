import type { TextInputProps } from "react-native/types";

export type InputValueRef = {
  value: string;
  focus?: () => void;
  blur: () => void;
  setValue?: (value: string) => void;
} & TextInputProps;
