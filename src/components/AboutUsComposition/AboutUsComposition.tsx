import React from "react";
import "./about.sass";
import video from '../../img/techo.jpg';
export const AboutUsComposition: React.FC = () => {
  return (
    <div className="about-composition">
        <div className="items">
          <div className="item">
            <img src={video} alt="" />
          </div>
          <div className="item">
            <h1>О технологии</h1>
            <p>Уникальная технология, которая основывается на получении фито-молекулярной жидкости из живых частей лекарственных  растений  методом вакуумной экстракции при минимальной температуре 37°С, которая  имеет в своем составе незмененные   растительные клетки  с  их сохраненными  лечебными свойствами.</p>
          </div>
        </div>
    </div>
  );
};
 


