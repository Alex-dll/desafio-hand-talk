import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { TextInput } from "react-native";
import type { TextInputProps } from "react-native";

import { styles } from "./styles";

import type { InputValueRef } from "~/types/inputText";

const InputColor: React.ForwardRefRenderFunction<
  InputValueRef,
  TextInputProps
> = ({ onChangeText, ...rest }, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState("");

  const internalRef = useRef<TextInput>(null);

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

  const styleFocus = isFocus && styles.inputFocus;

  return (
    <TextInput
      ref={internalRef}
      {...rest}
      style={[styles.inputContainer, styleFocus]}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="default"
      onChangeText={(value: string) => {
        setText(value);
        onChangeText?.(value);
      }}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    />
  );
};

export default forwardRef(InputColor);
