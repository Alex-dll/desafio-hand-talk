import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, SafeAreaView, Alert } from "react-native";

import styles from "./styles";
import { schemaLogin } from "./validation";
import ButtonConfirm from "../../components/ButtonConfirm";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function Login() {
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    await handleSubmit(
      ({ email, password }) => {
        console.log(email, password);
      },
      () =>
        Alert.alert(
          "Erro ao realizar login, verifique seus dados ou tente novamente mais tarde"
        )
    )();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitle}>
        <Text style={styles.title}>Desafio Hand Talk</Text>
      </View>

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
            />
          )}
        />

        <ButtonConfirm onPress={onSubmit}>Entrar</ButtonConfirm>
      </View>
    </SafeAreaView>
  );
}
