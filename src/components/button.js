import React from "react";
function Button({ linkRef, cls, children }) {
  return (
    <a href={linkRef} className={cls}>
      {children}
    </a>
  );
}

export default Button;
