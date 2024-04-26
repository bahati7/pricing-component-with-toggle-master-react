import React from "react";

const Toggle = ({ handleToggle }) => {
  return (
    <div className="flex justify-center items-center max-w-[50rem] mx-auto mb-3 lg:mb-8 md:text-center">
      <span className="text-xs font-bold"> Annually</span>

      <label className="inline-flex items-center cursor-pointer px-[1rem]">
        <input type="checkbox" className="sr-only peer" />
        <div
          onClick={handleToggle}
          className="relative w-11 h-6 bg-blue-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-700 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-blue-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-blue-700 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-blue-700 peer-checked:bg-blue-700"
        ></div>
      </label>

      <span className="text-xs font-bold"> Monthly</span>
    </div>
  );
};

export default Toggle;
