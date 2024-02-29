import Image from "next/image";
import React from "react";
import dubai from "@/public/exploredubai.jpg";
import { CiStar } from "react-icons/ci";

const ExploreCards = () => {
  return (
    <div className="flex  justify-center">
      <div className="w-[400px] shadow">
        <Image
          src={dubai}
          alt="dubai"
          className="overflow-hidden rounded-md p-2"
        />
        <section className="p-2">
          <h1>Dubai</h1>
          <p>
            Qui tempore voluptate qui quia commodi rem praesentium alias et.
          </p>
          <p className="flex">
            price{" "}
            <span className="flex items-center">
              <CiStar className="text-[#DF6951]" /> 5
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ExploreCards;
