import React from "react";
import { TextInput } from "react-native";
import type { TextInputProps } from "react-native";

import { styles } from "./styles";

type Props = {
  value?: string;
} & TextInputProps;

function InputColor({ ...rest }: Props) {
  return <TextInput {...rest} style={styles.inputContainer} />;
}

export default InputColor;
