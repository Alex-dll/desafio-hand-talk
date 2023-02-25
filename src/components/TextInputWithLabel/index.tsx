import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

import styles from "./styles";

export type InputValueRef = {
  value: string;
  focus?: () => void;
  blur: () => void;
  setValue?: (value: string) => void;
} & TextInputProps;

type ITextInputProps = {
  label: string;
  wrongMessage?: string;
} & TextInputProps;

const TextInputWithLabel: React.ForwardRefRenderFunction<
  InputValueRef,
  ITextInputProps
> = (
  { label, onChangeText, wrongMessage, onBlur, ...rest }: ITextInputProps,
  ref
) => {
  const internalRef = useRef<TextInput>(null);
  const [text, setText] = useState("");

  const [isFocus, setIsFocus] = useState(false);

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

  const onFocusInput = isFocus && styles.onFocusInput;
  const onWrongInput = wrongMessage && styles.onWrongInput;
  const onFocusLabel = isFocus && styles.onFocusLabel;

  return (
    <View style={styles.textInputArea}>
      <Text style={[styles.label, onFocusLabel]}>{label}</Text>
      <TextInput
        ref={internalRef}
        style={[styles.textInput, onFocusInput, onWrongInput]}
        value={text}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={(value: string) => {
          setText(value);
          onChangeText?.(value);
        }}
        {...rest}
      />
      {wrongMessage && (
        <Text style={styles.wrongIndicator}>{wrongMessage}</Text>
      )}
    </View>
  );
};

export default forwardRef(TextInputWithLabel);
