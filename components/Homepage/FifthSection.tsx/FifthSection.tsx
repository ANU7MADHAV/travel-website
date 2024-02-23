import React from "react";
import PlaceCards from "./PlaceCards";
import swiss from "@/public/swiss.png";
import brazil from "@/public/brazil.png";
import egypt from "@/public/egypt.png";

const FifthSection = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#DF6951]">TRENDY</h1>
        <h1 className="py-1 text-xl font-bold md:text-2xl  lg:text-3xl">
          Our Trending Tour Packages
        </h1>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <PlaceCards
          image={swiss}
          days="8"
          country="Europe"
          description="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
          place="Switzerland"
          price="1000"
          pastPrice="1200"
        />
        <PlaceCards
          image={brazil}
          days="8"
          country="Brazil"
          description="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
          place="Amazon"
          price="1000"
          pastPrice="1200"
        />
        <PlaceCards
          image={egypt}
          days="8"
          country="Giza"
          description="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
          place="Amazon"
          price="1000"
          pastPrice="1200"
        />
      </div>
    </div>
  );
};

export default FifthSection;
