import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SidebarProvider } from './hooks/sidebar';
import { TooltipProvider } from './hooks/tooltip';

import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <SidebarProvider>
          <TooltipProvider>
            <Layout />
          </TooltipProvider>
        </SidebarProvider>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export default App;
