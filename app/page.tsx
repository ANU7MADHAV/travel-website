import FifthSection from "@/components/Homepage/FifthSection.tsx/FifthSection";
import FirstSection from "@/components/Homepage/FirstSection";
import FourthSection from "@/components/Homepage/FourthSection.tsx/FourthSection";
import SecondSection from "@/components/Homepage/Secondsection/SecondSection";
import ThirdSection from "@/components/Homepage/ThirdSection/ThirdSection";

export default function Home() {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </main>
  );
}
