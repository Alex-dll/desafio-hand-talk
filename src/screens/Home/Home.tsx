import { yupResolver } from "@hookform/resolvers/yup";
import { Canvas } from "@react-three/fiber";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  useWindowDimensions,
  View,
} from "react-native";

import styles from "./styles";
import { schemaColors } from "./validation";

import Box from "~/components/Box";
import ButtonConfirm from "~/components/ButtonConfirm";
import Cone from "~/components/Cone";
import Dodecahedron from "~/components/Dodecahedron";
import InputColor from "~/components/InputColor";
import useShowKeyboard from "~/hooks/useShowKeyboard";
import { useAuthStore } from "~/store/authStore";
import { useColorsStore } from "~/store/colorsStore";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const { height, width } = useWindowDimensions();
  const canvasHeight = (75 / 100) * height;

  const [colors, setColors] = useColorsStore((state) => [
    state.colors,
    state.setColors,
  ]);

  const { showKeyboard } = useShowKeyboard();

  const user = useAuthStore((state) => state.auth);

  const userId = user.currentUser.uid;

  const { control, handleSubmit, setValue, setFocus, reset } = useForm({
    resolver: yupResolver(schemaColors),
    defaultValues: {
      cube: "",
      cone: "",
      dodecahedron: "",
    },
  });

  const onSubmit = async () => {
    await handleSubmit(
      async ({ cube, cone, dodecahedron }) => {
        setIsLoading(true);
        await setColors({ userId, cube, cone, dodecahedron });
        reset();
        setIsLoading(false);
      },
      () => Alert.alert("Erro", "Verifique a cor que esta tentando alterar")
    )();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Canvas style={{ height: canvasHeight, width }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Box position={[0, +1.5, 0]} color={colors.cube} />
          <Cone position={[0, 0, 0]} color={colors.cone} />
          <Dodecahedron position={[0, -1.5, 0]} color={colors.dodecahedron} />
        </Canvas>

        <View style={[styles.wrapper, { marginBottom: showKeyboard ? 16 : 0 }]}>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="cube"
              render={({ field: { onBlur, onChange, value, ref } }) => (
                <InputColor
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                  onChangeText={(text) => setValue("cube", text)}
                  keyboardType="default"
                  placeholder="Cor do Cubo"
                  accessibilityLabel="Cor do cubo"
                  returnKeyType="next"
                />
              )}
            />

            <Controller
              control={control}
              name="cone"
              render={({ field: { onBlur, onChange, value, ref } }) => (
                <InputColor
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                  onChangeText={(text) => setValue("cone", text)}
                  placeholder="Cor do Cone"
                  accessibilityLabel="Cor do cone"
                  returnKeyType="next"
                />
              )}
            />

            <Controller
              control={control}
              name="dodecahedron"
              render={({ field: { onBlur, onChange, value, ref } }) => (
                <InputColor
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                  onChangeText={(text) => setValue("dodecahedron", text)}
                  placeholder="Cor do Dode..."
                  accessibilityLabel="Cor do dodecaedro"
                  returnKeyType="next"
                />
              )}
            />
          </View>
          <ButtonConfirm
            onPress={onSubmit}
            disabled={isLoading}
            isLoading={isLoading}
            accessibilityLabel="Aplicar novas cores"
            accessibilityHint="Botão que confirma as novas cores nos objetos"
          >
            Aplicar novas cores
          </ButtonConfirm>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
