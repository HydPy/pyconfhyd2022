import React, { useState, useEffect } from "react";
import * as scrollToTopStyles from "../assets/stylesheets/scroll-to-top.module.css";
import { ArrowUpCircle } from "react-feather";
import useScrollPosition from "./../hooks/use-scroll-position";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    scrollPosition > 500 ? setShowTopBtn(true) : setShowTopBtn(false);
  }, [scrollPosition]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={scrollToTopStyles.scrollToTop} hidden={!showTopBtn}>
      <ArrowUpCircle
        className={scrollToTopStyles.goToTopButton}
        onClick={goToTop}
      />
    </div>
  );
};

export default ScrollToTop;
