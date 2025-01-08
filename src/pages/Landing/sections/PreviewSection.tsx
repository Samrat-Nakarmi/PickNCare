
const PreviewSection = () => {
  return (
    <section className="my-12 flex items-center justify-center py-12">
      <div className="w-3/5 h-[375px] bg-purple flex items-center p-8">
        <div className="relative  w-full md:w-1/2 flex justify-center items-center">
          {/* Phone Image */}
          <img
            src="/images/App-preview.png" // Replace with the correct path to your image
            alt="Phone Mockup"
            className="h-[500px] object-contain absolute"
          />
        </div>
        {/* Right Section: Text Content */}
        <div className="w-full md:w-1/2 bg-purple-900 text-white p-8">
          <h2 className="text-lg text-center">
            Get the care you <span className="text-yellow font-bold">need</span>{" "}
            from someone you{" "}
            <span className="text-yellow font-bold">trust</span>.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
