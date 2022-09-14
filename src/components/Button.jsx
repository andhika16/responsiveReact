import React from "react";

const Button = ({ title, border, bg, hidden }) => {
  return (
    <button
      className={`${
        hidden ? "" : "w-[200px]"
      } py-3 px-6 m-2 text-[14px] font-normal font-semibold cursor-pointer ${border} ${bg}`}
    >
      {title}
    </button>
  );
};

export default Button;
