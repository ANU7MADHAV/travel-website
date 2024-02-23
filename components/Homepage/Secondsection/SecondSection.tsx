import React from "react";
import Cards from "./Cards";
import tourguide from "@/public/tourguide.png";
import flight from "@/public/travelling.png";
import medical from "@/public/medical1.png";
import hands from "@/public/hands1.png";

const SecondSection = () => {
  return (
    <div className="flex justify-center px-4 py-8 ">
      <div className="flex w-full flex-col items-center space-y-3">
        <h3>CATEGORY</h3>
        <h1 className="text-2xl font-bold">We Offer Best Services</h1>
        <div className="flex flex-col gap-2 px-4 py-3 md:flex-row md:gap-2 lg:gap-6 xl:gap-8 ">
          <Cards
            image={tourguide}
            firstHeading="Guided Tours"
            secondHeading="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
          />
          <Cards
            image={flight}
            firstHeading="Best Flights Options"
            secondHeading="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
          />
          <Cards
            image={hands}
            firstHeading="Religious Tours"
            secondHeading="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
          />
          <Cards
            image={medical}
            firstHeading="Medical insurance"
            secondHeading="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
