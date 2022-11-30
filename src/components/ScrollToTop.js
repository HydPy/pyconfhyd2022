import { ArrowUpCircle } from "react-feather";

import React, { useState, useEffect } from "react";
import * as scrollToTopStyles from "../assets/stylesheets/scroll-to-top.module.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowTopBtn(false) : setShowTopBtn(true);
    });
  }, []);
	
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={scrollToTopStyles.scrollToTop} hidden={showTopBtn}>
      <ArrowUpCircle className={scrollToTopStyles.goToTopButton} onClick={goToTop} />
    </div>
  );
};

export default ScrollToTop;