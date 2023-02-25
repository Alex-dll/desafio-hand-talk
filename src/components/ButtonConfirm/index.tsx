import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface ITextInputProps extends TextInputProps {
  label: string;
}

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
