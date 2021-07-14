import React from "react";
import image from "../../../img/productDay/garl_1.png";
import "./productDay.sass";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useRef } from "react";
export const ProductDay: React.FC = () => {
  const [isVis, setIsVis] = useState<boolean>(false);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
  }, []);
  const testCallbackFunc = useCallback((entrys: any) => {
    console.log(entrys);
    const [entry] = entrys;
    if (entry.isIntersecting) {
      setIsVis(entry.isIntersecting);
    }
  }, []);

  const isRef: any = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(testCallbackFunc, options);

    if (isRef !== null) {
      let current = isRef.current;
      if (current) observer.observe(current);
      return () => {
        if (current) observer.unobserve(current);
      };
    }
  }, [testCallbackFunc, options]);
  return (
    <div className="product-day" ref={isRef}>
      <div className={`image-wrapper ${isVis ? "vis-active" : ""}`}>
        <div className="back-wrapp">
          <div className="block-bg">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="text-composition">
        <h2 className="h2">Скидка дня</h2>
        <p className="desc-product">
          Растительный препарат с профилактическим и оздоравливающим эффектом,
          хорошо переносится и безопасен для организма, не оказывает токсической
          нагрузки при длительном применении, является надежной помощью при
          общем укреплении организма. Обладает атеросклеротическим,
          антиоксидантным, гипоксантным, онкостатическим, желчегонным,
          иммуномодулирующим и гепатопротекторным действием.
        </p>
      </div>
    </div>
  );
};
