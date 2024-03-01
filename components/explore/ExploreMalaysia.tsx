import ExploreCards from "./ExploreCards";
import malaysia from "@/public/malaysia.jpg";
import malaysia1 from "@/public/malaysia1.jpg";
import malaysia2 from "@/public/malaysia2.jpg";

const ExploreMalaysia = () => {
  return (
    <div>
      <h1 className="mb-4 mt-6 flex justify-center  py-2 text-4xl font-bold">
        Malaysia
      </h1>
      <div className="grid grid-cols-1 justify-center  px-8 md:grid-cols-3">
        <ExploreCards
          image={malaysia}
          place="Thailand"
          days="2 Nights 3 days "
          price="159 USD"
        />
        <ExploreCards
          image={malaysia1}
          place="Thailand"
          days="3 Nights 4 Days"
          price="259 USD"
        />
        <ExploreCards
          image={malaysia2}
          place="Thailand"
          days="4 Nights 5 Days"
          price="359 USD"
        />
      </div>
    </div>
  );
};

export default ExploreMalaysia;
