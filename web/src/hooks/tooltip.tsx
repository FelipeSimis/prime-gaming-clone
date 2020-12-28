import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';

interface TooltipContextData {
  isShowingTip: boolean;
  setIsShowingTip: Dispatch<SetStateAction<boolean>>;
  handleTooltip: () => void;
}

const TooltipContext = createContext<TooltipContextData>(
  {} as TooltipContextData
);

const TooltipProvider: React.FC = ({ children }) => {
  const [isShowingTip, setIsShowingTip] = useState(false);

  const handleTooltip = useCallback(() => {
    setIsShowingTip(prevState => !prevState);
  }, []);

  return (
    <TooltipContext.Provider
      value={{ isShowingTip, setIsShowingTip, handleTooltip }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

function useTooltip(): TooltipContextData {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }

  return context;
}

export { TooltipProvider, useTooltip };
