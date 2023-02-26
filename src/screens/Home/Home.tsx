import { Canvas } from "@react-three/fiber";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  useWindowDimensions,
  View,
} from "react-native";

import styles from "./styles";
import Box from "../../components/Box";
import ButtonConfirm from "../../components/ButtonConfirm";
import Cone from "../../components/Cone";
import Dodecahedron from "../../components/Dodecahedron";
import InputColor from "../../components/InputColor";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const canvasHeight = (75 / 100) * height;

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Canvas style={{ height: canvasHeight, width }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Box position={[0, +1.5, 0]} color="red" />
          <Cone position={[0, 0, 0]} color="yellow" />
          <Dodecahedron position={[0, -1.5, 0]} color="green" />
        </Canvas>

        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <InputColor placeholder="Cor do Cubo" />
            <InputColor placeholder="Cor do Cone" />
            <InputColor placeholder="Cor do Dodecaedro" />
          </View>
          <ButtonConfirm>Aplicar</ButtonConfirm>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
