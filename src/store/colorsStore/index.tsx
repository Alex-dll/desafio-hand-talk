import { Alert } from "react-native";
import { create } from "zustand";

import { getUserColorsFirebaseData } from "../../functions/getUserColorsFirebaseData";
import { setColorsToFirebaseData } from "../../functions/setColorsToFirebaseData";
import type { ColorsProps } from "../../types/colors";

type useColorsStoreProps = {
  colors: ColorsProps;
  setColors: (colors: ColorsProps) => Promise<void>;
  getColors: (userId: string) => Promise<void>;
};

export const useColorsStore = create<useColorsStoreProps>((set, get) => ({
  colors: {
    userId: null,
    cube: "red",
    cone: "yellow",
    dodecahedron: "green",
  },
  getColors: async (userId) => {
    await getUserColorsFirebaseData({ userId }).then((colors) =>
      set(() => ({ colors: { userId, ...colors } }))
    );
  },
  setColors: async (colors) => {
    for (const key in colors) {
      if (colors[key] === "") {
        delete colors[key];
      }
    }

    set((state) => ({ colors: { ...state.colors, ...colors } }));

    await setColorsToFirebaseData(get().colors).catch((error) =>
      Alert.alert("Erro", error.message)
    );
  },
}));
