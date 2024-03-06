import Image from "next/image";
import React from "react";
import water from "@/public/water.png";

const SecondSectionAbout = () => {
  return (
    <div className="my-8 flex flex-col items-center justify-center gap-8 px-4 md:grid md:grid-cols-2 md:pl-[200px] ">
      <section className="flex flex-col text-left ">
        <h1 className="text-left text-3xl font-semibold text-[#DF6951]">
          We Provide You Best
        </h1>
        <p className="my-6 font-semibold">
          We are the Best world wide travel and tour leading company. Since 2009
          We specialize in the extraordinary with a worldwide portfolio. Inspire
          unforgettable vacations with guides certified with over 13 years of
          expertise and first aid. We always make sure you are happy, helpful
          and safe during your tour.
        </p>
      </section>
      <section>
        <Image src={water} alt="water" className="w-[400px]" />
      </section>
    </div>
  );
};

export default SecondSectionAbout;
