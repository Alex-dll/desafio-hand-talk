import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

type ITextInputProps = {
  label: string;
} & TextInputProps;

export default function TextInputWithLabel({
  label,
  ...rest
}: ITextInputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...rest} />
    </View>
  );
}
