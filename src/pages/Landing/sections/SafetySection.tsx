import React from "react";
import SafetyCard from "../components/SafetyCard";
import SafetyIcon from "@/components/icons/SafetyIcon";

type Props = {};

const SafetySection = (props: Props) => {
  return (
    <section className="w-[85%] my-12 mx-auto">
      <div className="w-full grid grid-cols-2 gap-10">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
