import Image from "next/image";
import React from "react";
import tourguide from "@/public/tourguide.png";

type Props = {
  image: any;
  firstHeading: string;
  secondHeading: string;
};

const Cards = ({ firstHeading, secondHeading, image }: Props) => {
  return (
    <div>
      <div className="flex h-auto flex-col items-center space-y-3 p-3 text-center shadow  lg:w-[200px] xl:w-[250px]">
        <Image
          src={image}
          alt="tourguide"
          className="md:w-[40px] lg:w-[80px] xl:w-[100px] "
        />
        <h1 className="font-semibold md:text-sm lg:text-base">
          {firstHeading}
        </h1>
        <p className=" md:text-xs lg:text-sm">{secondHeading}</p>
      </div>
    </div>
  );
};

export default Cards;
