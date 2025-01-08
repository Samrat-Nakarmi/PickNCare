import { ReactElement } from "react";

type Props = {
  svg: ReactElement;
  description: string;
};

const SafetyCard = (props: Props) => {
  return (
    <div className="w-[90%] flex border-2 gap-6 border-purple rounded-[10px] py-3 px-4 text-brown items-center">
      <div className="w-fit">{props.svg}</div>
      <div className="w-full">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SafetyCard;
