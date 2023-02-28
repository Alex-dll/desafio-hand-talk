import { StyleSheet } from "react-native";

import colors from "~/constants/colors";

const styles = StyleSheet.create({
  textInputArea: {
    paddingVertical: 15,
  },
  textInput: {
    color: "#333",
    fontSize: 16,
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
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 2,
  },
  wrongIndicator: {
    color: "red",
    paddingTop: 4,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 2,
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
