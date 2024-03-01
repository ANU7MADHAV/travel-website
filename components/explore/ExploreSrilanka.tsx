import React from "react";
import ExploreCards from "./ExploreCards";
import srilanka from "@/public/srilanka.jpg";
import srilanka1 from "@/public/srilanka1.jpg";
import srilanka2 from "@/public/srilanka2.jpg";

const ExploreSrilanka = () => {
  return (
    <div>
      <h1 className="mb-4 mt-6 flex justify-center  py-2 text-4xl font-bold">
        Srilanka
      </h1>
      <div className="grid grid-cols-1 justify-center  px-8 md:grid-cols-3">
        <ExploreCards
          image={srilanka}
          place="Srilanka"
          days="3 Nights 4 days "
          price="299 USD"
        />
        <ExploreCards
          image={srilanka1}
          place="Srilanka"
          days="4 Nights 5 Days"
          price="399 USD"
        />
        <ExploreCards
          image={srilanka2}
          place="Srilanka"
          days="5 Nights 6 Days"
          price="499 USD"
        />
      </div>
    </div>
  );
};

export default ExploreSrilanka;
