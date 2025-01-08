import SafetyCard from "../components/SafetyCard";
import SafetyIcon from "@/components/icons/SafetyIcon";
import IdentityIcon from "@/components/icons/IdentityIcon";
import GroupIcon from "@/components/icons/GroupIcon";

const SafetySection = () => {
  return (
    <section className="w-[85%] my-12 mx-auto">
      <div className="w-full grid grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-bold text-4xl mb-4">
            Worried About <span className="text-yellow">Safety?</span>
          </h2>
          <p className="text-brown text-xl mb-4">
            Our team&#39;s first priority is your{" "}
            <span className="font-bold italic">security and peace of mind</span>
          </p>
          <div className="w-full flex flex-col gap-4">
            <SafetyCard
              svg={<SafetyIcon />}
              description="Caregivers are thoroughly background checked"
            />
            <SafetyCard
              svg={<IdentityIcon />}
              description="Verified IDs and transparent reviews"
            />
            <SafetyCard
              svg={<GroupIcon />}
              description="Dedicated security and support teams"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/safety_section_image.jpg"
            alt=""
            className="absolute w-[550px] right-0 -translate-x-4 translate-y-4 z-10"
          />
          <div className="bg-purple w-[550px] h-[366.67px] ml-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
