import ExploreCards from "./ExploreCards";
import singapore1 from "@/public/singapore1.jpg";
import singapore2 from "@/public/singapore2.jpg";
import singapore3 from "@/public/singapore3.jpg";

const ExploreSingapore = () => {
  return (
    <div>
      <h1 className="mb-4 mt-6 flex justify-center  py-2 text-4xl font-bold">
        Singapore
      </h1>
      <div className="grid grid-cols-1 justify-center  px-8 md:grid-cols-3">
        <ExploreCards
          image={singapore1}
          place="Singapore"
          days="2 Nights 3 days "
          price="99 USD"
        />
        <ExploreCards
          image={singapore2}
          place="Singapore"
          days="3 Nights 4 Days"
          price="199 USD"
        />
        <ExploreCards
          image={singapore3}
          place="Singapore"
          days="4 Nights 5 Days"
          price="299 USD"
        />
      </div>
    </div>
  );
};

export default ExploreSingapore;
