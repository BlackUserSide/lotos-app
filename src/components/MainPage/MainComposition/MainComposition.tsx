import React from "react";
import { Header } from "../../Header/Header";
import downArrow from "../../../img/arrow-down.png";
import "./maincomposition.sass";
//import videoBg from '../../../img/video.mp4';

export const MainComposition: React.FC = () => {
  return (
    <div className="main-composition">
      
      <Header />
      <div className="main-text-composition">
        <h1 className="h1">Lotus</h1>
        <div className="second-logo">
          <p>«Лучше предупредить, чем лечить!»</p>
        </div>
        <p className="desc-about">
          Почніть свій шлях до свободи і фінансового успіху!
        </p>
      </div>
      <div className="arrow-down">
        <p>Почати шлях</p>
        <img src={downArrow} alt="" />
      </div>
    </div>
  );
};
