import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';

interface SidebarContextData {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  handleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData
);

const SidebarProvider: React.FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = useCallback(() => {
    setIsSidebarOpen(prevState => !prevState);
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, handleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

function useSidebar(): SidebarContextData {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }

  return context;
}

export { SidebarProvider, useSidebar };
