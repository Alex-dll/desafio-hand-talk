import React, { useState, useCallback } from "react";
import { View, Text, SafeAreaView } from "react-native";

import styles from "./styles";
import ButtonConfirm from "../../components/ButtonConfirm";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTryLogin = useCallback(() => {
    console.log(email, password);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>

      <View>
        <TextInputWithLabel
          label="Email:"
          placeholder="joaodasilva@examplo.com"
          onChangeText={setEmail}
        />
        <TextInputWithLabel
          label="Senha:"
          placeholder="******"
          secureTextEntry
          onChangeText={setPassword}
        />

        <ButtonConfirm onPress={handleTryLogin}>Entrar</ButtonConfirm>
      </View>
    </SafeAreaView>
  );
}
