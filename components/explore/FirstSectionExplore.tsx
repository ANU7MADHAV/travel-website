import Image from "next/image";
import travler from "@/public/traveler.png";

const FirstSectionExplore = () => {
  return (
    <div className="flex bg-slate-100">
      <section className="flex h-screen w-full flex-col items-center justify-center  space-y-5 pl-4 md:pl-[80px] ">
        <h1 className="text-4xl font-bold md:text-5xl  lg:text-6xl">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="font-semibold">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
      </section>

      <div className="flex w-full justify-end ">
        <Image src={travler} alt="travler" className="w-[700px] bg-center" />
      </div>
    </div>
  );
};

export default FirstSectionExplore;
