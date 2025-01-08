import React from "react";
import Button from "../pages/Landing/components/Button";

const Navbar = () => {
  return (
    <div className="w-full bg-white ">
      <div className="w-[85%] py-4 m-auto flex justify-between items-center">
        <div>
          <h1>PickNCare</h1>
        </div>
        <div className="flex gap-6">
          <Button light>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
