// hooks/useLocomotiveScroll.js
import { useEffect } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";

const useLocomotiveScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    const LocomotiveScroll = require("locomotive-scroll").default;

    const scrollEl = document.querySelector("[data-scroll-container]");

    if (scrollEl) {
      const scroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, [start]);
};

export default useLocomotiveScroll;
