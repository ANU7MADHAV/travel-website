import Image from "next/image";
import React from "react";
import honeymoon from "@/public/honeymoon.jpeg";

const ThirdSection = () => {
  return (
    <div className="flex flex-col items-center px-4 text-left md:mt-8 md:grid md:grid-cols-2">
      <div>
        <Image
          src={honeymoon}
          alt="honeymoon"
          className="md:ml-[20px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
        />
      </div>
      <div className="ml-3 py-4 md:ml-0 md:mt-[80px] lg:mt-[90px] xl:mt-[100px]">
        <h3 className="py-2 text-xs font-semibold text-[#DF6951] md:my-2 md:text-sm  lg:my-3 lg:text-base xl:my-4 ">
          HONEYMOON SPECIALS
        </h3>
        <h1 className="py-2 text-2xl font-bold md:text-3xl lg:text-4xl  xl:text-5xl">
          Our Romantic Tropical Destinations
        </h1>
        <p className="py-3 md:py-4 md:text-xs lg:py-5 lg:text-sm xl:py-6 xl:text-base">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <button className="rounded-xl bg-[#DF6951] px-2 py-1 text-white md:text-sm lg:text-base">
          View Packages
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;
