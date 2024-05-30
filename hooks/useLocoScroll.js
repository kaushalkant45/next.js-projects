import { useEffect } from "react";

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    const scroll = require("locomotive-scroll").default;
    const scrollInstance = new scroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
