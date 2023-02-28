import { StyleSheet } from "react-native";

import colors from "~/constants/colors";

const styles = StyleSheet.create({
  textInputArea: {
    paddingVertical: 20,
  },
  textInput: {
    color: "#333",
    fontSize: 15,
    borderColor: "#aaa",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    height: 45,
  },
  label: {
    color: "#333",
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: "600",
  },
  wrongIndicator: {
    color: "red",
    paddingTop: 4,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: "600",
  },
  onFocusInput: {
    borderColor: colors.main["orange"],
    borderWidth: 2,
  },
  onFocusLabel: {
    color: colors.main["orange"],
  },

  onWrongInput: {
    borderColor: "red",
    borderWidth: 2,
  },
  onWrongLabel: {
    color: "red",
  },
});

export default styles;
