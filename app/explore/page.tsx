import ExploreKerala from "@/components/explore/ExploreKerala";
import ExploreMalaysia from "@/components/explore/ExploreMalaysia";
import ExploreSecond from "@/components/explore/ExploreSecond";
import ExploreSingapore from "@/components/explore/ExploreSingapore";
import ExploreSrilanka from "@/components/explore/ExploreSrilanka";
import ExploreThailand from "@/components/explore/ExploreThailand";
import FirstSectionExplore from "@/components/explore/FirstSectionExplore";

const page = () => {
  return (
    <div>
      <FirstSectionExplore />
      <ExploreSecond />
      <ExploreSingapore />
      <ExploreThailand />
      <ExploreSrilanka />
      <ExploreMalaysia />
      <ExploreKerala />
    </div>
  );
};

export default page;
