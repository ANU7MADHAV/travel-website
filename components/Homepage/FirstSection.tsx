import Image from "next/image";
import Navbar from "../Navbar.tsx/Navbar";
import logo from "@/public/logo.png";
import { SheetDemo } from "../Navbar.tsx/MobileNavbar";

const FirstSection = () => {
  return (
    <div className="h-screen w-auto bg-[url('/bgImage.png')] bg-cover bg-center py-2 md:p-4">
      <div className="flex items-center justify-between px-4">
        <Image
          src={logo}
          alt="logo"
          className="w-[60px] overflow-hidden rounded-full bg-white md:w-[80px] lg:w-[100px]"
        />
        <section className="flex items-center gap-12 text-white">
          <section className="hidden md:block">
            <Navbar />
          </section>
          <button className="rounded-xl bg-[#DF6951] px-2 py-1 text-sm  md:text-base">
            Contact Us
          </button>
          <section className="block md:hidden">
            <SheetDemo />
          </section>
        </section>
      </div>
      <div className="flex h-full  items-center justify-start">
        <h1 className="ml-5 text-left text-lg text-white sm:text-xl md:ml-[80px] md:text-3xl lg:ml-[100px] lg:text-4xl xl:ml-[110px] xl:text-5xl">
          No matter where you’re going to,
          <br /> we’ll take you there{" "}
          <span className="cursor-pointer rounded-md bg-[#DF6951] px-2 text-xs  sm:text-sm md:relative md:bottom-1 md:text-lg lg:text-xl xl:text-2xl">
            Explore
          </span>
        </h1>
      </div>
    </div>
  );
};

export default FirstSection;
