import React from "react";

type Props = {
  svg: React.ReactNode;
  title: string;
  description: string;
  light?: boolean;
};

const WhyCard = (props: Props) => {
  return (
    <div
      className={`w-full h-[380px] rounded-[50px] py-8 px-20 text-center ${
        props.light
          ? "border-2 border-purple bg-white text-purple"
          : "bg-purple text-white"
      }`}
    >
      <div className="flex justify-center mb-6">{props.svg}</div>
      <h3 className="font-bold text-2xl mb-6">{props.title}</h3>
      <p className="text-lg">{props.description}</p>
    </div>
  );
};

export default WhyCard;
