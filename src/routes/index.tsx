import React from "react";

import SignInNavigator from "./SignIn";
import SignedInNavigator from "./SignedIn";
import { useAuthStore } from "../store/authStore";

const Routes: React.FC = () => {
  const auth = useAuthStore((state) => state.auth);

  return auth ? <SignedInNavigator /> : <SignInNavigator />;
};

export default Routes;
