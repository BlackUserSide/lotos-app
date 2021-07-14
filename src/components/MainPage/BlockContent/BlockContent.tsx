import React from "react";
import { ItemBox } from "./ItemBox";
import "./blockContent.sass";
export const BlockContent: React.FC = () => {
  return (
    <div className="block-content">
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
    </div>
  );
};
