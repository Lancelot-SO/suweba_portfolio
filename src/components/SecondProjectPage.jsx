import React from "react";
import HeroImage from "../assets/hero1.jpg";

const SecondProjectPage = () => {
  return (
    <div className="w-full py-4">
      {/* Add padding-top to create space below the NavBar */}
      <div className="pt-20">
        <h1>SecondProjectPage</h1>
        <img src={HeroImage} alt="sec" width={300} height={500} />
      </div>
    </div>
  );
};

export default SecondProjectPage;
