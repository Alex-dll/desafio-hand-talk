import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    paddingVertical: 10,
  },
  areaTitle: {
    marginBottom: 24,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },

  areaButtonConfirm: {
    marginTop: 20,
  },
});

export default styles;
