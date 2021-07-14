import React from "react";
import img1 from "../../../img/blockImage/1.png";
export const ItemBox: React.FC = () => {
  return (
    <div className="item-box">
      <div className="front-block">
        <img src={img1} alt="itemblock" />
        <div className="text-logo">
          <h4 className="h4">Lorem, ipsum.</h4>
        </div>
      </div>
      <div className="desc-block">
        <img src={img1} alt="itemblock" />
        <div className="text-compose">
          <h4 className="h4">Lorem, ipsum.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="/#">Подробнее</a>
        </div>
      </div>
    </div>
  );
};
