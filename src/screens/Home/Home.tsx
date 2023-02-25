import { Canvas } from "@react-three/fiber";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";

import styles from "./styles";
import Box from "../../components/Box";
import Cone from "../../components/Cone";
import Dodecahedron from "../../components/Dodecahedron";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const canvasHeight = (75 / 100) * height;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Canvas style={{ height: canvasHeight, width }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Box position={[0, +1.5, 0]} color="red" />
        <Cone position={[0, 0, 0]} color="yellow" />
        <Dodecahedron position={[0, -1.5, 0]} color="green" />
      </Canvas>
    </SafeAreaView>
  );
}
