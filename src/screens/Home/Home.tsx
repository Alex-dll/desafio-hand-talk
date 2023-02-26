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
import Box from "../../components/Box";
import ButtonConfirm from "../../components/ButtonConfirm";
import Cone from "../../components/Cone";
import Dodecahedron from "../../components/Dodecahedron";
import InputColor from "../../components/InputColor";
import { useColorsStore } from "../../store/colorsStore";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const { height, width } = useWindowDimensions();
  const canvasHeight = (75 / 100) * height;

  const [colors, setColors] = useColorsStore((state) => [
    state.colors,
    state.setColors,
  ]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaColors),
    mode: "onSubmit",
    defaultValues: {
      cube: colors.cube,
      cone: colors.cone,
      dodecahedron: colors.dodecahedron,
    },
  });

  const onSubmit = async () => {
    console.log(errors);
    await handleSubmit(
      async ({ cube, cone, dodecahedron }) => {
        setIsLoading(true);
        await setColors({ cube, cone, dodecahedron });
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

        <View style={styles.wrapper}>
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
                  placeholder="Cor do Cubo"
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
                  placeholder="Cor do Dodecaedro"
                />
              )}
            />
          </View>
          <ButtonConfirm
            onPress={onSubmit}
            disabled={isLoading}
            isLoading={isLoading}
          >
            Aplicar
          </ButtonConfirm>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
