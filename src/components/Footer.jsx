import React from "react";
import heroImage from "../assets/lg1.svg";

function Footer() {
  return (
    <div className="px-4 py-8 bg-white">
      <div className="flex items-center">
        <img
          src={heroImage}
          className="rounded-md"
          width={48}
          height={32}
          alt="logo"
        />

        <h1 className="text-custom-blue text-3xl font-bold">Sidiki Alare</h1>
      </div>
      <p className="mt-2 text-custom-blue pt-4">
        © 2023. All Rights Reserved to Suweba.
      </p>
    </div>
  );
}

export default Footer;
