import React from "react";

type Props = {
  children: React.ReactNode;
  light?: boolean;
};

const Button = (props: Props) => {
  return (
    <div>
      <button
        className={`px-8 py-3 w-full rounded-[25px] ${
          props.light
            ? "border-2 border-purple bg-white"
            : "bg-yellow text-white"
        }`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
