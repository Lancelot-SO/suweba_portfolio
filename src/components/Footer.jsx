import React from "react";
import heroImage from "../assets/heroImage.png";

function Footer() {
  return (
    <div className="px-4 py-8 bg-blue-900">
      <div className="flex items-center gap-2">
        <img
          src={heroImage}
          className="rounded-md"
          width={32}
          height={32}
          alt="logo"
        />

        <h1 className="text-yellow-500 text-3xl font-signature">Suweba</h1>
      </div>
      <p className="mt-2 text-white pt-4">
        © 2023. All Rights Reserved to Suweba.
      </p>
    </div>
  );
}

export default Footer;
