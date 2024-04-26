import React from "react";

const Section = ({ className, id, customPaddins, children }) => {
  return (
    <div
      id={id}
      className={`relative ${customPaddins || `py-10 lg:py-16 xl:py-2`} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
