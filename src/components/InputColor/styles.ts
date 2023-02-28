import { StyleSheet } from "react-native";

import colors from "~/constants/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 2,
  },
  inputFocus: {
    borderColor: colors.main["orange"],
    borderWidth: 2,
  },
});
