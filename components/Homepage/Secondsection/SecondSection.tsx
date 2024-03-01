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
        <h1>CATEGORY</h1>
        <h1 className="text-2xl font-bold">We Offer Best Services</h1>
        <div className="flex flex-col gap-2 px-4 py-3 md:flex-row md:gap-2 lg:gap-6 xl:gap-8 ">
          <Cards
            image={tourguide}
            firstHeading="Guided Tours"
            secondHeading="We provide all tour packages with our experienced tour guide."
          />
          <Cards
            image={flight}
            firstHeading="Best Flights Options"
            secondHeading="
            Select Economy, Business, or First class, with light travel option."
          />
          <Cards
            image={hands}
            firstHeading="Religious Tours"
            secondHeading="Worldwide religious tour packages."
          />
          <Cards
            image={medical}
            firstHeading="Visa and travel insurance"
            secondHeading="We Provide all Country Visas & Travel Insurance"
          />
        </div>
      </div>
      <h1>changed</h1>
    </div>
  );
};

export default SecondSection;
