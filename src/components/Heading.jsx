import React from "react";

const Heading = ({ className, title }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-3 lg:mb-8 md:text-center`}
    >
      {title && <h2 className="h4 font-bold">{title}</h2>}
    </div>
  );
};

export default Heading;
