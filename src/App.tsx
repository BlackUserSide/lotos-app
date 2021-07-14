import React from "react";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import "./App.sass";
import {AboutUsComposition} from './components/AboutUsComposition/AboutUsComposition';
import {StartPathComposition} from './components/StartPathComposition/StartPathComposition';
import {AdvantagesComposition} from './components/AdvantagesComposition/AdvantagesComposition';
import {ListAboutGetComposition} from './components/ListAboutGetComposition/ListAboutGetComposition';

export const App: React.FC = () => {
  return (
    <div className="main-app-wrapper">
      <RoutesContext.Provider value={useRoutes}>
        <MainRoutes />
        <StartPathComposition/>
        <AboutUsComposition/>
        <ListAboutGetComposition/>
        <StartPathComposition/>
        <AdvantagesComposition/>
      </RoutesContext.Provider>
    </div>
  );
};
