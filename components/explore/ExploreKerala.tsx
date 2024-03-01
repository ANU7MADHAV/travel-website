import React from "react";
import ExploreCards from "./ExploreCards";
import kerala from "@/public/kerala1.jpg";
import kerala2 from "@/public/kerala2.jpg";
import boat from "@/public/boat.jpg";

const ExploreKerala = () => {
  return (
    <div>
      <h1 className="mb-4 mt-6 flex justify-center  py-2 text-4xl font-bold">
        Kerala
      </h1>
      <div className="grid grid-cols-1 justify-center  px-8 md:grid-cols-3">
        <ExploreCards
          image={kerala}
          place="Kerala"
          days="3 Nights 4 days "
          price="199 USD"
        />
        <ExploreCards
          image={kerala2}
          place="Kerala"
          days="4 Nights 5 Days"
          price="250 USD"
        />
        <ExploreCards image={boat} place="House Boat" price="72 USD" />
      </div>
    </div>
  );
};

export default ExploreKerala;
