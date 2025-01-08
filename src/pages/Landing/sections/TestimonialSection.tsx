import TestimonialCard from "../components/TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="my-12">
      <h1 className="text-center text-5xl font-bold mb-12">
        From Others Who Cared
      </h1>
      <div className="w-full bg-purple pb-12 ">
        <div className="w-[85%] mx-auto grid grid-cols-3 gap-4 ">
          <TestimonialCard
            img="/images/testimonial_one.png"
            testimonial="Thanks to PickNcare, we found the perfect caregiver for our son nearby. The platform was so easy to use, and met our needs perfectly!"
            author="Sarah M. | Denver, CO"
          />
          <TestimonialCard
            img="/images/testimonial_two.png"
            testimonial="PickNcare made finding a reliable caregiver stress-free. Thematching saved us so much time, and the secure payment system gave us peace of mind."
            author="John D. | Austin, TX"
          />
          <TestimonialCard
            img="/images/testimonial_three.png"
            testimonial="We found our amazing nanny through PickNCare. It has reduced stress  tremendously and made it so I can do my job well and reliably."
            author="Alexandra R. | Cambridge, MA"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
