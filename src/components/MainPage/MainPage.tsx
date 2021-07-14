import React from "react";
import { AboutUsComposition } from "../AboutUsComposition/AboutUsComposition";
import { AdvantagesComposition } from "../AdvantagesComposition/AdvantagesComposition";
import { ListAboutGetComposition } from "../ListAboutGetComposition/ListAboutGetComposition";
import { StartPathComposition } from "../StartPathComposition/StartPathComposition";
import { BlockContent } from "./BlockContent/BlockContent";
import { MainComposition } from "./MainComposition/MainComposition";
import { ProductDay } from "./ProductDay/ProductDay";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <MainComposition />
      <ProductDay />
      <BlockContent />
      <StartPathComposition />
      <AboutUsComposition />
      <ListAboutGetComposition />
      <StartPathComposition />
      <AdvantagesComposition />
    </div>
  );
};
