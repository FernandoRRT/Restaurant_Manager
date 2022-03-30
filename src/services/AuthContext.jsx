import React, { useContext } from "react";

export const AuthContext = React.createContext({
  user: {
    name: "Anônimo",
    email: "",
  },
  onSignOut: () => {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

