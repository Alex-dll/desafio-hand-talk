import React, { useEffect } from "react";

import SignInNavigator from "./SignIn";
import SignedInNavigator from "./SignedIn";
import { useAuthStore } from "~/store/authStore";
import { useColorsStore } from "~/store/colorsStore";

const Routes: React.FC = () => {
  const auth = useAuthStore((state) => state.auth);
  const [getColors] = useColorsStore((state) => [state.getColors]);

  const userId = auth?.currentUser?.uid;

  useEffect(() => {
    (async () => {
      if (userId) {
        await getColors(userId);
      }
    })();
  }, [userId]);

  return auth ? <SignedInNavigator /> : <SignInNavigator />;
};

export default Routes;
