import React from "react";
import type { RefCallBack } from "react-hook-form";
import { TextInput } from "react-native";
import type { TextInputProps } from "react-native";

import { styles } from "./styles";

type Props = {
  ref?: RefCallBack;
} & TextInputProps;

function InputColor({ ref, ...rest }: Props) {
  return (
    <TextInput
      ref={ref}
      {...rest}
      style={styles.inputContainer}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="default"
    />
  );
}

export default InputColor;
