import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

export type InputValueRef = {
  value: string;
  focus?: () => void;
  blur: () => void;
  setValue?: (value: string) => void;
} & TextInputProps;

type ITextInputProps = {
  label: string;
} & TextInputProps;

const TextInputWithLabel: React.ForwardRefRenderFunction<
  InputValueRef,
  ITextInputProps
> = ({ label, onChangeText, ...rest }: ITextInputProps, ref) => {
  const internalRef = useRef<TextInput>(null);
  const [text, setText] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text]
  );

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        ref={internalRef}
        value={text}
        onChangeText={(value: string) => {
          setText(value);
          onChangeText?.(value);
        }}
        {...rest}
      />
    </View>
  );
};

export default forwardRef(TextInputWithLabel);
