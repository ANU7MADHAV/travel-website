import React from "react";
import ExploreCards from "./ExploreCards";
import dubai from "@/public/exploredubai.jpg";
import dubai2 from "@/public/dubai2.jpg";
import burj from "@/public/burj.jpg";

const ExploreSecond = () => {
  return (
    <div>
      <h1 className="mb-4 mt-6 flex justify-center  py-2 text-4xl font-bold">
        Dubai
      </h1>
      <div className="grid grid-cols-1 justify-center  px-8 md:grid-cols-3">
        <ExploreCards
          image={dubai}
          place="Dubai"
          days="2 Nights 3 Days"
          price="199 USD"
        />
        <ExploreCards
          image={dubai2}
          place="Dubai"
          days="4 Nights 5 Days"
          price="299 USD"
        />
        <ExploreCards
          image={burj}
          place="Burj Khalifa & Desert Safari"
          price="69 USD"
        />
      </div>
    </div>
  );
};

export default ExploreSecond;
