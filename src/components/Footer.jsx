import React from "react";
import heroImage from "../assets/Sidiki-Logo.jpg";

function Footer() {
  return (
    <div className="px-4 py-8 bg-white">
      <div className="flex items-center gap-2">
        <img
          src={heroImage}
          className="rounded-md"
          width={90}
          height={90}
          alt="logo"
        />

        <h1 className="text-orange-500 text-3xl font-signature">
          Sidiki Alare
        </h1>
      </div>
      <p className="mt-2 text-orange-500 pt-4">
        © 2023. All Rights Reserved to Suweba.
      </p>
    </div>
  );
}

export default Footer;
