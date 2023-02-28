import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useShowKeyboard = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setShowKeyboard(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setShowKeyboard(false);
    });
  }, []);

  return { showKeyboard };
};

export default useShowKeyboard;
