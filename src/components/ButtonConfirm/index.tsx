import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

import styles from "./styles";

type Prop = {
  children: string;
  isLoading?: boolean;
} & TouchableOpacityProps;

export default function ButtonConfirm({ children, isLoading, ...rest }: Prop) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.textButton}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
