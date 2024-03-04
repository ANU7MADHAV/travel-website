import ExploreKerala from "@/components/explore/ExploreKerala";
import ExploreMalaysia from "@/components/explore/ExploreMalaysia";
import ExploreSecond from "@/components/explore/ExploreSecond";
import ExploreSingapore from "@/components/explore/ExploreSingapore";
import ExploreSrilanka from "@/components/explore/ExploreSrilanka";
import ExploreThailand from "@/components/explore/ExploreThailand";
import FirstSectionExplore from "@/components/explore/FirstSectionExplore";
import { SheetDemo } from "@/components/navbar/MobileNavbar";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-100 p-4 px-4 text-black">
        <Image
          src={logo}
          alt="logo"
          className="w-[60px] overflow-hidden rounded-full bg-white md:w-[80px] lg:w-[100px]"
        />
        <section className="flex items-center gap-12 text-black">
          <section className="hidden md:block">
            <Navbar />
          </section>
          <Link href="/contact">
            <button className="rounded-xl bg-[#DF6951] px-2 py-1 text-sm  md:text-base">
              Contact Us
            </button>
          </Link>

          <section className="block md:hidden">
            <SheetDemo />
          </section>
        </section>
      </div>
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
