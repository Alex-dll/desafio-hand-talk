import { Auth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { create } from "zustand";

import { auth } from "../../configs/firebase";

type useAuthStoreProps = {
  auth: Auth;
  signIn: (email: string, password: string) => Promise<void>;
  SignOut: () => Promise<void>;
};

export const useAuthStore = create<useAuthStoreProps>((set) => ({
  auth: null,
  signIn: async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      set({ auth });
    } catch (error) {
      console.log(error);
    }
  },
  SignOut: async () => {
    try {
      await signOut(auth);
      set({ auth: null });
    } catch (error) {
      console.log(error);
    }
  },
}));
