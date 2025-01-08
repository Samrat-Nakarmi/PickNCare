import TabSwitch from "../components/TabSwitch";

const HeroSection = () => {
  return (
    <section className="h-screen relative">
      <div className="absolute w-full opacity-80">
        <img
          src="/images/hero_image.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-purple text-white py-3 px-5 rounded-xl mb-12">
          <h1 className="font-bold text-5xl">Connecting with Caregivers</h1>
        </div>
        <div>
          <TabSwitch />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
