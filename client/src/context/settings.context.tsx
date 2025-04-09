import { useState, createContext, useContext } from "react";

type SettingsContextProviderProps = {
  children: React.ReactNode;
};

type Settings = {
  selectedClass: number | null;
  setSelectedClass: React.Dispatch<React.SetStateAction<number | null>>;
};

const SettingsContext = createContext<Settings | null>(null);

export default function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [selectedClass, setSelectedClass] = useState<number | null>(1);

  return (
    <SettingsContext.Provider
      value={{
        selectedClass,
        setSelectedClass,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error(
      "useSettingsContext muss innerhalb <SettingsContext.Provider> genutzt werden."
    );

  return context;
}
