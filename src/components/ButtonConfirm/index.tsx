import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type IButtonProps = {
  children: string;
} & TouchableOpacityProps;

export default function ButtonConfirm({ children, ...rest }: IButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
