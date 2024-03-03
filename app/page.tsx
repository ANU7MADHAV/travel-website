import FirstSection from "@/components/Homepage/FirstSection";
import FifthSection from "@/components/Homepage/fifthSection/FifthSection";
import FourthSection from "@/components/Homepage/fourthSection/FourthSection";
import SecondSection from "@/components/Homepage/Secondsection/SecondSection";
import ThirdSection from "@/components/Homepage/ThirdSection/ThirdSection";

export default function Home() {
  return (
    <main>
      <FirstSection />
      <h1 className="my-4 flex justify-center px-4 text-center text-sm font-bold text-[#DF6951] md:my-4 lg:my-6 lg:text-2xl xl:my-8 xl:text-3xl">
        Experience the Best international & Domestic tour packages With Us
      </h1>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </main>
  );
}
