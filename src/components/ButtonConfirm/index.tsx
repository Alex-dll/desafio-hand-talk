import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from "./styles";

type IButtonProps = {
  children: string;
} & TouchableOpacityProps;

export default function ButtonConfirm({ children, ...rest }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
}
