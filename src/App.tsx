import React from "react";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import "./App.sass";

export const App: React.FC = () => {
  return (
    <div className="main-app-wrapper">
      <RoutesContext.Provider value={useRoutes}>
        <MainRoutes />
      </RoutesContext.Provider>
    </div>
  );
};
