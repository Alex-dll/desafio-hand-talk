import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, SafeAreaView, Image } from "react-native";

import styles from "./styles";
import { schemaLogin } from "./validation";
import ButtonConfirm from "../../components/ButtonConfirm";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
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
      signIn(email, password);
    })();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitle} />
      <Image
        source={require("../../assets/handtalklogo/image.png")}
        style={styles.image}
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
            />
          )}
        />

        <View style={styles.areaButtonConfirm}>
          <ButtonConfirm onPress={onSubmit}>Entrar</ButtonConfirm>
        </View>
      </View>
    </SafeAreaView>
  );
}
