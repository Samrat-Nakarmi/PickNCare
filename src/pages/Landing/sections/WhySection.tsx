import WhyCard from "../components/WhyCard";
import PersonalizedIcon from "@/components/icons/PersonalizedIcon";
import CertifiedIcon from "@/components/icons/CertifiedIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import ChildProgramIcon from "@/components/icons/ChildProgramIcon";

const WhySection = () => {
  return (
    <section className="w-[85%] my-16 mx-auto">
      <h1 className="text-center font-bold text-purple text-5xl mb-12">
        Why PickNCare?
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <WhyCard
          svg={<PersonalizedIcon />}
          title="Personalized Care Matching"
          description="Our AI-powered matching system ensures every child is paired with the right caregiver, tailored to their unique needs and preferences."
        />
        <WhyCard
          svg={<CertifiedIcon />}
          title="Certified Caregivers"
          description="All our caregivers are thoroughly vetted, certified, and experienced in child care and early childhood development."
          light
        />
        <WhyCard
          svg={<ShieldIcon />}
          title="Comprehensive Safety Measures"
          description="Safety is our top priority, with child-friendly facilities, 24/7 monitoring, and robust emergency protocols in place."
          light
        />
        <WhyCard
          svg={<ChildProgramIcon />}
          title="Child Development Programs"
          description="Our programs are designed to promote cognitive, emotional, and social growth through play-based and interactive learning activities."
        />
      </div>
    </section>
  );
};

export default WhySection;
