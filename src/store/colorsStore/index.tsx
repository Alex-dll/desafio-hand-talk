import { create } from "zustand";

type useColorsStoreProps = {
  colors: {
    cube: string;
    cone: string;
    dodecahedron: string;
  };
  setColors: (colors: {
    cube?: string;
    cone?: string;
    dodecahedron?: string;
  }) => void;
};

export const useColorsStore = create<useColorsStoreProps>((set) => ({
  colors: {
    cube: "red",
    cone: "yellow",
    dodecahedron: "green",
  },
  setColors: (colors) => {
    set((state) => ({ colors: { ...state.colors, ...colors } }));
  },
}));
