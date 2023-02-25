import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.main["orange"],
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 45,
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default styles;
