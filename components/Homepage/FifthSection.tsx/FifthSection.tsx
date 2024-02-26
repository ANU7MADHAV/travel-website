import React from "react";
import PlaceCards from "./PlaceCards";
import dubai from "@/public/dubai.jpg";
import singapore from "@/public/singapore.jpg";
import kerala from "@/public/kerala.jpg";

const FifthSection = () => {
  return (
    <div className="my-[30px] flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#DF6951]">TRENDY</h1>
        <h1 className="py-1 text-xl font-bold md:text-2xl  lg:text-3xl">
          Our Trending Tour Packages
        </h1>
      </div>
      <div className="flex flex-col gap-8  lg:flex-row">
        <PlaceCards
          image={dubai}
          country="Dubai"
          description="The City of Gold is known for its amazing architecture, breath-taking landmarks, the magnificent shopping festival and the warmth of its people. Dubai has just about everything you would need for a perfect holiday trip. The topography of Dubai is just fascinating as the city itself."
        />
        <PlaceCards
          image={singapore}
          country="Singapore"
          description="The exquisitely beautiful attractions like Sentosa Island, Gardens by the Bay, Universal Studios and Night Safari are the pride of Singapore tourism. Singapore is an ideal destination to plan a fun-filled holiday with family."
        />
        <PlaceCards
          image={kerala}
          country="Kerala"
          description="Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world."
        />
      </div>
    </div>
  );
};

export default FifthSection;
