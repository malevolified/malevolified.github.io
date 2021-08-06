import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../../../Hooks/useLocalStorage";

interface Secret {
  showSecret: boolean;
  setShowSecret: (value: boolean) => void;
}

const SHOW_SECRET_GUARIANS = "show_secret_guarians";

const SecretContext = createContext<Secret>({ showSecret: false, setShowSecret: () => {} });

export const SecretProvider: React.FC<{}> = ({ children }) => {
  const [showSecret, setShowSecret] = useLocalStorage<boolean>(SHOW_SECRET_GUARIANS, false);

  return (
    <SecretContext.Provider value={{ showSecret, setShowSecret }}>
      {children}
    </SecretContext.Provider>
  );
};

export function useSecret() {
  return useContext(SecretContext);
}
