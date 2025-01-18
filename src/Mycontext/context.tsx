import { createContext, ReactNode, useContext, useState } from "react";

interface Image {
  _id: string;
  url: string;
  alt: string;
}

interface AppContextType {
  images: Image[];
  isLoading: boolean;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: AppContextType;
}) => {
  const [isLoading] = useState(false); // Simulate loading state if needed

  return (
    <AppContext.Provider value={{ ...value, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};