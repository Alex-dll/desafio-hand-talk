import React from "react";

import SignInNavigator from "./SignIn";
import SignedInNavigator from "./SignedIn";

const Routes: React.FC = () => {
  const isSignedIn = true;

  return isSignedIn ? <SignedInNavigator /> : <SignInNavigator />;
};

export default Routes;
