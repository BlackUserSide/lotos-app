import React from "react";
import { Header } from "../Header/Header";
import downArrow from "../../img/arrow-down.png";
import "./maincomposition.sass";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useRef } from "react";
export const MainComposition: React.FC = () => {
  const [isVis, setIsVis] = useState<boolean>(false);
  console.log(isVis);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
  }, []);
  const testCallbackFunc = useCallback((entrys: any) => {
    const [entry] = entrys;
    setIsVis(entry.isIntersecting);
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
    <div className="main-composition">
      <Header />
      <div className="main-text-composition">
        <h1 className="h1">Lotus</h1>
        <div className="second-logo">
          <p>Lorem ipsum dolor sit amet</p>
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
