import QuestionIcon from "@/components/icons/QuestionIcon";

type Props = {
  title: string;
  description_one: string;
  description_two: string;
  light?: boolean;
};

const AboutCard = (props: Props) => {
  return (
    <div
      className={`w-[72%] flex flex-col gap-6 rounded-[25px] min-h-[505px] py-12 px-16 ${
        props.light
          ? "border-2 border-purple bg-white text-black mr-auto"
          : "bg-purple text-white ml-auto"
      }`}
    >
      <div>
        <QuestionIcon />
      </div>
      <div>
        <h3 className="text-3xl font-bold">{props.title}</h3>
      </div>
      <div>
        <p className="">{props.description_one}</p>
      </div>
      <div>
        <p className="">{props.description_two}</p>
      </div>
    </div>
  );
};

export default AboutCard;
