import React from "react";
import ExploreCards from "./ExploreCards";
import thailand from "@/public/thailand.jpg";
import thailand1 from "@/public/thailand1.jpg";
import thailand2 from "@/public/thailand2.jpg";

const ExploreThailand = () => {
  return (
    <div>
      <h1 className="mb-4 mt-6 flex justify-center  py-2 text-4xl font-bold">
        Thailand
      </h1>
      <div className="grid grid-cols-1 justify-center  px-8 md:grid-cols-3">
        <ExploreCards
          image={thailand}
          place="Thailand"
          days="2 Nights 3 days "
          price="79 USD"
        />
        <ExploreCards
          image={thailand1}
          place="Thailand"
          days="3 Nights 4 Days"
          price="99 USD"
        />
        <ExploreCards
          image={thailand2}
          place="Thailand"
          days="4 Nights 5 Days"
          price="159 USD"
        />
      </div>
    </div>
  );
};

export default ExploreThailand;
