import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  SafeAreaView,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import styles from "./styles";
import { schemaLogin } from "./validation";
import ButtonConfirm from "../../components/ButtonConfirm";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import colors from "../../constants/colors";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = useAuthStore((state) => state.signIn);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    await handleSubmit(({ email, password }) => {
      setIsLoading(true);
      signIn(email, password).finally(() => setIsLoading(false));
    })();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.main["orange"]} />

        <View style={styles.areaTitle} />
        <Image
          source={require("../../assets/handtalklogo/image.png")}
          style={styles.image}
          accessible
          accessibilityLabel="Logo da HandTalk"
          accessibilityHint="Logo da HandTalk para o aplicativo"
        />

        <View>
          <Controller
            control={control}
            name="email"
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextInputWithLabel
                ref={ref}
                label="Email:"
                placeholder="joaodasilva@examplo.com"
                onChangeText={(text) => setValue("email", text)}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                wrongMessage={errors?.email?.message}
                accessibilityLabel="Digite seu email"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextInputWithLabel
                ref={ref}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
                onChangeText={(text) => setValue("password", text)}
                label="Senha:"
                placeholder="******"
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
                wrongMessage={errors?.password?.message}
                accessibilityLabel="Digite sua senha"
              />
            )}
          />

          <View style={styles.areaButtonConfirm} accessible={false}>
            <ButtonConfirm
              accessible
              accessibilityLabel="Entrar"
              accessibilityHint="Botão para entrar"
              onPress={onSubmit}
              disabled={isLoading}
              isLoading={isLoading}
            >
              Entrar
            </ButtonConfirm>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
