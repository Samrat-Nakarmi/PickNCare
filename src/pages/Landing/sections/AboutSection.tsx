import React from "react";
import AboutCard from "../components/AboutCard";

const AboutSection = () => {
  return (
    <section className="w-[85%] my-12 mx-auto">
      <h1 className="text-center font-bold text-purple text-5xl">About Us</h1>
      <div className="grid grid-cols-2 gap-20 mt-12">
        <AboutCard
          title="Who we are"
          description_one="PickNCare is a trusted platform exclusively dedicated to child care, offering comprehensive solutions to support children&#39;s well-being and development."
          description_two="We are passionate about creating a safe, nurturing, and stimulating environment for children while empowering parents with reliable childcare options."
        />
        <AboutCard
          title="What we stand for"
          description_one="Our commitment lies in fostering the growth and happiness of every child, ensuring they receive the care and attention they deserve."
          description_two="We aim to be a dependable partner for parents, delivering services tailored to meet the unique needs of each family."
          light
        />
      </div>
    </section>
  );
};

export default AboutSection;
