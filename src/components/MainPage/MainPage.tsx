import React from "react";
import { BlockContent } from "./BlockContent/BlockContent";
import { MainComposition } from "./MainComposition/MainComposition";
import { ProductDay } from "./ProductDay/ProductDay";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <MainComposition />
      <ProductDay />
      <BlockContent />
    </div>
  );
};
