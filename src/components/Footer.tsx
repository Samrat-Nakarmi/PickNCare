import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-full bg-white my-12 border-t border-[#ccc] pt-12">
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-5">
          <h1 className="text-3xl">PickNCare</h1>
        </div>
        <div className="w-full text-3xl text-center flex gap-10 justify-center mb-12">
          <FaXTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
        <div className="flex justify-between mb-12">
          <div>
            <h3 className="mb-4 font-bold">About PickNCare</h3>
            <p>About Us</p>
            <p>News Coverage</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h3 className="mb-4 font-bold">About PickNCare</h3>
            <p>About Us</p>
            <p>News Coverage</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h3 className="mb-4 font-bold">About PickNCare</h3>
            <p>About Us</p>
            <p>News Coverage</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="text-center">
          <p>All rights reserved ©PickNCare 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
