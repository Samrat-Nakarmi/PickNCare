
type Props = {
  img: string;
  testimonial: string;
  author: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="w-full relative">
      <div className="">
        <img src={props.img} alt="" className="w-[90%] mx-auto" />
      </div>
      <div className="bg-white text-purple p-4 absolute bottom-0 rounded-[10px]">
        <p className="mb-4"> {props.testimonial}</p>
        <p className="font-bold">{props.author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
